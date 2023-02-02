import { ScaleSize, Spacing } from '@/configs';
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from './view';

interface DividerProps {
  orientation: 'vertical' | 'horizontal';
  color?: 'dark' | 'normal' | 'bland';
  spacing?: number;
}

const Divider = (props: DividerProps) => {
  const { orientation, color, spacing } = props;
  const styles = StyleSheet.create({
    container: {},
    lineVer: {
      width: 1,
      backgroundColor: '#c2c2c2',
      height: '100%',
      marginBottom: 2,
      // marginHorizontal: Spacing(4),
    },
    lineHor: {
      width: '100%',
      backgroundColor: '#c2c2c2',
      height: 1,
      marginVertical: Spacing(spacing ? spacing : 1),
      // marginHorizontal: Spacing(4),
    },
  });
  return (
    <View
      style={[
        orientation === 'vertical' ? styles.lineVer : styles.lineHor,
        {
          backgroundColor:
            color === 'bland'
              ? '#f0f0f0'
              : color === 'dark'
              ? '#acacac'
              : '#e3e3e3',
        },
      ]}
    ></View>
  );
};

export default Divider;
