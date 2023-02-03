import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePosts } from '@/api';
import { ControlledInput, ControlledSelectBase, EmptyList, View } from '@/ui';
import { Colors, Spacing } from '@/configs';
import { IVoucher } from '@/models';
import BackTopBar from '@/ui/core/back-top-bar';
import { Filter, SearchNormal } from 'iconsax-react-native';
import { useForm } from 'react-hook-form';
import { FlatList } from 'react-native';
import { GaraCard } from './card';
import BasePopup from '@/ui/core/popup-base';

export const StoresDetail = () => {
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
      <BackTopBar title="Danh sách cửa hàng" />
      <View className="pr-5 pl-5 pt-1">
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          iconLeft={{
            custom: true,
            name: Filter,
            color: 'white',
            onPress: () => setIsShow(!isShow),
          }}
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
      <BasePopup
        visible={isShow}
        onCancel={() => setIsShow(false)}
        content={
          <View className="flex ">
            <View style={{ width: '100%' }}>
              <ControlledSelectBase
                control={control}
                name="tinhThanhPho"
                label="Tinh thành phố"
                options={[
                  { label: 'TP Hồ Chí Minhasdwwwr', value: 1 },
                  { label: 'TP Hồ Chí Minhasd', value: 2 },
                  { label: 'TP Hồ Chí Minasdh', value: 3 },
                  { label: 'TP Hồ Chí Minhasd', value: 4 },
                ]}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};
