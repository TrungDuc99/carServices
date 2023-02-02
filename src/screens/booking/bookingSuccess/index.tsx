import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';

import { Button, Screen, Text } from '@/ui';
import Lottie from 'lottie-react-native';
import { ScaleSize } from '@/configs';
import Divider from '@/ui/core/drivider';
import Space from '@/ui/core/space';

export const BookingSuccess = () => {
  const { navigate } = useNavigation();

  return (
    <Screen>
      <View marginH-20 centerH centerV>
        <View marginH-20 marginT-150>
          <View centerH>
            <Lottie
              style={{ height: ScaleSize(180), width: ScaleSize(200) }}
              source={require('@assets/animtions/101013-congrats.json')}
              autoPlay
              loop
            />
            <View
              centerH
              style={{
                position: 'absolute',
                top: -ScaleSize(14),
                left: 0,
                bottom: 0,
                right: 0,
              }}
              center
            >
              <Lottie
                style={{
                  height: Platform.OS === 'ios' ? ScaleSize(60) : ScaleSize(90),
                }}
                source={require('@assets/animtions/check-circle.json')}
                autoPlay
                loop
              />
            </View>
          </View>

          <Text
            variant="h3"
            className="text-center"
            style={{
              color: '#29CA0F',
            }}
          >
            ĐẶT LỊCH THÀNH CÔNG
          </Text>
        </View>
        <Space value={5} />

        <Divider orientation="horizontal" />

        <View
          style={{
            width: '100%',
            marginTop: 20,
          }}
        >
          <Button
            label="Về trang chủ"
            onPress={() => {
              navigate('Home');
            }}
          />
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({});
