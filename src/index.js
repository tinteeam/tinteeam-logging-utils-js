
const date = new Date()
const time = date.getTime()



// Logs errors
export function logError(message) {
    console.log(date + "[ERROR]: " + message)
}

export function logWarn(message) {
    console.log(date + "[WARN]: " + message)
}

export function logInfo(message) {
    console.log(date + "[INFO]: " + message)
}