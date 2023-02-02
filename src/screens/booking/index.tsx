import { Button, ControlledInput, Text, View } from '@/ui';
import BackTopBar from '@/ui/core/back-top-bar';
import Space from '@/ui/core/space';
import { DetailScreen } from '@/ui/Detailscreen';
import { useNavigation } from '@react-navigation/native';
import { Arrow, Login } from 'iconsax-react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from './datePicker';
import RecommendDate from './recommendDate';
import TimeSlot from './timeSlot';

export const Booking = () => {
  const { navigate } = useNavigation();
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };

  const { handleSubmit, control } = useForm<any>({});

  return (
    <View className="flex-1  bg-white ">
      <BackTopBar title="Chọn lịch" />
      <DetailScreen>
        <RecommendDate />
        <Text variant="lg" className="font-medium">
          Chọn ngày
        </Text>
        <Space value={2} />
        <DatePicker />
        <Space value={6} />
        <Text variant="lg" className="font-medium">
          Chọn khung giờ
        </Text>
        <Space value={4} />
        <TimeSlot />
        <Space value={6} />
        <Text variant="md" className="font-medium">
          Mô tả thêm
        </Text>
        <Space value={3} />
        <ControlledInput
          control={control}
          name="decription"
          placeholder="Nhập mô tả thêm"
        />
        <Space value={6} />
        <Button
          label="TIẾP TỤC"
          onPress={() => {
            navigate('BookingSuccess');
          }}
          iconLeft={{
            name: Login,
          }}
        />
      </DetailScreen>
    </View>
  );
};
