import { ScaleSize, Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { View } from '@/ui';
import { Star1 } from 'iconsax-react-native';
import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-ui-lib';
import colors from '../theme/colors';
import VoucherCard from './card-voucher';
import Divider from './drivider';
import { Text } from './text';

interface VoucherCardColumnProps {
  item: IVoucher;
  showContent?: boolean;
  minHeight?: boolean;
}

const VoucherCardColumn = ({
  item,
  minHeight = false,
  showContent = true,
  ...rest
}: VoucherCardColumnProps) => {
  const sizeWindow = Dimensions.get('window');
  const scaleVer = sizeWindow.height;
  return (
    <Card
      key={item.id}
      {...rest}
      style={{
        padding: 10,

        minHeight: minHeight
          ? Platform.OS === 'android'
            ? scaleVer - 170
            : '100%'
          : 0,
      }}
      borderRadius={12}
    >
      <View style={{ maxWidth: ScaleSize(130) }}>
        <View
          className="flex-row justify-center align-middle"
          style={styles.starView}
        >
          <Text variant="sm" numberOfLines={1} className="font-medium mr-1">
            {item.rating}
          </Text>
          <Star1 color={colors.baseColor.gold} variant="Bold" size={20} />
        </View>

        <View>
          <Image
            style={{
              width: 120,
              height: 67,
              borderRadius: 5,
            }}
            source={
              item.image
                ? require('src/assets/images/Rectangle.png')
                : {
                    uri: `https://i.pinimg.com/736x/e7/00/3d/e7003dba50d48927e5391cacc28ee9b9.jpg`,
                  }
            }
          />
          <View className="mt-2">
            <Text
              variant="sm"
              numberOfLines={1}
              style={{ textAlign: 'left' }}
              className=" font-medium"
            >
              {item.name}
            </Text>
            <Text variant="xs" className="font-light">
              Ưu đãi 20% bảo trì, bảo dưỡng
            </Text>
            <Text variant="xs" className="font-light">
              200.000 điểm
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default VoucherCardColumn;

const styles = StyleSheet.create({
  container: {},
  headerCard: {
    padding: Spacing(1.5),
  },
  starView: {
    zIndex: 100,
    width: 52,
    height: 20,
    borderRadius: 4,
    backgroundColor: 'rgba(212, 210, 210, 0.787)',
    position: 'absolute',
    top: -5,
    left: 75,
  },
});
