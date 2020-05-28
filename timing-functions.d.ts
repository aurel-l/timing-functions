declare module "sleep/index" {
    const _default: (time: number) => Promise<void>;
    export default _default;
}
declare module "utils/env" {
    let env: string;
    export default env;
}
declare module "frame/index" {
    let frame: () => Promise<void>;
    export default frame;
}
declare module "schedule/index" {
    export interface IdleDeadline {
        didTimeout: boolean;
        timeRemaining: () => number;
    }
    type IdleCallbackHandle = number;
    global {
        interface Window {
            requestIdleCallback: (callback: () => any, options?: {
                timeout?: number;
            }) => IdleCallbackHandle;
            cancelIdleCallback: (handle: IdleCallbackHandle) => void;
        }
    }
    let schedule: (maxTimeout?: number) => Promise<IdleDeadline>;
    export default schedule;
}
declare module "timeout/index" {
    const _default_1: (timeout: number, promise: Promise<any>, message?: string) => Promise<any>;
    export default _default_1;
}
declare module "timing-functions" {
    export const sleep: (time: number) => Promise<void>;
    export const frame: () => Promise<void>;
    export const schedule: (maxTimeout?: number) => Promise<import("schedule").IdleDeadline>;
    export const timeout: (timeout: number, promise: Promise<any>, message?: string) => Promise<any>;
}
