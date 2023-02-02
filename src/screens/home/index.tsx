import { IVoucher } from '@/models';
import { View, WIDTH } from '@/ui';
import Divider from '@/ui/core/drivider';
import { ScrollViewScreen } from '@/ui/scrollViewScreen';
import { ProfileTick } from 'iconsax-react-native';
import React from 'react';
import { useAuth } from '../../core';
import { ActionHeader } from './actionHeader';
import BannerVoucher from './bannerVoucher';
import EndowList from './endowList';
import { HeaderUserInfo } from './headerUserInfo';
import RecommendVouchers from './recommendVouchers';
import ServiceButtonList, { ButtonAction } from './serviceButtonList';
import StoreList from './StoreList';
export const Home = () => {
  const { signIn } = useAuth();
  const [refreshing, setRefreshing] = React.useState(false);

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
  ];
  const buttons: ButtonAction[] = [
    {
      id: '1',
      icon: ProfileTick,
      directScreen: '',
      label: 'Detailing',
    },
    {
      id: '2',
      icon: ProfileTick,
      directScreen: '',
      label: 'Garage',
    },
    {
      id: '3',
      icon: ProfileTick,
      directScreen: '',
      label: 'Bảo hiểm',
    },
    {
      id: '4',
      icon: ProfileTick,
      directScreen: '',
      label: 'Đăng kiểm',
    },
    {
      id: '5',
      icon: ProfileTick,
      directScreen: '',
      label: 'Cứu hộ',
    },
    {
      id: '6',
      icon: ProfileTick,
      directScreen: '',
      label: 'Vay mua ô tô',
    },
  ];
  const handleScroll = (e: any) => {
    if (!e) {
      return;
    }
    const { nativeEvent } = e;
    console.log(nativeEvent);

    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      // console.log('SCREEN WIDTH: ', WIDTH, '--- OFFSET: ', currentOffset);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollViewScreen onRefresh={onRefresh} refreshing={refreshing}>
      <View className="px-5">
        <HeaderUserInfo />
        <Divider spacing={3} orientation="horizontal" color="bland" />
        <ActionHeader />
      </View>
      <View className="pl-5  pr-1">
        <BannerVoucher title="Danh sách lịch hẹn" data={vouchers} />
      </View>
      <View className="px-5  pr-1">
        <ServiceButtonList data={buttons} title="Danh sách dịch vụ" />
      </View>
      <View className="pl-5 pr-1">
        <RecommendVouchers title="Gợi ý cho bạn" data={vouchers} />
        <StoreList title="Danh sách cửa hàng" data={vouchers} />
        <EndowList title="Ưu đãi" data={vouchers} />
      </View>
    </ScrollViewScreen>
  );
};
