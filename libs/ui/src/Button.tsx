import { Button as TButton, styled } from 'tamagui';

export const Button = styled(TButton, {
  // borderRadius: '',
  // paddingVertical: '$2',
  // paddingHorizontal: '$3',
  // backgroundColor: '$primary',
  // justifyContent: 'center',
  // alignItems: 'center',
  // cursor: 'pointer',
  // flexWrap: 'nowrap',
  // flexDirection: 'row',
  // flexShrink: 1,

  backgroundColor: '$myColor',
  hoverStyle: {
    backgroundColor: '$myColor',
    opacity: 0.6,
  },

  pressStyle: {
    backgroundColor: '$myColor',
    opacity: 0.5,
  },

  // ...
});
