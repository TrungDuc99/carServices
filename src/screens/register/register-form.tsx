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
const schema = z.object({
  phoneNumber: z.string({
    required_error: 'Vui lòng nhập số điện thoại',
  }),
  fullName: z.string({
    required_error: 'Vui lòng nhập họ và tên',
  }),
  email: z.string({
    required_error: 'Vui lòng nhập email',
  }),
  Code: z.string({
    required_error: 'Vui lòng nhập mã hợp đồng/ mã khuyến mãi',
  }),
  againPassword: z
    .string({
      required_error: 'Vui lòng nhập lại mật khẩu',
    })
    .min(6, 'Password must be at least 6 characters'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

type Props = {
  onSubmit?: (data: FormType) => void;
};

export const RegisterForm = ({ onSubmit = () => {} }: Props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isShowPw, setIsShowPw] = useState<boolean>(true);
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View className="flex-1 justify-center bg-white">
      <BackTopBar title="Chi tiết cửa hàng" />
      <DetailScreen>
        <View style={{ alignItems: 'center' }} className=" mb-5">
          <Image
            source={require('@/assets/images/logo_color.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <ControlledInput
          testID="fullName-input"
          control={control}
          iconLeft={{ name: Call }}
          name="fullName"
          placeholder="Họ và tên"
        />
        <Space value={3} />
        <ControlledInput
          testID="email-input"
          control={control}
          iconLeft={{ name: Call }}
          name="email"
          placeholder="Email"
        />
        <Space value={3} />
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          iconLeft={{ name: Call }}
          name="phoneNumber"
          placeholder="Số điện thoại"
        />
        <Space value={3} />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          iconLeft={{ name: Lock }}
          placeholder="Mật khẩu"
          iconRight={{
            name: isShowPw ? Eye : EyeSlash,
            onPress: () => setIsShowPw((prev) => !prev),
          }}
          secureTextEntry={isShowPw}
        />
        <Space value={3} />
        <ControlledInput
          testID="againPassword-input"
          control={control}
          name="againPassword"
          iconLeft={{ name: Lock }}
          placeholder="Nhập lại Mật khẩu"
          iconRight={{
            name: isShowPw ? Eye : EyeSlash,
            onPress: () => setIsShowPw((prev) => !prev),
          }}
          secureTextEntry={isShowPw}
        />
        <Space value={3} />
        <ControlledInput
          testID="Code-input"
          control={control}
          name="Code"
          iconLeft={{ name: Lock }}
          placeholder="Nhập mã hợp đồng/ mã khuyến mãi"
          secureTextEntry={isShowPw}
        />
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
