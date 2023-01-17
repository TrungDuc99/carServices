import { Platform, StyleSheet } from 'react-native';
import React from 'react';

import { isIphoneX } from 'react-native-iphone-x-helper';
import { View, ViewProps } from 'react-native-ui-lib';
import BackTopBar from '../back-top-bar';
import { Spacing } from '@/configs';

interface WrapperContainerProps extends ViewProps {
  title: any;
  children: React.ReactNode;
  iconRight?: {
    icon?: any;
    onPress?: () => void;
  };
}
const WrapperContainer = ({
  title,
  iconRight,
  children,
  ...rest
}: WrapperContainerProps) => {
  return (
    <View style={styles.wrapper}>
      <BackTopBar
        title={title}
        marginB-5
        iconRight={{
          icon: iconRight?.icon,
          onPress: () => iconRight?.onPress && iconRight?.onPress(),
        }}
      />
      <View {...rest} style={styles.childrenContent}>
        {children}
      </View>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,

    paddingBottom: Platform.OS === 'ios' ? Spacing(25) : Spacing(10),
  },
  childrenContent: {
    paddingHorizontal: Spacing(2),
  },
});
