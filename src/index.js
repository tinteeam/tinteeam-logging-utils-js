// Logs errors
export function logError(message) {
    console.log(`${new Date()} [ERROR]: ${message}`);
}

export function logWarn(message) {
    console.log(`${new Date()} [WARN]: ${message}`);
}

export function logInfo(message) {
    console.log(`${new Date()} [INFO]: ${message}`);
}