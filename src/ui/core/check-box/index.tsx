import { Colors, FontFamily, ScaleSize } from '@/configs';
import React from 'react';
import { Controller, ControllerProps, UseFormReturn } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { Checkbox, CheckboxProps, View } from 'react-native-ui-lib';
import colors from '@/ui/theme/colors';

interface CheckBoxFiled extends CheckboxProps {
  name: string;
  label: string;
  rules?: ControllerProps['rules'] | any;
  control: any;
  style?: any;
}
const CheckboxField = (props: CheckBoxFiled) => {
  const { name, label, rules, control, style, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <View height={ScaleSize(28)} centerV>
          <Checkbox
            {...field}
            {...rest}
            size={ScaleSize(24)}
            borderRadius={ScaleSize(6)}
            onValueChange={field.onChange}
            label={label}
            labelStyle={[style, styles.label]}
            color={colors.primary[700]}
            style={[style, styles.checkbox]}
          />
        </View>
      )}
    />
  );
};

export default CheckboxField;
const styles = StyleSheet.create({
  label: {},
  checkbox: {
    alignItems: 'center',
  },
});
