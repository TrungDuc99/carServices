import React from 'react';

import type { Post } from '@/api';
import { colors, Image, Pressable, Text, View } from '@/ui';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import scaleSize from '@/configs/scale';
import { Card } from 'react-native-ui-lib';
import { Spacing } from '@/configs';
import { Star1 } from 'iconsax-react-native';
type Props = {
  item: any;
  index: number;
} & { onPress?: () => void };

export const GaraCard = ({ item, index, onPress = () => {} }: Props) => {
  const sizeWindow = Dimensions.get('window');
  const scaleVer = sizeWindow.height;
  return (
    <Card
      style={{
        padding: 10,
        marginLeft: index % 2 !== 0 ? Spacing(2) : 0,
        marginTop: Spacing(2),
      }}
      onPress={() => {
        onPress && onPress();
      }}
      borderRadius={12}
    >
      <View style={{}}>
        <View
          className="flex-row justify-center align-middle"
          style={styles.starView}
        >
          <Text
            variant="sm"
            numberOfLines={1}
            className="font-medium mr-1 ml-4"
          >
            {item.rating}
          </Text>
          <Star1 color={colors.baseColor.gold} variant="Bold" size={20} />
        </View>

        <View>
          <Image
            style={{
              width: scaleSize(160),
              height: scaleSize(138),
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
              style={{ textAlign: 'center' }}
              className=" font-medium"
            >
              {item.shopName}
            </Text>
            <Text
              variant="sm"
              numberOfLines={1}
              style={{ textAlign: 'center' }}
              className=" font-medium"
            >
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};
export const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
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
