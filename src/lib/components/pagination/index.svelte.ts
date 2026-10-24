import { type PaginationVariants } from "@heroui/styles";
import { box, Context, type Box, type Getter } from "svelte-utils";

export type PaginationProps = {
  total?: number,
  pageSize?: number,
  disabled?: boolean,
} & PaginationVariants

export default class PaginationState extends Context {
  readonly opts: PaginationProps
  #page: Box<number>

  constructor(opts: Getter<PaginationProps>, page = box(1)) {
    super()
    this.opts = $derived.by(opts)
    this.#page = page
  }

  onNext() {
    if (!this.hasNext) return;
    this.page++
  }

  onPrev() {
    if (!this.hasPrev) return;
    this.page--
  }

  get hasPrev() {
    return this.page > 1
  }

  get hasNext() {
    return this.page < this.pageCount
  }

  get total() {
    return this.opts.total ?? 0
  }

  get start() {
    return (this.page - 1) * this.pageSize + 1;
  }

  get end() {
    return Math.min(this.page * this.pageSize, this.total);
  }

  get page() {
    return this.#page.current
  }

  set page(value: number) {
    if (!Number.isInteger(value)) return;
    if (value < 1 || value > this.pageCount) return;
    this.#page.current = value
  }

  get pageSize() {
    return Math.max(this.opts.pageSize ?? 1, 1)
  }

  get pageCount() {
    if (this.pageSize <= 0 || this.page <= 0) return 0;
    return Math.ceil(this.total / this.pageSize)
  }

  get heroui() {
    return {
      size: this.opts.size,
    }
  }
}
