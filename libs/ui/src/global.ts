/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { config } from '@nx-tamagui-example/config'

export type Conf = typeof config

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

export default config
