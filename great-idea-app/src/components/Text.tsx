import React from 'react';
import { Text as RNText } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

// NativeBase has a bug related to using <Text/> in React Native Web, this is rewritten to fix it.
// Please remove when NativeBase fixes this issue!

// https://github.com/GeekyAnts/NativeBase/issues/2945
// https://github.com/GeekyAnts/NativeBase/blob/master/src/basic/Text.js
export const CustomText: React.FC<any> = React.forwardRef((props: any, ref) => {
  const { uppercase, children, ...rest } = props;

  let text: React.ReactNode;
  if (uppercase) {
    text = React.Children.map(children, child => {
      if (typeof child === 'string') {
        return child.toUpperCase();
      }
      return child;
    });
  } else {
    text = children;
  }

  return (
    <RNText ref={ref} {...rest}>
      {text}
    </RNText>
  );
});

const mapPropsToStyleNames = (styleNames: any, props: any) => {
  const keys = Object.keys(props);
  const values = Object.values(props);

  keys.forEach((key, index) => {
    if (values[index]) {
      styleNames.push(key);
    }
  })

  return styleNames;
};

export const Text = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(CustomText);
