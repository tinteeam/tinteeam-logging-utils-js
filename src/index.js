// Logs errors

function formatTimeAndDate() {
    return new Date.toISOString()
}

export function logError(message) {
    console.log(`[${timestamp()}] [ERROR]: ${message}`);
}

export function logWarn(message) {
    console.log(`[${timestamp()}] [WARN]: ${message}`);
}

export function logInfo(message) {
    console.log(`[${timestamp()}] [INFO]: ${message}`);
}