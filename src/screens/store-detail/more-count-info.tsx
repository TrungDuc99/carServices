import { Text, View } from '@/ui';
import Divider from '@/ui/core/drivider';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface MoreCountInfoProps {
  starts?: number;
  vouchers?: number;
  services?: number;
  commentCount?: number;
}

const MoreCountInfo = (props: MoreCountInfoProps) => {
  return (
    <View className="flex-row p-3 p-4 mt-4" style={styles.container}>
      <View>
        <Text variant="md" className="font-bold text-center">
          4.9/5
        </Text>
        <Text variant="sm" className="text-center  font-light">
          Đánh giá
        </Text>
      </View>
      <Divider orientation="vertical" />
      <View>
        <Text variant="md" className="font-bold text-center">
          123
        </Text>
        <Text variant="sm" className="text-center  font-light">
          Vouchers
        </Text>
      </View>
      <Divider orientation="vertical" />
      <View>
        <Text variant="md" className=" text-center font-bold">
          12
        </Text>
        <Text variant="sm" className="text-center  font-light">
          Dịch vụ
        </Text>
      </View>
      <Divider orientation="vertical" />
      <View>
        <Text variant="md" className="font-bold text-center">
          48
        </Text>
        <Text variant="sm" className="text-center font-light">
          Bình luận
        </Text>
      </View>
    </View>
  );
};

export default MoreCountInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3ECFF',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
});
