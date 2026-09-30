import type { Attachment } from "svelte/attachments";
type Toggle = (toggle?: boolean) => void;
export declare class DialogState {
    #private;
    open: boolean;
    closed: boolean;
    node: HTMLDialogElement | undefined;
    toggle: Toggle | undefined;
    close: (() => void) | undefined;
    show: (() => void) | undefined;
    get nodeId(): string | undefined;
    attach(): Attachment;
}
export {};
