import { useAuth } from '../../core';
import React from 'react';

import { FormType, RegisterForm } from './register-form';

export const Register = () => {
  const { signIn } = useAuth();

  const onSubmit = (data: FormType) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  return <RegisterForm onSubmit={onSubmit} />;
};
