import { getContext, hasContext, setContext } from "svelte";

type Constructor<T, Args extends unknown[] = unknown[]> =
  new (...args: Args) => T;

export default class Context {
  static get<T extends Context>(
    this: abstract new (...args: any[]) => T,
  ): T {
    return getContext<T>(this);
  }

  static getOr<T extends Context>(
    this: Constructor<T, []>,
  ): T | undefined;

  static getOr<T extends Context, Args extends unknown[]>(
    this: Constructor<T, Args>,
    ...args: Args
  ): T;

  static getOr<T extends Context, Args extends unknown[]>(
    this: Constructor<T, Args>,
    ...args: Args
  ): T | undefined {
    if (hasContext(this)) {
      return getContext<T>(this);
    }

    if (args.length === 0) {
      return undefined;
    }

    return new this(...args);
  }

  constructor() {
    setContext(this.constructor, this);
  }
}
