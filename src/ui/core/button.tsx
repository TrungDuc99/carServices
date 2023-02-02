import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { ActivityIndicator } from './activity-indicator';
import { Text } from './text';
import { TouchableOpacity } from './touchable-opacity';
import { View } from './view';

type Variant = {
  container: string;
  label: string;

  indicator: string;
};
type VariantName = 'defaults' | 'primary' | 'outline' | 'secondary';
type BVariant = {
  [key in VariantName]: Variant;
};

export const buttonVariants: BVariant = {
  defaults: {
    container: 'flex-row items-center justify-center  px-12 py-3 my-2',
    label: 'text-[16px] font-medium text-white',
    indicator: 'text-white ',
  },
  primary: {
    container: 'bg-primary-700',
    label: '',
    indicator: 'text-white',
  },
  secondary: {
    container: 'bg-primary-600',
    label: 'text-secondary-600',
    indicator: 'text-white',
  },
  outline: {
    container: 'border border-neutral_extra-900',
    label: 'text-neutral_extra-900',
    indicator: 'text-neutral_extra-900',
  },
};

interface Props extends TouchableOpacityProps {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
  borderRadius?: 'medium' | 'full';
  size?: 'small' | 'medium' | 'large';
  iconLeft?: {
    name: any;
    color?: string;
    size?: number;
  };
  iconRight?: {
    name: any;
    color?: string;
    size?: number;
  };
}
export const Button = ({
  label,
  iconLeft,
  iconRight,
  size = 'medium',
  borderRadius = 'full',
  loading = false,
  variant = 'primary',
  disabled = false,
  ...props
}: Props) => {
  const IconLeft = iconLeft?.name;
  const IconRight = iconRight?.name;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={{
        height: size === 'small' ? 50 : size === 'large' ? 60 : 55,
      }}
      className={`${borderRadius === 'medium' ? 'rounded-lg' : 'rounded-full'}
    ${buttonVariants.defaults.container}
     ${buttonVariants[variant].container}
     ${disabled ? 'opacity-50' : ''}
    `}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          className={`
          ${buttonVariants.defaults.indicator}
           ${buttonVariants[variant].indicator}
          `}
        />
      ) : (
        <View className="flex-row">
          {IconLeft && (
            <IconLeft color={iconLeft.color ? iconLeft.color : 'white'} />
          )}
          <Text
            className={`mx-2
          ${buttonVariants.defaults.label}
           ${buttonVariants[variant].label}
          `}
          >
            {label}
          </Text>

          {IconRight && (
            <IconRight color={iconRight.color ? iconRight.color : 'white'} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
