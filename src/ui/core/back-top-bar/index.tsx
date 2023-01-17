import { Colors, ScaleSize, Spacing } from '@/configs';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleLeft, ArrowLeft } from 'iconsax-react-native';
import React from 'react';
import { Image, Platform, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { View, ViewProps } from 'react-native-ui-lib';
import { Text } from '../text';
import { TouchableOpacity } from '../touchable-opacity';
interface BackTopBarProps extends ViewProps {
  title: string;
  iconRight?: {
    icon?: any;
    onPress?: () => void;
  };
  pressBack?: () => void;
}
const BackTopBar = ({
  title,
  iconRight,
  pressBack,
  ...rest
}: BackTopBarProps) => {
  const IconRight = iconRight?.icon;
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: Spacing(1.2),
      marginTop:
        Platform.OS === 'ios' && isIphoneX()
          ? Spacing(9)
          : Platform.OS === 'android'
          ? Spacing(0)
          : Spacing(5),
    },
    title: {
      width: '80%',
    },
  });
  const IconBack =
    Platform.select({
      ios: ArrowLeft,
      android: ArrowLeft,
    }) || ArrowLeft;
  const { navigate } = useNavigation();
  const handlePressBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
    // pressBack && pressBack();
  };
  return (
    <View {...rest} style={styles.container}>
      {/* <StatusBar translucent backgroundColor={Colors.primaryColor} barStyle="default" /> */}
      <View row centerV style={{ justifyContent: 'space-evenly' }}>
        <TouchableOpacity marginL-5 onPress={handlePressBack}>
          <IconBack
            color={Colors.blackColor}
            size={ScaleSize(32)}
            style={{ marginRight: 2 }}
          />
        </TouchableOpacity>
        <Text
          variant="md"
          className="font-medium"
          style={styles.title}
          children={title}
        />
      </View>
    </View>
  );
};

export default BackTopBar;
