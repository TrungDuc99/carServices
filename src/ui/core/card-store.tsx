import { ScaleSize, Spacing } from '@/configs';
import { IVoucher } from '@/models';
import { View } from '@/ui';
import { Location, Star1, VideoTick } from 'iconsax-react-native';
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

const StoreCard = ({
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
      <View style={{ maxWidth: ScaleSize(310) }}>
        <View
          className="flex-row justify-center align-middle"
          style={styles.starView}
        >
          <Text variant="sm" numberOfLines={1} className="font-medium mr-1">
            {item.rating}
          </Text>
          <Star1 color={colors.baseColor.gold} variant="Bold" size={20} />
        </View>
        <View
          className="flex-row justify-center align-middle"
          style={styles.timeView}
        >
          <VideoTick color={'gray'} variant="Bold" size={15} />
          <Text
            variant="xs"
            numberOfLines={1}
            className="font-light mr-1 ml-1 "
          >
            08:00 - 20:00
          </Text>
        </View>
        <View
          className="flex-row justify-center align-middle"
          style={styles.locationView}
        >
          <Location color={'gray'} variant="Bold" size={15} />
          <Text variant="xs" numberOfLines={1} className="font-light mr-1 ">
            10 km
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: ScaleSize(300),
              height: ScaleSize(150),
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

export default StoreCard;

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
    right: -5,
  },
  locationView: {
    zIndex: 100,
    width: 60,
    height: 23,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'rgba(212, 210, 210, 0.787)',
    position: 'absolute',
    bottom: 70,
    left: 10,
  },
  timeView: {
    zIndex: 100,
    width: 105,
    height: 23,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'rgba(212, 210, 210, 0.787)',
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
});
