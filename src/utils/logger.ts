type Metadata = {
  error?: Error | unknown
  attributes?: {
    [key: string]: unknown
  }
}

// add a more restricted logging format
// we use next-logger for actual formatting / json conversion
export const logger = {
  info: (message: string, metadata: Metadata) => {
    console.log(message, metadata)
  },
  error: (message: string, metadata: Metadata) => {
    console.error(message, metadata)
  },
}
