import { Colors, ScaleSize } from '@/configs';
import { Text, TouchableOpacity, View } from '@/ui';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react-native';
import moment from 'moment';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { LocaleConfig, Calendar } from 'react-native-calendars';
interface DatePickerProps {}

const DatePicker = (props: DatePickerProps) => {
  const [date, setDate] = React.useState<any[]>([]);
  const [dateCurrent, setDateCurrent] = React.useState<string>(
    moment().format('DD/MM/YYYY')
  );

  function getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(moment(date).format('DD'));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  React.useEffect(() => {
    setDateCurrent(moment().format('YYYY-MM-DD'));
    setDate(getDaysInMonth(0, 2023));
  }, []);
  console.log(dateCurrent);

  return (
    <View style={styles.container}>
      <Calendar
        style={{ backgroundColor: '#E3ECFF' }}
        // markingType={'period'}
        // markedDates={{
        //   '2023-02-15': { marked: true, dotColor: '#50cebb' },
        //   '2023-02-16': { marked: true, dotColor: '#50cebb' },
        //   '2023-02-21': {
        //     startingDay: true,
        //     color: '#50cebb',
        //     textColor: 'white',
        //   },
        //   '2023-02-22': { color: '#70d7c7', textColor: 'white' },
        //   '2023-02-23': {
        //     color: '#70d7c7',
        //     textColor: 'white',
        //     marked: true,
        //     dotColor: 'white',
        //   },
        //   '2023-02-24': { color: '#70d7c7', textColor: 'white' },
        //   '2023-02-25': {
        //     endingDay: true,
        //     color: '#50cebb',
        //     textColor: 'white',
        //   },
        // }}
        color
        markingType={'custom'}
        markedDates={{
          [dateCurrent]: {
            customStyles: {
              container: {
                backgroundColor: Colors.primaryColor,
              },
              text: {
                color: 'white',
              },
            },
          },
        }}
      />

      {/* <View style={styles.headerCalendar}>
        <Text variant="md" className="font-medium">
          Tháng 11
        </Text>
        <View className="flex flex-row">
          <TouchableOpacity onPress={() => {}}>
            <ArrowLeft2 color="gray" variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <ArrowRight2 color={Colors.primaryColor} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.week}>
        <Text variant="xs" className="font-medium">
          Thứ 2
        </Text>
        <Text variant="xs" className="font-medium">
          Thứ 3
        </Text>
        <Text variant="xs" className="font-medium">
          Thứ 4
        </Text>
        <Text variant="xs" className="font-medium">
          Thứ 5
        </Text>
        <Text variant="xs" className="font-medium">
          Thứ 6
        </Text>
        <Text variant="xs" className="font-medium">
          Thứ 7
        </Text>
        <Text variant="xs" className="font-medium">
          CN
        </Text>
      </View>
      <View
        className="flex flex-row "
        style={{
          flexWrap: 'wrap',
        }}
      >
        {date.map((item, index) => {
          console.log(dateCurrent, '=', item);

          return (
            <TouchableOpacity
              style={[
                styles.datePickerBtn,
                {
                  backgroundColor:
                    Number(dateCurrent) === Number(item)
                      ? Colors.primaryColor
                      : '',
                },
              ]}
            >
              <Text variant="sm" key={item}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View> */}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 5,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#E3ECFF',
  },
  headerCalendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  datePickerBtn: {
    padding: 5,
    borderRadius: 1000,
    margin: 3,
    width: 45,
    height: 45,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
