import type { Box } from "#lib/hooks/boxed.svelte.ts";
import { type PaginationVariants } from "@heroui/styles";
import { getContext, setContext } from "svelte";

export type PaginationProps = {
  total?: number,
  page?: number,
  pageSize?: number,
  disabled?: boolean,
} & PaginationVariants

export default class PaginationState {
  constructor(public opts: Box<PaginationProps>) {
    setContext("pagination-state", this)
    this.page = opts.current.page ?? 1
    this.pageSize = opts.current.pageSize ?? 10
  }

  static ctx() {
    return getContext<PaginationState>("pagination-state")
  }

  set pageSize(pageSize: number) {
    if (pageSize < 1) return;
    this.opts.current = {
      ...this.opts.current,
      pageSize
    }
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
    return this.opts.current.total ?? 0
  }

  get start() {
    return (this.page - 1) * this.pageSize + 1;
  }

  get end() {
    return Math.min(this.page * this.pageSize, this.total);
  }

  get page() {
    return Math.max(this.opts.current.page ?? 1, 1)
  }

  set page(value: number) {
    if (!Number.isInteger(value)) return;
    if (value < 1 || value > this.pageCount) return;
    this.opts.current = {
      ...this.opts.current,
      page: value
    }
  }

  get pageSize() {
    return this.opts.current.pageSize ?? 10
  }

  get pageCount() {
    if (this.pageSize <= 0 || this.page <= 0) return 0;
    return Math.ceil(this.total / this.pageSize)
  }

  get heroui() {
    return {
      size: this.opts.current.size,
    }
  }
}
