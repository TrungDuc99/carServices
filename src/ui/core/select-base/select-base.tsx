import { ScaleSize, Spacing } from '@/configs';
import colors from '@/ui/theme/colors';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import { TickCircle } from 'iconsax-react-native';

import { Keyboard, Platform, ScrollView, StyleSheet } from 'react-native';
import { Dialog, PanningProvider } from 'react-native-ui-lib';
import Divider from '../drivider';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Text } from '../text';
import { TouchableOpacity } from '../touchable-opacity';
import { View } from '../view';
import { Arrow } from './icons';
import { Option, OptionsBase } from './options-base';

export interface SelectBaseProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  mode?: 'single' | 'multiple';
  error?: string;
  options?: Option[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}

export const SelectBase = (props: SelectBaseProps) => {
  const {
    label,
    value,
    mode = 'single',
    error,
    options = [],
    placeholder = 'select...',
    disabled = false,
    onSelect,
  } = props;
  const dialogHeader = (props: any) => {
    const { title } = props;
    return (
      <View
        className="flex-row flex"
        style={{
          paddingHorizontal: Spacing(4),
          paddingTop: Spacing(4),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.titlePicker}>{label}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontSize: ScaleSize(14),
              color: 'green',
            }}
            children="Đóng"
          />
        </TouchableOpacity>
      </View>
    );
  };
  const [isFocus, setIsFocus] = React.useState(false);
  const optionsRef = React.useRef<BottomSheetModal>(null);
  const [optionList, setOptionList] = useState(options);
  const [dataSelected, setDataSelected] = useState<any>([]);
  const open = React.useCallback(() => {
    setIsFocus(true);
    optionsRef.current?.present();
  }, []);
  const close = React.useCallback(() => {
    setIsFocus(false);
    optionsRef.current?.dismiss();
  }, []);

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  // keyboard listener is show
  React.useMemo(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onSelectOption = React.useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      close();
    },
    [close, onSelect]
  );
  const handlePickerItem = (item: any) => {
    if (mode === 'single') {
      setDataSelected([item]);
      //form.setValue(name, [item]);
      close();
    } else {
      const pos = dataSelected.findIndex(
        (obj: any) => obj.value === item.value
      );
      setDataSelected((prev: any) => {
        const res =
          pos !== -1
            ? prev.filter((obj: any) => obj.value !== item.value)
            : [...prev, item];
        //form.setValue(name, res);
        return res;
      });
    }
  };
  const borderColor = error ? 'border-danger-600' : 'border-neutral-400';

  const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';

  const textValue =
    value !== undefined
      ? options?.filter((t) => t.value === value)?.[0]?.label ?? placeholder
      : placeholder;
  return (
    <>
      <View className="mb-4">
        {label && (
          <Text
            variant="md"
            className={error ? 'text-danger-600' : 'text-black'}
          >
            {label}
          </Text>
        )}

        <TouchableOpacity
          style={{
            height: ScaleSize(60),
            backgroundColor: isFocus ? '#fff' : '#f1f1f1',
            borderRadius: ScaleSize(16),
            ...(isFocus ? styles.shadowInput : {}),
          }}
          className={`mt-0 flex-row items-center justify-center py-3 px-5 text-[16px]`}
          disabled={disabled}
          onPress={open}
        >
          <View className="flex-1">
            <Text variant="md" className="text-neutral-600">
              {textValue}
            </Text>
          </View>
          <Arrow />
        </TouchableOpacity>
        {error && <Text variant="error">{error}</Text>}
      </View>
      <Dialog
        visible={isFocus}
        onDismiss={close}
        width="100%"
        height={false ? '70%' : '45%'}
        bottom
        containerStyle={{
          backgroundColor: '#fff',
          borderTopLeftRadius: ScaleSize(16),
          borderTopRightRadius: ScaleSize(16),
        }}
        renderPannableHeader={dialogHeader}
        panDirection={PanningProvider.Directions.DOWN}
        pannableHeaderProps={{ title: placeholder }}
      >
        <View
          style={[
            styles.dialog,
            {
              marginBottom:
                Platform.OS === 'ios' && isKeyboardVisible ? 200 : 5,
            },
          ]}
        >
          {/* <View margin-15>
                  <SearchBar size="large" onSubmit={handleSearch} />
                </View> */}

          <ScrollView>
            {optionList?.map((item: any, index: number) => (
              <React.Fragment key={item.value}>
                <TouchableOpacity
                  style={styles.wrapItem}
                  onPress={() => handlePickerItem(item)}
                >
                  <>
                    <Text
                      style={{
                        fontSize: ScaleSize(14),
                      }}
                      children={item.label}
                    />

                    {dataSelected.findIndex(
                      (obj: any) => obj.value === item.value
                    ) !== -1 ||
                      (Number() === Number(item.value) && (
                        <TickCircle
                          style={{ marginLeft: ScaleSize(10) }}
                          size={ScaleSize(20)}
                          color={colors.primary[600]}
                        />
                      ))}
                  </>
                </TouchableOpacity>

                <Divider orientation="horizontal" />
              </React.Fragment>
            ))}
          </ScrollView>
        </View>
      </Dialog>
    </>
  );
};
const styles = StyleSheet.create({
  shadowInput: {
    shadowColor: colors.primary[600],
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  dialog: {
    backgroundColor: 'white',
    height: 400,
  },
  wrapItemPicker: {
    borderRadius: ScaleSize(30),
    paddingHorizontal: Spacing(2),
    paddingVertical: Spacing(1),
    marginBottom: Spacing(1),
    height: ScaleSize(28),
  },
  txtItemLabel: {
    fontSize: ScaleSize(12),

    marginRight: Spacing(1),
  },

  wrapItem: {
    height: ScaleSize(30),
    paddingHorizontal: Spacing(4),
  },
  titlePicker: {
    fontSize: ScaleSize(14),
  },
});
