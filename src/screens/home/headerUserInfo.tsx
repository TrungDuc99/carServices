import { Text, View } from '@/ui';
import Divider from '@/ui/core/drivider';
import React from 'react';
import { Image } from 'react-native';
import { useAuth } from '../../core';

export const HeaderUserInfo = () => {
  const { signIn } = useAuth();

  return (
    <View
      className="flex-row ios:mt-10 android:mt-2"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="flex-row"
      >
        <Image
          style={{
            width: 35,
            height: 35,
            marginHorizontal: 2,
          }}
          source={require('@/assets/images/ellipse.png')}
        />
        <View className="ml-2">
          <Text variant="xs" style={{ color: '#555' }}>
            Chào buổi sáng
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="flex-row"
          >
            <Text className="font-bold" variant="sm">
              Nguyễn Văn A{'  '}
            </Text>
            <Divider orientation="vertical" />
            <Text style={{ color: '#FCB801' }} variant="sm">
              {'  '}
              GOLD MEMBER
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={require('@/assets/images/qrcode.png')}
      />
    </View>
  );
};
