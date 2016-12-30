export function strace(message: any, ...optionalParams: any[]): void {
    for (let i = 0; i < arguments.length; i++) {
        console.trace(arguments[i]);
    }
}

export function trace(message: any, ...optionalParams: any[]): void {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

