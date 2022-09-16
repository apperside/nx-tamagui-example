import { config } from './AppTheme';
declare type Conf = typeof config;
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}
export default config;
//# sourceMappingURL=global.d.ts.map