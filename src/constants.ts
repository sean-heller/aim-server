/**
 * @see http://iserverd1.khstu.ru/oscar/tlv_tags.html
 */
export const TLVS = {
    SCREENNAME: 0x1,
    NEW_PASSWORD: 0x2,
    CLIENT_ID_STRING: 0x3,
    ERROR_DESCRIP_URL: 0x4,
    BOS_ADDRESS: 0x5,
    AUTH_COOKIE: 0x6,
    SNAC_VERSION: 0x7,
    ERROR_SUBCODE: 0x8,
    DISCONNECT_REASON: 0x9,
    RECONNECT_HOST: 0xa,
    URL: 0xb,
    DEBUG_DATA: 0xc,
    FAMILY_ID: 0xd,
    CLIENT_COUNTRY: 0xe,
    CLIENT_LANG: 0xf,
    SCRIPT: 0x10,
    EMAIL: 0x11,
    OLD_PASSWORD: 0x12,
    REGISTRATION_STATUS: 0x13,
    DISTRIBUTION_NUM: 0x14,
    PERSONAL_TEXT: 0x15,
    CLIENT_ID: 0x16,
    CLIENT_MAJOR: 0x17,
    CLIENT_MINOR: 0x18,
    CLIENT_LESSER: 0x19,
    CLIENT_BUILD: 0x1a,
    PASSWORD_HASH: 0x25,
    LATEST_BETA_VERSION: 0x40,
    BETA_DIGEST_SIG: 0x48,
    RELEASE_DIGEST_SIG: 0x49,
    CHANGE_PASSWORD_URL: 0x54,
    USE_NEW_HASH_STRATEGY: 0x4c,
};

/**
 * @see http://iserverd1.khstu.ru/oscar/families.html
 */
export const SNACS = {
    GENERAL: {
        family: 0x1,
        subtypes: {
            SUPPORTED_FAMILIES: 0x3,
        },
    },
    LOCATION: {
        family: 0x2,
    },
    BUDDYLIST: {
        family: 0x3,
    },
    ICBM: {
        family: 0x4,
    },
    INVITATION: {
        family: 0x6,
    },
    ADMINISTRATIVE: {
        family: 0x7,
    },
    POPUP_NOTICE: {
        family: 0x8,
    },
    PRIVACY_MGMT: {
        family: 0x9,
    },
    USER_LOOKUP: {
        family: 0x0a,
    },
    USAGE_STATS: {
        family: 0x0b,
    },
    SSI: {
        family: 0x13,
    },
    OFFLINE: {
        family: 0x15,
    },
    AUTH: {
        family: 0x17,
        subtypes: {
            REGISTRATION_REFUSED: 0x1,
            LOGIN_REQUEST: 0x2,
            LOGIN_REPLY: 0x3,
            REQUEST_NEW_UIN: 0x4,
            NEW_UIN_RESPONSE: 0x5,
            MD5_AUTH_REQUEST: 0x6,
            MD5_AUTH_RESPONSE: 0x7,
        },
    },
};

export const LOGIN_ERRORS = {
    INCORRECT_NICK_OR_PASS: 0x4,
};
