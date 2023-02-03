import { Text, View } from '@/ui';
import ButtonService from '@/ui/core/button-service';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

export type ButtonAction = {
  id: string;
  label: string;
  icon: any;
  directScreen: string;
};
interface ServiceButtonListProps {
  data: ButtonAction[];
  title: string;
}

const ServiceButtonList = (props: ServiceButtonListProps) => {
  const { navigate } = useNavigation();
  const { data, title } = props;
  const Item = ({ item }: any, index: number) => {
    return (
      <View className="p-3" key={item.id}>
        <ButtonService
          item={item}
          onPress={() => {
            navigate('Payment');
          }}
        />
        <Text variant="sm" className="mt-1 text-center font-medium">
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View className="py-1" style={styles.container}>
      <Text variant="md" numberOfLines={1} className="font-medium">
        {title}
      </Text>

      <FlatList
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        numColumns={3}
        data={data}
        bounces={false}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ServiceButtonList;

const styles = StyleSheet.create({
  container: {},
});
