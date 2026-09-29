import type { Box } from "#lib/hooks/index.ts";
import { type PaginationVariants } from "@heroui/styles";
export type PaginationProps = {
    total?: number;
    page?: number;
    pageSize?: number;
    disabled?: boolean;
} & PaginationVariants;
export default class PaginationState {
    opts: Box<PaginationProps>;
    constructor(opts: Box<PaginationProps>);
    static ctx(): PaginationState;
    set pageSize(pageSize: number);
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
