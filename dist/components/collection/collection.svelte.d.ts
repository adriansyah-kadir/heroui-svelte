import type { Snippet } from "svelte";
import { type Fn, type MaybePromise } from "svelte-utils";
import type { Attachment } from "svelte/attachments";
declare function $$render<T>(): {
    props: {
        items: T[];
        key?: (item: T) => string;
        loadMore?: Fn<MaybePromise<T[]>, [{
            offset: number;
        }]>;
        child: Snippet<[{
            item: T;
            isLast: boolean;
            loadMore: Fn;
            loadingMore: boolean;
            index: number;
            key: string;
        }]>;
        sentinel?: Snippet<[{
            attach: Attachment<HTMLElement>;
            loadingMore: boolean;
            loadMore: Fn;
        }]>;
        empty?: Snippet;
    };
    exports: {};
    bindings: "items";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "items";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Collection: $$IsomorphicComponent;
type Collection<T> = InstanceType<typeof Collection<T>>;
export default Collection;
