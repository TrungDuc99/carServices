import React from 'react';
import { RefreshControl, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  onRefresh?: () => void;
  refreshing?: boolean;
};

export const ScrollViewScreen = ({
  children,
  refreshing = false,
  onRefresh,
}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      {children}
    </ScrollView>
  );
};
