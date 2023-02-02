import { styled } from 'nativewind';
import * as React from 'react';
import { View as RNView, ViewProps } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export type DetailScreenProps = ViewProps & {
  className?: string;
  children: React.ReactNode;
};

export const SView = styled(RNView);
export const DetailScreen = ({
  style,
  className,
  children,
  ...props
}: ViewProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SView
        className={`${className}  bg-white  pr-5 pl-5 pt-1 flex  flex-1`}
        style={style}
        {...props}
      >
        {children}
      </SView>
    </ScrollView>
  );
};
