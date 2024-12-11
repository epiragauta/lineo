import log from 'loglevel';

// Configurar el nivel de logging según el entorno
const isProduction = process.env.NODE_ENV === 'production';
log.setLevel(isProduction ? 'warn' : 'debug'); // Solo muestra advertencias y errores en producción

const Logger = {
  debug: (message, ...optionalParams) => log.debug(`[DEBUG]: ${message}`, ...optionalParams),
  info: (message, ...optionalParams) => log.info(`[INFO]: ${message}`, ...optionalParams),
  warn: (message, ...optionalParams) => log.warn(`[WARN]: ${message}`, ...optionalParams),
  error: (message, ...optionalParams) => log.error(`[ERROR]: ${message}`, ...optionalParams),
};

export default Logger;
