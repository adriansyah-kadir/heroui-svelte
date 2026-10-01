import type { Box } from "#lib";
import { getContext, hasContext, setContext } from "svelte";

type Constructor<T, Args extends unknown[] = unknown[]> =
  new (...args: Args) => T;

type ContextArgs<T, Args extends unknown[]> =
  Args extends [] ? [] :
  Args extends [Box<T>, ...unknown[]] ? Args :
  never;

export class Context<T> {
  #opts: Box<T>
  get opts() { return this.#opts.current }
  set opts(value: T) {
    this.#opts.current = value
  }

  static get<C extends Context<any>>(
    this: abstract new (...args: any[]) => C,
  ): C {
    // @ts-expect-error
    return getContext<C>(this.getKey());
  }

  static getOr<
    T,
    C extends Context<T>,
    Args extends unknown[],
  >(
    this: Constructor<C, ContextArgs<T, Args>>,
    ...args: ContextArgs<T, Args>
  ): C | undefined {
    // @ts-expect-error
    const key = this.getKey();
    const opts = args[0]

    if (hasContext(key)) {
      const ctx = getContext<C>(key);
      if (opts) {
        $effect(() => {
          opts.current = ctx.opts
        })
      }
      return ctx
    }

    if (args.length === 0) {
      return undefined;
    }

    return new this(...args);
  }
  protected static getKey(): symbol {
    return Symbol.for(`heroui-svelte:context:${this.name}`);
  }

  constructor(opts: Box<T>) {
    this.#opts = opts
    setContext(
      (this.constructor as typeof Context).getKey(),
      this,
    );
  }
}
