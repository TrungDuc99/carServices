import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, View } from '@/ui';

import { Image, Platform, StyleSheet } from 'react-native';
import { Call, Eye, EyeSlash, Lock, Login } from 'iconsax-react-native';
import { Checkbox, Text } from 'react-native-ui-lib';
import CheckboxField from '@/ui/core/check-box';
import { FontFamily } from '@/configs';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import Divider from '@/ui/core/drivider';
import { useNavigation } from '@react-navigation/native';
const schema = z.object({
  rePassword: z
    .string({
      required_error: 'Password is required',
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

export const ChangePasswordFrom = ({ onSubmit = () => {} }: Props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isShowPw, setIsShowPw] = useState<boolean>(true);
  const { navigate } = useNavigation();

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View style={{ alignItems: 'center' }} className="justify-center p-4">
      <View className="mb-15 " style={{ marginTop: 100 }}>
        <Image
          source={require('@/assets/images/logo_color.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
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
      <ControlledInput
        testID="rePassword-input"
        control={control}
        name="rePassword"
        iconLeft={{ name: Lock }}
        placeholder="Nhập lại Mật khẩu"
        iconRight={{
          name: isShowPw ? Eye : EyeSlash,
          onPress: () => setIsShowPw((prev) => !prev),
        }}
        secureTextEntry={isShowPw}
      />

      <View style={{ width: '100%' }}>
        <Button
          testID="login-button"
          label="XÁC NHẬN"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 135,
    marginTop: 30,
  },
});
