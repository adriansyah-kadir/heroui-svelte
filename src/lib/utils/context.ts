import { getContext, hasContext, setContext } from "svelte";

type Constructor<T, Args extends unknown[] = unknown[]> =
  new (...args: Args) => T;

export class Context {
  static get<T extends Context>(
    this: abstract new (...args: any[]) => T,
  ): T {
    return getContext<T>(this.getKey());
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
    const key = this.getKey();

    if (hasContext(key)) {
      return getContext<T>(key);
    }

    if (args.length === 0) {
      return undefined;
    }

    return new this(...args);
  }

  protected static getKey(): symbol {
    return Symbol.for(`heroui-svelte:context:${this.name}`);
  }

  constructor() {
    setContext(
      (this.constructor as typeof Context).getKey(),
      this,
    );
  }
}
