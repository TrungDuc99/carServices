import { ScaleSize } from '@/configs';
import { Text, TouchableOpacity, View } from '@/ui';
import moment from 'moment';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface RecommendDateProps {}

const RecommendDate = (props: RecommendDateProps) => {
  const today = new Date();
  return (
    <View style={styles.container}>
      <TouchableOpacity className="" style={styles.dateContainer}>
        <Text>Hôm nay</Text>
        <Text variant="md" className="font-bold">
          {moment(today).format('DD/MM')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="" style={styles.dateContainer}>
        <Text>Ngày mai</Text>
        <Text variant="md" className="font-bold">
          {moment(today.getDate() + 1).format('DD/MM')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="" style={styles.dateContainer}>
        <Text>Thứ 7</Text>
        <Text variant="md" className="font-bold">
          {moment().format('DD/MM')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="" style={styles.dateContainer}>
        <Text>Chủ nhật</Text>
        <Text variant="md" className="font-bold">
          {moment().format('DD/MM')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendDate;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: '#E3ECFF',
    minWidth: ScaleSize(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
