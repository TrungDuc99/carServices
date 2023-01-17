import { useNavigation } from '@react-navigation/native';

import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import { ControlledInput, EmptyList, Input, View } from '@/ui';

import BackTopBar from '@/ui/core/back-top-bar';
import { IVoucher } from '@/models';
import { GaraCard } from './card';
import { FlatList } from 'react-native';
import { Colors, ScaleSize, Spacing } from '@/configs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Call, Filter, SearchNormal } from 'iconsax-react-native';

export const StoresDetail = () => {
  const { data, isLoading } = usePosts();
  const { navigate } = useNavigation();
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
  const renderItem = React.useCallback(
    ({ item, index }: { item: IVoucher; index: number }) => (
      <View className="m-1" style={{}}>
        <GaraCard
          onPress={() => navigate('StoreDetail')}
          item={item}
          index={index}
        />
      </View>
    ),
    [navigate]
  );

  const { handleSubmit, control } = useForm<any>({});

  return (
    <View className="flex-1  bg-white">
      <BackTopBar
        title="Danh sách cửa hàng"
        pressBack={() => {
          navigate('Home');
        }}
      />
      <View className="pr-5 pl-5 pt-1">
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          iconLeft={{ custom: true, name: Filter, color: 'white' }}
          iconRight={{
            name: SearchNormal,
            color: Colors.primaryColor,
          }}
          name="phoneNumber"
          placeholder="Số điện thoại"
        />
      </View>

      <FlatList
        data={vouchers}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: Spacing(4),
        }}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={false} />}
      />
    </View>
  );
};
