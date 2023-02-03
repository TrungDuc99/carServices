import { usePosts } from '@/api';
import { Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { EmptyList, View } from '@/ui';
import BackTopBar from '@/ui/core/back-top-bar';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList } from 'react-native';

import VoucherCard from './card-voucher';

export const GetVoucher = () => {
  const { data, isLoading } = usePosts();
  const { navigate } = useNavigation();
  const [isShow, setIsShow] = useState(false);

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
      <View className="m-3 " style={{ width: '100%', flex: 1 }}>
        <VoucherCard item={item} />
      </View>
    ),
    [navigate]
  );

  const { handleSubmit, control } = useForm<any>({});

  return (
    <View className="flex-1  bg-white">
      <BackTopBar title="Danh sách cửa hàng" />

      <View style={{ width: '100%', flex: 1 }}>
        <FlatList
          data={vouchers}
          contentContainerStyle={{
            flexWrap: 'wrap',
            marginLeft: Spacing(4),
          }}
          numColumns={1}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          ListEmptyComponent={<EmptyList isLoading={false} />}
        />
      </View>
    </View>
  );
};
