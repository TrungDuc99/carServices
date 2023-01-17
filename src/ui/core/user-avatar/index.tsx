import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, ViewProps } from 'react-native-ui-lib';

import { Colors, ScaleSize } from '@/configs';
import { generateName } from '@/ui/utils';
import { AirbnbRating } from 'react-native-ratings';
import { Text } from '../text';
import { TouchableOpacity } from '../touchable-opacity';
interface UserAvatarProps extends ViewProps {
  userName: string;
  email?: string;
  avatarImage?: any;

  stars?: number;
  time?: string;
  backgroundColor?: string;

  onPressCard?: () => void;
}
const UserAvatar = ({
  userName,
  email,
  time,
  stars,
  avatarImage,
  backgroundColor,
  onPressCard,

  ...rest
}: UserAvatarProps) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      // borderBottomWidth: ScaleSize(1),
      // borderBottomColor: '#dedede',
      //backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    txtAvatar: {
      // fontSize: ScaleSize(7),
      // color: Colors.successColor,
    },
    wrapAvatar: {
      borderRadius: 50,

      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullName: {
      // color: '#555555',
      // fontSize: ScaleSize(14),
    },
    decriptionUser: {
      // fontSize: ScaleSize(13),
      // color: '#848484',
    },
  });
  return (
    <TouchableOpacity onPress={onPressCard}>
      <View
        {...rest}
        row
        padding-5
        // backgroundColor={backgroundColor}
        style={[
          styles.container,
          {
            borderBottomColor: '#dedede',
          },
        ]}
      >
        <View row centerV>
          <View
            width={ScaleSize(40)}
            marginR-5
            height={ScaleSize(40)}
            style={styles.wrapAvatar}
          >
            {avatarImage ? (
              <Image
                source={avatarImage}
                style={{
                  borderRadius: ScaleSize(50),
                  width: ScaleSize(60),
                  height: ScaleSize(60),
                }}
              />
            ) : (
              <Text variant="xs" className="font-medium text-white">
                {generateName(userName)}
              </Text>
            )}
          </View>

          <View
            row
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text variant="sm" className="font-bold ml-1">
                {userName}
              </Text>
              <View row>
                <AirbnbRating
                  isDisabled
                  showRating={false}
                  defaultRating={stars}
                  count={5}
                  size={12}
                />
                <Text variant="xs" className="font-bold ml-1">
                  {stars}/5
                </Text>
              </View>
            </View>
            <Text variant="sm" className="">
              {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserAvatar;
