import { AssetName } from '../assets';
import React from 'react';
declare type Props = {
    name?: AssetName;
    size?: number;
    fakeImage?: {
        w: number;
        h: number;
    };
    source?: any;
    aspectRatio?: number;
    onPress?: () => void;
    base64EncodedImage?: {
        mime: string;
        encoded: string;
    };
    ref?: any;
};
export declare const Asset: React.NamedExoticComponent<Props & Omit<(import("react-native").ImageProps & Omit<import("@tamagui/core").StackProps, keyof import("react-native").ImageProps>) | (import("react-native").ImageProps & Omit<import("@tamagui/core").StackProps, keyof import("react-native").ImageProps> & Omit<{}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<import("react-native").ImageProps & Omit<import("@tamagui/core").StackProps, keyof import("react-native").ImageProps> & Omit<{}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<import("react-native").ImageProps & Omit<import("@tamagui/core").StackProps, keyof import("react-native").ImageProps> & Omit<{}, string | number> & {
    [x: string]: undefined;
}>>), "style" | "source" | "onLayout" | "height" | "width"> & {
    width: string | number;
    height: string | number;
    src: string | import("react-native").ImageSourcePropType;
} & Omit<import("@tamagui/core").StackProps, "transform" | "shadowColor" | "borderColor" | "theme" | "children" | "className" | "b" | "br" | "col" | "p" | "display" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "ac" | "ai" | "als" | "bc" | "bbc" | "bblr" | "bbrr" | "bbw" | "bg" | "blc" | "bls" | "blw" | "boc" | "boxs" | "boxsh" | "bs" | "brw" | "brc" | "btc" | "btlr" | "btrr" | "btw" | "bw" | "cur" | "dsp" | "f" | "fb" | "fd" | "fg" | "ff" | "fos" | "fost" | "fow" | "fs" | "fw" | "h" | "jc" | "l" | "ls" | "lh" | "m" | "mah" | "maw" | "mb" | "mih" | "miw" | "ml" | "mr" | "mt" | "mx" | "my" | "o" | "ov" | "ovx" | "ovy" | "pb" | "pe" | "pl" | "pos" | "pr" | "pt" | "px" | "py" | "r" | "shac" | "shar" | "shof" | "shop" | "t" | "ta" | "tt" | "ussel" | "w" | "ww" | "zi" | "disabled" | `$${string}` | `$${number}` | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "cursor" | "contain" | "space" | "dataSet" | "target" | "rel" | "download" | "href" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onScroll" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "asChild" | "spaceDirection" | "separator" | "dangerouslySetInnerHTML" | "animation" | "animateOnly" | "debug" | "themeShallow" | "id" | "tag" | "componentName" | "forceStyle" | "onHoverIn" | "onHoverOut" | "onPress" | "onPressIn" | "onPressOut" | "userSelect" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "onLoad" | "onError" | "onLoadStart" | "onProgress" | "onLoadEnd" | "progressiveRenderingEnabled" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onPartialLoad" | "fadeDuration" | "src">>;
export {};
//# sourceMappingURL=AppIcon.d.ts.map