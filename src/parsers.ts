import assert from 'assert';
import { TLVS } from './constants';
import { MultiMap } from './MultiMap';
import { Flap, Snac, TLV } from './types';

/**
 * @see https://en.wikipedia.org/wiki/OSCAR_protocol#FLAP_header
 */
export function parseFlap(rawFlap: Buffer): Flap {
    const id = rawFlap.readUInt8(0);
    assert(id === 0x2a, 'Unexpected Flap ID');

    // TODO: Implement custom util.inspect.custom logger
    // for better debugging
    return {
        channel: rawFlap.readUInt8(1),
        sequence: rawFlap.readUInt16BE(2),
        byteLength: rawFlap.readUInt16BE(4),
        data: rawFlap.subarray(6),
    };
}

/**
 * @see http://web.archive.org/web/20080308233204/http://dev.aol.com/aim/oscar/#SNAC
 */
export function parseSnac(rawSnac: Buffer): Snac {
    // TODO: Implement custom util.inspect.custom logger
    // for better debugging
    return {
        family: rawSnac.readUInt16BE(0),
        subtype: rawSnac.readUInt16BE(2),
        flags: rawSnac.readUInt16BE(4),
        requestID: rawSnac.readUInt32BE(6),
        data: rawSnac.subarray(10),
    };
}

/**
 * @see http://iserverd1.khstu.ru/oscar/snac_17_06.html
 */
export function parseAuthRequest(data: Buffer) {
    const tlvs = parseTLVs(data);
    const screennameTLV = tlvs.first(TLVS.SCREENNAME);

    return {
        screenname: screennameTLV.value.toString('ascii'),
    };
}

/**
 * @see http://iserverd1.khstu.ru/oscar/snac_17_02.html
 */
export function parseMD5LoginRequest(data: Buffer) {
    const tlvs = parseTLVs(data);
    const screenname = tlvs.first(TLVS.SCREENNAME);
    const passwordHash = tlvs.first(TLVS.PASSWORD_HASH);
    const clientID = tlvs.first(TLVS.CLIENT_ID_STRING);

    return { screenname, passwordHash, clientID };
}

/**
 * @see http://iserverd1.khstu.ru/oscar/basic.html#b0003
 */
export function parseTLVs(data: Buffer) {
    const tlvs = new MultiMap<number, TLV>();

    for (let tlvStart = 0; tlvStart < data.byteLength; ) {
        const type = data.readUInt16BE(tlvStart);

        const lengthStart = tlvStart + 2;
        const length = data.readUInt16BE(lengthStart);

        const valueStart = lengthStart + 2;
        // A TLV's value can be 0 bytes. Odd that they're
        // not just excluded from the request, but ¯\_(ツ)_/¯
        const value = length
            ? data.subarray(valueStart, valueStart + length)
            : // Empty buffer so we don't have to explicitly handle
              // a null/undefined anywhere a TLV type propagates
              Buffer.alloc(0);

        tlvs.set(type, { type, length, value });

        tlvStart = valueStart + length;
    }

    return tlvs;
}
