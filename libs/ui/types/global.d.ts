import { config } from './AppTheme';
declare type Conf = typeof config;
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}
declare type Prev = [never, 0, 1, 2, ...0[]];
declare type Join<K, P> = K extends string | number ? P extends string | number ? `${K}${'' extends P ? '' : '.'}${P}` : never : never;
export declare type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? {
    [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, Paths<T[K], Prev[D]>> : never;
}[keyof T] : '';
export declare type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? {
    [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>>;
}[keyof T] : '';
export declare type NestedKeyOf<T> = Paths<T>;
export {};
//# sourceMappingURL=global.d.ts.map