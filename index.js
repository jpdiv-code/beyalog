'use strict';

const yaml = require('yaml');

function doNothing() { }

// BC

function bc_info(message, extra) {
    if (extra) {
        const t = new Date();
        console.info('\x1b[32m' + yaml.stringify({
            timestamp: t.getTime(),
            level: 'info',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }) + '\x1b[0m');
    } else {
        const t = new Date();
        console.info('\x1b[32mtimestamp: ' + t.getTime() + 
            '\nlevel: info\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n\x1b[0m');
    }
}

function bc_warn(message, extra) {
    if (extra) {
        const t = new Date();
        console.warn('\x1b[33m' + yaml.stringify({
            timestamp: t.getTime(),
            level: 'warn',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }) + '\x1b[0m');
    } else {
        const t = new Date();
        console.warn('\x1b[33mtimestamp: ' + t.getTime() + 
            '\nlevel: warn\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n\x1b[0m');
    }
}

function bc_error(message, extra) {
    if (extra) {
        const t = new Date();
        console.error('\x1b[31m' + yaml.stringify({
            timestamp: t.getTime(),
            level: 'error',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }) + '\x1b[0m');
    } else {
        const t = new Date();
        console.error('\x1b[31mtimestamp: ' + t.getTime() + 
            '\nlevel: error\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n\x1b[0m');
    }
}

function bc_debug(message, extra) {
    if (extra) {
        const t = new Date();
        console.debug('\x1b[36m' + yaml.stringify({
            timestamp: t.getTime(),
            level: 'debug',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }) + '\x1b[0m');
    } else {
        const t = new Date();
        console.debug('\x1b[36mtimestamp: ' + t.getTime() + 
            '\nlevel: debug\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n\x1b[0m');
    }
}

// B

function b_info(message, extra) {
    if (extra) {
        const t = new Date();
        console.info(yaml.stringify({
            timestamp: t.getTime(),
            level: 'info',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }));
    } else {
        const t = new Date();
        console.info('timestamp: ' + t.getTime() + 
            '\nlevel: info\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n');
    }
}

function b_warn(message, extra) {
    if (extra) {
        const t = new Date();
        console.warn(yaml.stringify({
            timestamp: t.getTime(),
            level: 'warn',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }));
    } else {
        const t = new Date();
        console.warn('timestamp: ' + t.getTime() + 
            '\nlevel: warn\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n');
    }
}

function b_error(message, extra) {
    if (extra) {
        const t = new Date();
        console.error(yaml.stringify({
            timestamp: t.getTime(),
            level: 'error',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }));
    } else {
        const t = new Date();
        console.error('timestamp: ' + t.getTime() + 
            '\nlevel: error\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n');
    }
}

function b_debug(message, extra) {
    if (extra) {
        const t = new Date();
        console.debug(yaml.stringify({
            timestamp: t.getTime(),
            level: 'debug',
            time: `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}`,
            message,
            extra,
        }));
    } else {
        const t = new Date();
        console.debug('timestamp: ' + t.getTime() + 
            '\nlevel: debug\ntime: ' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` + 
            '\nmessage: ' + (message.includes('\n') ? ('|-\n  ' + message.replace('\n', '\n  ')) : message) + '\n');
    }
}

// C

function c_info(message, extra) {
    const t = new Date();
    console.info('\x1b[32m{"timestamp":' + t.getTime() +
        ',"level":"info","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1) + '\x1b[0m');
}

function c_warn(message, extra) {
    const t = new Date();
    console.warn('\x1b[33m{"timestamp":' + t.getTime() +
        ',"level":"warn","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1) + '\x1b[0m');
}

function c_error(message, extra) {
    const t = new Date();
    console.error('\x1b[31m{"timestamp":' + t.getTime() +
        ',"level":"error","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1) + '\x1b[0m');
}

function c_debug(message, extra) {
    const t = new Date();
    console.debug('\x1b[36m{"timestamp":' + t.getTime() +
        ',"level":"debug","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1) + '\x1b[0m');
}

//

function _info(message, extra) {
    const t = new Date();
    console.info('{"timestamp":' + t.getTime() +
        ',"level":"info","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1));
}

function _warn(message, extra) {
    const t = new Date();
    console.warn('{"timestamp":' + t.getTime() +
        ',"level":"warn","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1));
}

function _error(message, extra) {
    const t = new Date();
    console.error('{"timestamp":' + t.getTime() +
        ',"level":"error","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1));
}

function _debug(message, extra) {
    const t = new Date();
    console.debug('{"timestamp":' + t.getTime() +
        ',"level":"debug","time":"' + `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}:${t.getMilliseconds()}` +
        '",' + JSON.stringify({ message, extra }).substr(1));
}

//

module.exports = {
    create({ enabled, debugOutput, beautify, colorize }) {
        const beyalog = { };
        if (enabled) {
            if (beautify) {
                if (colorize) {
                    beyalog.info = bc_info;
                    beyalog.warn = bc_warn;
                    beyalog.error = bc_error;
                    if (debugOutput) {
                        beyalog.debug = bc_debug;
                    } else {
                        beyalog.debug = doNothing;
                    }
                } else {
                    beyalog.info = b_info;
                    beyalog.warn = b_warn;
                    beyalog.error = b_error;
                    if (debugOutput) {
                        beyalog.debug = b_debug;
                    } else {
                        beyalog.debug = doNothing;
                    }
                }
            } else {
                if (colorize) {
                    beyalog.info = c_info;
                    beyalog.warn = c_warn;
                    beyalog.error = c_error;
                    if (debugOutput) {
                        beyalog.debug = c_debug;
                    } else {
                        beyalog.debug = doNothing;
                    }
                } else {
                    beyalog.info = _info;
                    beyalog.warn = _warn;
                    beyalog.error = _error;
                    if (debugOutput) {
                        beyalog.debug = _debug;
                    } else {
                        beyalog.debug = doNothing;
                    }
                }
            }
        } else {
            beyalog.info = doNothing;
            beyalog.warn = doNothing;
            beyalog.error = doNothing;
            beyalog.debug = doNothing;
        }
        return beyalog;
    },
};
