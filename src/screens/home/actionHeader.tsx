import { Text, TouchableOpacity, View } from '@/ui';
import {
  DollarSquare,
  SearchNormal,
  TicketStar,
  Wallet3,
} from 'iconsax-react-native';
import React from 'react';
import { useAuth } from '../../core';

export const ActionHeader = () => {
  const { signIn } = useAuth();

  return (
    <View className="flex-row   justify-between">
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center' }}
        className="px-4 rounded-full bg-primary-300"
      >
        <View className="flex-row ">
          <DollarSquare size={22} color="#256CFE" />
          <Text
            className="ml-2 font-bold center"
            variant="sm"
            style={{ color: '#256CFE' }}
          >
            1000 Điểm
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row ">
        <TouchableOpacity className="p-2 mr-2 rounded-full bg-primary-300">
          <Wallet3 color="#256CFE" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2  mr-2  rounded-full bg-primary-300">
          <SearchNormal color="#256CFE" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2  rounded-full bg-primary-300">
          <TicketStar color="#256CFE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
