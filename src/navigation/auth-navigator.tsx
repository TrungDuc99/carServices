import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ForgetPassword, Login } from '@/screens';
import { Register } from '@/screens/register';
import InputOtp from '@/screens/inputOTP';
import { InputPhoneNumber } from '@/screens/forgetPassword/inputPhoneNumber';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  InputOtp: { to: any; verificationSid: any; originalPhoneNumber: any };
  ForgetPassword: undefined;
  InputPhoneNumber: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InputOtp"
        component={InputOtp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InputPhoneNumber"
        component={InputPhoneNumber}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
