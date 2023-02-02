import { usePosts } from '@/api';
import { IVoucher } from '@/models';
import { Button, ControlledInput, Image, Text, View } from '@/ui';
import BackTopBar from '@/ui/core/back-top-bar';
import CheckboxField from '@/ui/core/check-box';
import Divider from '@/ui/core/drivider';
import Space from '@/ui/core/space';
import { DetailScreen } from '@/ui/Detailscreen';
import { useNavigation } from '@react-navigation/native';
import { Receipt2 } from 'iconsax-react-native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from 'react-native-ui-lib';
import moment from 'moment';
export const Payment = () => {
  const { navigate } = useNavigation();

  const { handleSubmit, control } = useForm<any>({});
  function getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(moment(date).format('DD/MM/YYYY - H:mm'));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  useEffect(() => {
    console.log(getDaysInMonth(0, 2023));
  }, []);

  return (
    <View className="flex-1  bg-white ">
      <BackTopBar title="Thanh toán" />
      <DetailScreen>
        <Text className="font-bold" variant="lg">
          Thông tin
        </Text>
        <Space value={2} />
        <Card>
          <View className="p-3 ">
            <Space value={3} />
            <View
              className="flex-row"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Text variant="sm" className="ml-2 text-left ">
                Tổng tiền
              </Text>
              <Text variant="sm" className="ml-2 text-left ">
                10.000.000
              </Text>
            </View>
            <Space value={5} />
            <View
              className="flex-row"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Text variant="sm" className="ml-2 text-left ">
                Giảm giá
              </Text>
              <Text variant="sm" className="ml-2 text-left ">
                10%
              </Text>
            </View>
            <Space value={3} />
            <Divider orientation="horizontal" color="bland" />
            <Space value={4} />
            <View
              className="flex-row"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Text variant="sm" className="ml-2 text-left font-bold">
                Tạm tính
              </Text>
              <Text variant="sm" className="ml-2 text-left font-bold">
                9.000.000
              </Text>
            </View>
          </View>
        </Card>
        <Space value={5} />
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          iconLeft={{ name: Receipt2, color: 'gray' }}
          name="promotionCode"
          labelButtonRight="ÁP DỤNG"
          placeholder="Mã khuyến mãi"
        />
        <Card>
          <View className="p-3 ">
            <View
              className="flex-row"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Text variant="sm" className="ml-2 text-left font-bold">
                Thành tiền
              </Text>
              <Text variant="sm" className="ml-2 text-left font-bold">
                9.000.000
              </Text>
            </View>
          </View>
        </Card>
        <Space value={5} />
        <Text variant="xl">Chọn phương thức thanh toán</Text>
        <Space value={2} />
        <Card>
          <View className="p-3 ">
            <View
              className="flex-row p-2"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <View className="flex-row" style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: 62,
                    height: 45,
                  }}
                  source={require('src/assets/images/cash.png')}
                />
                <Text className="ml-2">Thanh toán bằng tiền mặt</Text>
              </View>
              <CheckboxField control={control} label="" name="cash" />
            </View>

            <Divider orientation="horizontal" color="bland" />
            <View
              className="flex-row p-2"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <View className="flex-row" style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: 62,
                    height: 45,
                  }}
                  source={require('src/assets/images/vnpay.png')}
                />
                <Text className="ml-2">Thanh toán bằng VNPAY</Text>
              </View>
              <CheckboxField control={control} label="" name="cash" />
            </View>
            <Divider orientation="horizontal" color="bland" />
            <View
              className="flex-row p-2"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <View className="flex-row" style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: 62,
                    height: 45,
                  }}
                  source={require('src/assets/images/momo.png')}
                />
                <Text className="ml-2">Thanh toán bằng MOMO</Text>
              </View>
              <CheckboxField control={control} label="" name="cash" />
            </View>
            <Divider orientation="horizontal" color="bland" />
            <View
              className="flex-row p-2"
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <View className="flex-row" style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: 62,
                    height: 44,
                  }}
                  source={require('src/assets/images/mastercard.png')}
                />
                <Text className="ml-2">Thanh toán bằng thẻ tín dụng</Text>
              </View>
              <CheckboxField control={control} label="" name="cash" />
            </View>
          </View>
        </Card>
        <Space value={5} />
        <Button label="XÁC NHẬN" />
        <Space value={2} />
      </DetailScreen>
    </View>
  );
};
