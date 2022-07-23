import {
  Button, H5, YStack
} from 'tamagui';
import { TextLink } from 'solito/link';

export const HomeScreen = () => {
  //   const randomWidth = useSharedValue(10);
  //   const config = {
  //     duration: 500,
  //     easing: Easing.bezier(0.5, 0.01, 0, 1),
  //   };
  //   const style = useAnimatedStyle(() => {
  //     return {
  //       width: withTiming(randomWidth.value, config),
  //     };
  //   });
  // const navigation = useNavigation();
  return (
    <YStack>
      <H5>HOME</H5>
      {/* <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing' }}
      >
        <Label
          selectable={false}
          fontSize={16}
          color="black"
          fontWeight={'bold'}
        >
          Moti anumated Link
        </Label>
      </MotiView> */}
      {/* <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: 'black', margin: 30 },
          style,
        ]}
      /> */}
      <Button
        onPress={() => {
          // navigation.navigate('user-detail' as any);
          // randomWidth.value = Math.random() * 350;
        }}
      >
        toggle
      </Button>
      <TextLink
        // to={{ screen: 'user-detail', params: { id: 'simo' } }}
        href={"/user/simo"}
        style={{backgroundColor:"red"}}
        //   animate={({ hovered, pressed }) => {
        //     'worklet'

        //     return {
        //       scale: pressed ? 0.95 : hovered ? 1.1 : 1,
        //       rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
        //     }
        //   }}
        // transition={{
        //   type: 'timing',
        //   duration: 150,
        // }}
      >
        <H5
          selectable={false}
          fontSize={16}
          color="black"
          fontWeight={'bold'}
        >
          Moti Link
        </H5>
      </TextLink>
    </YStack>
  );
};

