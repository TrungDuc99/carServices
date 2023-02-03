import { Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { colors, Text, View } from '@/ui';
import Divider from '@/ui/core/drivider';
import { Star1 } from 'iconsax-react-native';
import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-ui-lib';

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
      <View
        className="flex-row justify-center align-middle"
        style={styles.starView}
      >
        <Text variant="sm" numberOfLines={1} className="font-medium mr-1 ml-4">
          {item.rating}
        </Text>
        <Star1 color={colors.baseColor.gold} variant="Bold" size={20} />
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
  starView: {
    zIndex: 100,
    width: 52,
    height: 20,
    borderRadius: 4,
    backgroundColor: 'rgba(244, 244, 244, 0.934)',
    position: 'absolute',
    top: -5,
    right: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
