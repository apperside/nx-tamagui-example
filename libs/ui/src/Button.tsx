import { useMemo } from 'react';
import { Button as TamaguiButton, ButtonProps, Stack, styled } from 'tamagui';
import { appTokens } from './AppTheme';

// somewhere in your app:
// export const Button = styled(Stack, {
//   cursor:"pointer",
//   alignItems:"center",
//   justifyContent:"center",
//   br:5,
//   color:"$white",

//   variants: {
//     type:{
//       primary:{
//         backgroundColor: '$myColor',
//         hoverStyle: {
//           backgroundColor: '$myColor',
//           opacity: 0.6,
//         },
        
//         pressStyle: {
//           backgroundColor: '$myColor',
//           opacity: 0.5,
//         },
//       }
//     },
//     pad: {
//       sm: {
//         padding: appTokens.size.sm,
//       },
//       md: {
//         padding: appTokens.size.md,
//       },
//       lg: {
//         padding: appTokens.size.lg,
//       },
//       // ...
//     }
//   } as const
// })

// export const Button = styled(TamaguiButton, {
//   // borderRadius: '',
//   // paddingVertical: '$2',
//   // paddingHorizontal: '$3',
//   // backgroundColor: '$primary',
//   // justifyContent: 'center',
//   // alignItems: 'center',
//   // cursor: 'pointer',
//   // flexWrap: 'nowrap',
//   // flexDirection: 'row',
//   // flexShrink: 1,

//   backgroundColor: '$myColor',
//   hoverStyle: {
//     backgroundColor: '$myColor',
//     opacity: 0.6,
//   },

//   pressStyle: {
//     backgroundColor: '$myColor',
//     opacity: 0.5,
//   },

//   // ...
// });

// import React from 'react';

type Props = { variant?: 'variant1' | 'variant2' | 'variant3' } & ButtonProps;

export function Button({ variant, ...props }: Props) {
  const button = useMemo(() => {
    switch (variant) {
      // case 'variant2':
      //   // return customized button 2
      //   return <TamaguiButton {...customProps2} {...props}></TamaguiButton>;
      // case 'variant3':
      //   // return customized button 3
      //   return <TamaguiButton {...customProps3} {...props}></TamaguiButton>;
      default: {
        const buttonProps: ButtonProps = {
          backgroundColor: '$primaryColor',
          bw: 0,
          fontFamily:"$buttonNormal",
          color:"white",
          hoverStyle: {
            backgroundColor: '$primaryColor',
            opacity: 0.6,
          },

          // pressStyle: {
          //   backgroundColor: 'hov',
          //   opacity: 0,
          // },
        };
        // return default button
        return <TamaguiButton {...buttonProps} {...props}></TamaguiButton>;
      }
    }
  }, [variant, props]);

  return button;
}
