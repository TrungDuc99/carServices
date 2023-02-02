import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { AddPost, Feed, Post } from '@/screens';
import { Pressable, Text } from '@/ui';
import { Home } from '@/screens/home';
import { StoresDetail } from '@/screens/stores-detail';
import StoreDetail from '@/screens/store-detail';
import { Payment } from '@/screens/payment';
import { Booking } from '@/screens/booking';
import { BookingSuccess } from '@/screens/booking/bookingSuccess';

export type HomeStackParamList = {
  Home: undefined;
  StoresDetail: { id: number };
  StoreDetail: undefined;
  Payment: undefined;
  Booking: undefined;
  BookingSuccess: undefined;
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Payment"
        component={Payment}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Booking"
        component={Booking}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BookingSuccess"
        component={BookingSuccess}
      />
    </Stack.Navigator>
  );
};
