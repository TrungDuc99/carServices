import { ScaleSize, Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { Button, getColor, Text, TouchableOpacity, View } from '@/ui';
import BackTopBar from '@/ui/core/back-top-bar';
import Divider from '@/ui/core/drivider';
import Space from '@/ui/core/space';
import UserAvatar from '@/ui/core/user-avatar';
import { useNavigation } from '@react-navigation/native';
import { Location, VideoTick } from 'iconsax-react-native';
import * as React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Card, Carousel } from 'react-native-ui-lib';
import RecommendVouchers from '../home/recommendVouchers';
import MoreCountInfo from './more-count-info';
interface StoreDetailProps {}
const vouchers: IVoucher[] = [
  {
    id: '1',
    name: 'Rửa xe định kỳ',
    shopName: 'Gara Super Card',
    image: '',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
  {
    id: '2',
    name: 'Rửa xe định kỳ 1',
    shopName: 'Gara Super Card',
    image: 'asdasd ',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
  {
    id: '3',
    name: 'Rửa xe định kỳ 2',
    shopName: 'Gara Super Card',
    image: 'asd',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
  {
    id: '4',
    name: 'Rửa xe định kỳ 3',
    shopName: 'Gara Super Card',
    image: '',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
  {
    id: '5',
    name: 'Rửa xe định kỳ 4',
    shopName: 'Gara Super Card',
    image: '',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
  {
    id: '6',
    name: 'Rửa xe định kỳ 5',
    shopName: 'Gara Super Card',
    image: '',
    rating: 4.9,
    applyPlace: 'Quận phú nhuận',
    applyTime: '8:00 đến  18:00',
  },
];

const StoreDetail = (props: StoreDetailProps) => {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1  bg-white">
      <BackTopBar title="Chi tiết cửa hàng" />
      <ScrollView>
        <View className="pt-3 p-5">
          <Card
            style={{
              padding: 10,
              marginTop: Spacing(2),
            }}
            borderRadius={12}
          >
            <Carousel
              allowAccessibleLayout
              autoplay
              showCounter
              itemSpacings={3}
              pagingEnabled
              animated
              loop
              // onChangePage={() => console.log('page changed')}
            >
              {vouchers.map((item) => {
                return (
                  <Image
                    style={{
                      width: '100%',
                      height: ScaleSize(220),
                      borderRadius: 5,
                    }}
                    source={require('src/assets/images/Rectangle.png')}
                  />
                );
              })}
            </Carousel>
            <View className=" mt-2">
              <Text variant="md" className="font-medium">
                Garage Hòa Bình
              </Text>
              <Text variant="sm">
                Garage Hòa Bình 123 Cách Mạng Tháng 8, Phường 6, Quận 3, Tp.HCM
              </Text>
            </View>

            <MoreCountInfo />
          </Card>
          <Space value={2} />
          <Button
            size="small"
            label="ĐẶT LỊCH"
            onPress={() => {
              navigate('Booking');
            }}
          />
          <Space value={4} />
          <Card>
            <View className="p-3 ">
              <View className=" flex-row" style={{ alignItems: 'center' }}>
                <Location variant="Bold" />
                <Text variant="sm" className="ml-2 text-left ">
                  Số 4A Đường Hoàng Việt, Phường 4, Quận Tân Bình, Tp.Hồ Chí
                  Minh
                </Text>
              </View>
              <View className=" flex-row mt-4" style={{ alignItems: 'center' }}>
                <VideoTick variant="Bold" />
                <Text variant="sm" className="ml-2  text-left  ">
                  Số 4A Đường Hoàng Việt, Phường 4, Quận Tân Bình, Tp.Hồ Chí
                  Minh
                </Text>
              </View>
            </View>
          </Card>
          <Space value={5} />
          <RecommendVouchers title="Voucher của cửa hàng" data={vouchers} />
          <Space value={5} />
          <Card>
            <View className="p-3 ">
              <Text variant="sm" className="ml-2 text-left text-justify ">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Text>
              <TouchableOpacity onPress={() => console.log('Xem thêm')}>
                <Text variant="sm" className="ml-2 text-left text-primary-600 ">
                  ...xem thêm
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Space value={5} />
          <Card>
            <View className="p-2">
              <View style={styles.itemComment}>
                <UserAvatar
                  backgroundColor={getColor('Nguyễn Văn A')}
                  userName={'Nguyễn Văn A'}
                  stars={5}
                  time="20/01/2022"
                />
                <View className="p-1">
                  <Text variant="sm" className="ml-2 text-left text-justify ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </Text>
                  <TouchableOpacity onPress={() => console.log('Xem thêm')}>
                    <Text
                      variant="sm"
                      className="ml-2 text-left text-primary-600 "
                    >
                      ...xem thêm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Divider spacing={2} color="bland" orientation="horizontal" />
              <View style={styles.itemComment}>
                <UserAvatar
                  backgroundColor={getColor('Nguyễn Thị Bích')}
                  userName={'Nguyễn Thị Bích'}
                  stars={5}
                  time="20/01/2022"
                />
                <View className="p-1">
                  <Text variant="sm" className="ml-2 text-left text-justify ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </Text>
                  <TouchableOpacity onPress={() => console.log('Xem thêm')}>
                    <Text
                      variant="sm"
                      className="ml-2 text-left text-primary-600 "
                    >
                      ...xem thêm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Divider spacing={2} color="bland" orientation="horizontal" />
              <View style={styles.itemComment}>
                <UserAvatar
                  backgroundColor={getColor('Hồ Cường')}
                  userName={'Hồ Cường'}
                  stars={5}
                  time="20/01/2022"
                />
                <View className="p-1">
                  <Text variant="sm" className="ml-2 text-left text-justify ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </Text>
                  <TouchableOpacity onPress={() => console.log('Xem thêm')}>
                    <Text
                      variant="sm"
                      className="ml-2 text-left text-primary-600 "
                    >
                      ...xem thêm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  container: {},
  itemComment: {},
});
