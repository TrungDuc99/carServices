import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, View } from '@/ui';

import { Call, Eye, EyeSlash, Lock, Login } from 'iconsax-react-native';
import { Image, StyleSheet } from 'react-native';
import BackTopBar from '@/ui/core/back-top-bar';
import { DetailScreen } from '@/ui/Detailscreen';
import Space from '@/ui/core/space';
import { useNavigation } from '@react-navigation/native';
const schema = z.object({
  phoneNumber: z
    .string({
      required_error: 'Vui lòng nhập số điện thoại',
    })
    .min(9, 'Số điện thoại phải trên 10 số'),
});

export type FormType = z.infer<typeof schema>;

type Props = {};

export const InputPhoneNumber = ({}: Props) => {
  const { navigate } = useNavigation();

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormType) => {
    navigate('InputOtp', {
      originalPhoneNumber: data.phoneNumber,
      to: 'asdasd',
      verificationSid: 'asdasd',
    });
  };
  return (
    <View className="flex-1 justify-center bg-white">
      <BackTopBar title="Quên mật khẩu" />
      <DetailScreen>
        <View style={{ alignItems: 'center' }} className="mb-5 mt-20">
          <Image
            source={require('@/assets/images/logo_color.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Space value={3} />
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          iconLeft={{ name: Call }}
          name="phoneNumber"
          placeholder="Nhập số điện thoại"
        />
        <Space value={3} />

        <Space value={3} />
        <View style={{ width: '100%' }}>
          <Button
            testID="login-button"
            label="XÁC NHẬN"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
          />
        </View>
      </DetailScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 155,
  },
});
