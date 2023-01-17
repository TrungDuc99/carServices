import { Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { View } from '@/ui';
import { Star1 } from 'iconsax-react-native';
import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-ui-lib';
import colors from '../theme/colors';
import Divider from './drivider';
import { Text } from './text';

interface VoucherCardProps {
  item: IVoucher;
  showContent?: boolean;
  minHeight?: boolean;
}

const VoucherCard = ({
  item,
  minHeight = false,
  showContent = true,
  ...rest
}: VoucherCardProps) => {
  const sizeWindow = Dimensions.get('window');
  const scaleVer = sizeWindow.height;
  return (
    <Card
      key={item.id}
      {...rest}
      style={{
        padding: 5,

        minHeight: minHeight
          ? Platform.OS === 'android'
            ? scaleVer - 170
            : '100%'
          : 0,
      }}
      borderRadius={12}
    >
      <View className="flex-row justify-between " style={styles.headerCard}>
        <Text variant="sm" numberOfLines={1} className="font-medium">
          {item.shopName}
        </Text>
        <View className="flex-row">
          <Text variant="sm" numberOfLines={1} className="font-medium mr-1">
            {item.rating}
          </Text>
          <Star1 color={colors.baseColor.gold} variant="Bold" size={20} />
        </View>
      </View>
      <Divider color="bland" orientation="horizontal" />
      <View className="flex-row p-1 mt-1">
        <Image
          style={{
            width: 120,
            height: 67,
          }}
          source={
            item.image
              ? require('src/assets/images/Rectangle.png')
              : {
                  uri: `https://i.pinimg.com/736x/e7/00/3d/e7003dba50d48927e5391cacc28ee9b9.jpg`,
                }
          }
        />
        <View className="ml-3">
          <Text variant="sm" numberOfLines={1} className="font-medium">
            {item.name}
          </Text>
          <Text variant="xs" className="font-light" numberOfLines={3}>
            {item.applyPlace}
          </Text>
          <Text variant="xs" className="font-light" numberOfLines={3}>
            Thời gian:{' '}
            <Text variant="xs" className="font-medium" numberOfLines={3}>
              {item.applyTime}
            </Text>
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default VoucherCard;

const styles = StyleSheet.create({
  container: {},
  headerCard: {
    padding: Spacing(1.5),
  },
});
