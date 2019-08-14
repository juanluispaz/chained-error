export default class ChainedError extends Error {
    // @ts-ignore
    cause: any

    constructor(messageOrCause: any)
    constructor(message: string, cause: any)
    constructor(message: string | any, cause?: any) {
        let inner: any
        if (message instanceof Error) {
            super(message.message)
            inner = message
            this.stack = this.stack + '\nCaused By: ' + message.stack
        } else if (arguments.length <= 1) {
            super(message)
            inner = message
            this.stack = this.stack + '\nCaused By: ' + cause
        } else {
            super(message)
            inner = cause
            if (cause instanceof Error) {
                this.stack = this.stack + '\nCaused By: ' + cause.stack
            } else {
                this.stack = this.stack + '\nCaused By: ' + cause
            }
        }

        Object.defineProperty(this, 'cause', {
            value: inner,
            writable: true,
            enumerable: false,
            configurable: true
        })
    }
    
}