
const date = new Date()
const time = date.getTime()



// Logs errors
export default function logError(message) {
    console.log(date + "[ERROR]: " + message)
}

export default function logWarn(message) {
    console.log(date + "[WARN]: " + message)
}

export default function logInfo(message) {
    console.log(date + "[INFO]: " + message)
}