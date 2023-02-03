import { useAuth } from '../../core';
import React from 'react';

import { FormType, RegisterForm } from './register-form';
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const { signIn } = useAuth();
  const { navigate } = useNavigation();

  const onSubmit = (data: FormType) => {
    console.log(data);
    navigate('InputOtp', {
      originalPhoneNumber: data.phoneNumber,
      to: 'asdasd',
      verificationSid: 'asdasd',
    });
    // signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  return <RegisterForm onSubmit={onSubmit} />;
};
