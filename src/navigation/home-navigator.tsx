import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { AddPost, Feed, Post } from '@/screens';
import { Pressable, Text } from '@/ui';
import { Home } from '@/screens/home';
import { StoresDetail } from '@/screens/stores-detail';
import StoreDetail from '@/screens/store-detail';

export type HomeStackParamList = {
  Home: undefined;
  StoresDetail: { id: number };
  StoreDetail: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const GoToAddPost = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate('Home')} className="p-2">
      <Text className="text-primary-300">Create</Text>
    </Pressable>
  );
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StoresDetail"
        component={StoresDetail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StoreDetail"
        component={StoreDetail}
      />
    </Stack.Navigator>
  );
};
