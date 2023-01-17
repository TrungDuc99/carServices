import { ScaleSize } from '@/configs';
import { ButtonAction } from '@/screens/home/serviceButtonList';
import { Service as ServiceIcon } from '@/ui';
import { IconProps } from 'iconsax-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';
import { WIDTH } from '../theme';
import colors from '../theme/colors';
import { View } from './view';
interface ButtonServiceProps extends IconProps {
  item: ButtonAction;
}
const ButtonService = (props: ButtonServiceProps) => {
  const { item } = props;

  const widthItem = WIDTH / 3 - ScaleSize(30);
  const styles = StyleSheet.create({
    container: {},
    cardContainer: {
      width: widthItem,
      height: ScaleSize(60),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <Card onPress={() => console.log('pressed')}>
      <View style={styles.cardContainer} className=" p-5 ">
        <ServiceIcon color={colors.primary[700]} />
      </View>
    </Card>
  );
};

export default ButtonService;
