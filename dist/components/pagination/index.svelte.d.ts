import { type PaginationVariants } from "@heroui/styles";
import { Context, type Box, type Getter } from "svelte-utils";
export type PaginationProps = {
    total?: number;
    pageSize?: number;
    disabled?: boolean;
} & PaginationVariants;
export default class PaginationState extends Context {
    #private;
    readonly opts: PaginationProps;
    constructor(opts: Getter<PaginationProps>, page?: Box<number>);
    onNext(): void;
    onPrev(): void;
    get hasPrev(): boolean;
    get hasNext(): boolean;
    get total(): number;
    get start(): number;
    get end(): number;
    get page(): number;
    set page(value: number);
    get pageSize(): number;
    get pageCount(): number;
    get heroui(): {
        size: "lg" | "md" | "sm" | undefined;
    };
}
