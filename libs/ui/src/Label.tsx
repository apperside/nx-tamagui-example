import { styled, Text as TText } from 'tamagui';

export const Label = styled(TText, {
  borderRadius: 100_000_000,

  variants: {
    pin: {
      top: {
        position: 'absolute',
        top: 0,
      },
      bottom: {
        position: 'absolute',
        bottom: 0,
      },
    },
    type:{
      semiBold:{
        fontFamily:"Barlow-SemiBold",
        fontSize:30
      }
    },

    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },

    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        };
      },
    },
  } as const,
});
