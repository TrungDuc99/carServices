import { useAuth } from '../../../core';
import React from 'react';

import { ChangePasswordFrom, FormType } from './changePassword-form';

export const ForgetPassword = () => {
  const { signIn } = useAuth();

  const onSubmit = (data: FormType) => {
    console.log(data);

    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  return <ChangePasswordFrom onSubmit={onSubmit} />;
};
