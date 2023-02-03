import { ControlledSelectBase, Text, TouchableOpacity, View } from '@/ui';
import ArlertPopup from '@/ui/core/popup-arlert';
import BasePopup from '@/ui/core/popup-base';

import {
  DollarSquare,
  SearchNormal,
  TicketStar,
  Wallet3,
} from 'iconsax-react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
          <Wallet3 variant="Bulk" color="#256CFE" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2  mr-2  rounded-full bg-primary-300">
          <SearchNormal variant="Bulk" color="#256CFE" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2  rounded-full bg-primary-300">
          <TicketStar variant="Bulk" color="#256CFE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
