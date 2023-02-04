import { Spacing } from '@/configs';
import { View } from '@/ui';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react';
export type CollectPointTopTabParamList = {
  LichSuTichDiem: undefined;
  ScanCode: undefined;
};
const Tab = createMaterialTopTabNavigator<CollectPointTopTabParamList>();

const TopTabsNavigatorInfoDetail = ({}: // code,
// file,
// routeName = 'LichSuTichDiem',
{
  // code?: string;
  // file?: string;
  // routeName: string;
}) => {
  return (
    <Tab.Navigator
      style={{ marginHorizontal: Spacing(4) }}
      // initialRouteName={routeName === 'ScanCode' ? 'ScanCode' : 'ScanCode'}
    >
      {/* <Tab.Screen
        name="ScanCode"
      
        options={{
          title: 'Tích điểm',
        }}
        children={() => <View>SADASD</View>}
      />
      <Tab.Screen
        name="LichSuTichDiem"
        options={{
          title: 'Lịch sử',
        }}
        // initialParams={{code: code, file: file}}
        children={() => <View>SADASDQWQWQWQW</View>}
      /> */}
    </Tab.Navigator>
  );
};
export default TopTabsNavigatorInfoDetail;
