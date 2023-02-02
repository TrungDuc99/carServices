import { IVoucher } from '@/models';
import { Text, TouchableOpacity, View, WIDTH } from '@/ui';
import StoreCard from '@/ui/core/card-store';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

interface StoreListProps {
  data: IVoucher[];
  title: string;
}

const StoreList = (props: StoreListProps) => {
  const { data, title } = props;
  const { navigate } = useNavigation();

  const handleScroll = (e: any) => {
    if (!e) {
      return;
    }
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      // console.log('SCREEN WIDTH: ', WIDTH, '--- OFFSET: ', currentOffset);
    }
  };

  return (
    <View className="py-3">
      <View className="flex-row justify-between mb-1">
        <Text variant="md" numberOfLines={1} className="font-medium">
          {title}
        </Text>
        <TouchableOpacity onPress={() => navigate('StoresDetail', { id: 3 })}>
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
              <StoreCard item={item} />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoreList;

const styles = StyleSheet.create({
  container: {},
});
