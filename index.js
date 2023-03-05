const logger = require('./logger')

const miNombre = val => {
    if (val === 'Angel') {
        logger.info('Tienes razon, es mi nombre :)')
        return val
    } else if (typeof val === "number") {
        logger.warn('Buen intento parker, eso es un numero')
        return val
    } else if (val === undefined) {
        logger.info('Pon un nombre en mi valor')
    } else {
    throw new Error('Ese no es mi nombre :(')
    }
}

try {
    const nombre = miNombre('Carlos')    
} catch (error) {
    logger.error(error)
}