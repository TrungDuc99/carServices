import { ScaleSize } from '@/configs';
import scaleSize from '@/configs/scale';
import { IVoucher } from '@/models';
import { Text, TouchableOpacity, View, WIDTH } from '@/ui';
import VoucherCard from '@/ui/core/card-voucher';
import VoucherCardColumn from '@/ui/core/card-voucher-column';
import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

interface BannerVoucherProps {
  data: IVoucher[];
  title: string;
}

const EndowList = (props: BannerVoucherProps) => {
  const { data, title } = props;
  const handleScroll = (e: any) => {
    if (!e) {
      return;
    }
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      console.log('SCREEN WIDTH: ', WIDTH, '--- OFFSET: ', currentOffset);
    }
  };
  return (
    <View className="py-3">
      <View className="flex-row justify-between mb-1">
        <Text variant="md" numberOfLines={1} className="font-medium">
          {title}
        </Text>
        <TouchableOpacity>
          <Text
            variant="sm"
            numberOfLines={1}
            className="font-medium color-primary text-primary-600 mr-5"
          >
            Tất cả
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        horizontal
        onScroll={(e) => handleScroll(e)}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <View className="p-2" key={item.id}>
              <Image
                style={{
                  borderRadius: 15,
                  width: ScaleSize(310),
                  height: ScaleSize(190),
                }}
                source={require('src/assets/images/wheels.png')}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default EndowList;

const styles = StyleSheet.create({
  container: {},
});
