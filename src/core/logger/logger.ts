import winston from 'winston'
import { v4 } from 'uuid'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'server', correlationId: v4() },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
})

export default logger
