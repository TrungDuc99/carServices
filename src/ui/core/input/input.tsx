import { styled } from 'nativewind';
import * as React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { isRTL } from '@/core';

import colors from '../../theme/colors';
import { Text } from '../text';
import { View } from '../view';
import { TouchableOpacity } from '../touchable-opacity';

const STextInput = styled(NTextInput);

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  size?: 'small' | 'medium' | 'large';

  iconLeft?: {
    name: any;
    color?: string;
    custom?: boolean;
    size?: number;
    onPress?: () => void;
  };
  iconRight?: {
    name: any;
    color?: string;
    size?: number;
    onPress?: () => void;
  };
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    iconLeft,
    iconRight,
    size = 'medium',
    ...inputProps
  } = props;
  const IconLeft = iconLeft?.name;
  const IconRight = iconRight?.name;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? 'border-danger-600'
    : isFocussed
    ? 'border-primary-700'
    : 'border-neutral-400';
  const marginVertical = Platform.OS === 'ios' ? 'py-3' : 'py-2';
  const backgroundColorInput =
    Platform.OS === 'ios' ? 'bg-neutral-200' : 'bg-neutral-200';
  // const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200'; => ${bgColor}
  const textDirection = isRTL ? 'text-right' : 'text-left';
  return (
    <View className="mb-4">
      {label && (
        <Text
          variant="xs"
          className={`mb-2 ${error ? 'text-danger-600' : 'text-#112950'}`}
        >
          {label} <Text className="text-danger-600"> *</Text>
        </Text>
      )}
      <View
        style={[
          {
            height: size === 'small' ? 45 : size === 'large' ? 55 : 50,
          },
          isFocussed
            ? {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }
            : {},
        ]}
        className={`flex-row w-full px-4 rounded-2xl ${backgroundColorInput} items-center justify-center content-center ${borderColor} ${textDirection} `}
      >
        {IconLeft && (
          <TouchableOpacity
            style={
              iconLeft.custom
                ? {
                    backgroundColor: colors.baseColor.orange,
                    padding: 7,
                    borderRadius: 10,
                  }
                : {}
            }
            onPress={iconLeft.onPress && iconLeft.onPress}
          >
            <IconLeft
              size={20}
              color={
                iconLeft.color
                  ? iconLeft.color
                  : isFocussed
                  ? colors.primary[700]
                  : '#8894A7'
              }
            />
          </TouchableOpacity>
        )}
        <STextInput
          testID="STextInput"
          ref={ref}
          placeholderTextColor={'#8f8f8f'}
          className={`mt-0 ml-1 ${marginVertical} px-2 flex-1 ${borderColor} rounded-md text-[16px] ${textDirection}`}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={StyleSheet.flatten([
            { writingDirection: isRTL ? 'rtl' : 'ltr' },
          ])}
        />

        {IconRight && (
          <TouchableOpacity onPress={iconRight.onPress && iconRight.onPress}>
            <IconRight
              color={
                iconRight.color
                  ? iconRight.color
                  : isFocussed
                  ? colors.primary[700]
                  : '#8894A7'
              }
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
