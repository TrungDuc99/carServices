import { useAuth } from '../../core';
import React from 'react';

import type { FormType } from './login-form';
import { LoginForm } from './login-form';

export const Login = () => {
  const { signIn } = useAuth();

  const onSubmit = (data: FormType) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  return <LoginForm onSubmit={onSubmit} />;
};
