export type ComboboxOpts<T> = {
    initial?: [string, T][];
    multiple?: boolean;
};
export default class ComboboxState<T> {
    #private;
    multiple: boolean;
    constructor(props?: ComboboxOpts<T>);
    get items(): [string, T][];
    get selected(): [string, T][];
    get unselected(): [string, T][];
    clearSelected(): void;
    add(key: string, value: T): () => void;
    del(key: string): void;
    picked(key: string): boolean;
    get pickedall(): boolean;
    pick: (key: string) => boolean;
    unpick: (key: string) => boolean;
    toggle: (key: string, toggle?: boolean) => boolean;
    toggleall: (toggle?: boolean) => void;
}
