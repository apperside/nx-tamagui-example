/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { config } from './AppTheme';

type Conf = typeof config;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

/**
 * A type alias for nested keyof
 * Taken from here
 * https://stackoverflow.com/a/58436959/997716
 */
type Prev = [never, 0, 1, 2, ...0[]];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : '';

export type NestedKeyOf<T> = Paths<T>;
