import { Text, TouchableOpacity, View } from '@/ui';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface TimeSlotProps {}
type TimeSlotType = { id: string; state: number; timeSlot: string };
const TimeSlot = (props: TimeSlotProps) => {
  const timeSlotList = [
    {
      id: '1',
      timeSlot: ' 09:00 - 09:30',
      state: 1,
    },
    {
      id: '2',
      timeSlot: ' 09:30 - 10:00',
      state: 0,
    },
    {
      id: '3',
      timeSlot: ' 10:00 - 10:30',
      state: 0,
    },
    {
      id: '4',
      timeSlot: ' 10:30 - 11:00',
      state: 0,
    },
    {
      id: '5',
      timeSlot: ' 11:00 - 11:30',
      state: 0,
    },
    {
      id: '6',
      timeSlot: ' 11:30 - 12:00',
      state: 2,
    },
    {
      id: '7',
      timeSlot: '01:00 - 01:30',
      state: 0,
    },
    {
      id: '8',
      timeSlot: '01:30 - 02:00',
      state: 0,
    },
    {
      id: '9',
      timeSlot: '02:30 - 03:00',
      state: 0,
    },
    {
      id: '10',
      timeSlot: '03:00 - 03:30',
      state: 2,
    },
    {
      id: '11',
      timeSlot: '03:30 - 04:00',
      state: 0,
    },
    {
      id: '12',
      timeSlot: '04:00 - 04:30',
      state: 2,
    },
  ];
  const [data, setData] = React.useState(timeSlotList);
  const Item = ({
    item,
    index,
    onPress,
  }: {
    item: TimeSlotType;
    index: number;
    onPress: (item: TimeSlotType) => void;
  }) => {
    const { id, state, timeSlot } = item;

    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          onPress && onPress(item);
        }}
        disabled={state === 2 ? true : false}
        style={[
          styles.timeItemContainer,
          {
            borderWidth: 1,
            borderColor:
              state === 1 ? '#003197' : state === 0 ? '#E3ECFF' : '#E8E8E8',
            backgroundColor:
              state === 1 ? '#256CFE' : state === 0 ? '#E3ECFF' : '#E8E8E8',
          },
        ]}
      >
        <Text
          className={`${state === 1 ? 'text-white' : 'text-black'} font-medium`}
          style={styles.textTimeSlot}
        >
          {timeSlot}
        </Text>
      </TouchableOpacity>
    );
  };

  const pickTimeSlot = (id: string) => {
    const timeSlotPicked = data.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          state: 1,
        };
      } else {
        return {
          ...el,
          state: el.state != 2 ? 0 : el.state,
        };
      }
    });
    setData(timeSlotPicked);
  };
  return (
    <View style={styles.container} className="flex flex-row justify-between">
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            onPress={(item) => {
              pickTimeSlot && pickTimeSlot(item.id);
            }}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

export default TimeSlot;

const styles = StyleSheet.create({
  container: {},
  timeItemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  textTimeSlot: {
    fontSize: 13,
  },
});
