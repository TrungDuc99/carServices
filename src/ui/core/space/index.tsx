import { Spacing } from '@/configs';
import React from 'react';
import { View } from 'react-native-ui-lib';
export type SpaceProps = {
  value?: number;
  orientation?: 'horizontal' | 'vertical' | 'both';
};
const Space = ({ value = 1, orientation = 'vertical' }: SpaceProps) => {
  const width = ['horizontal', 'both'].includes(orientation)
    ? Spacing(value)
    : 0;
  const height = ['vertical', 'both'].includes(orientation)
    ? Spacing(value)
    : 0;
  return <View style={{ width, height }} />;
};

export default Space;
