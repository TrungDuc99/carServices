import { CloseCircle, ShieldCross, ShieldTick } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable } from 'react-native';
import { View } from 'react-native-ui-lib';

import { BlurView } from '@react-native-community/blur';
import { TouchableOpacity } from '../touchable-opacity';
import { Colors, ScaleSize, Spacing } from '@/configs';
import { Button } from '../button';
export type ArlertPopupProps = {
  visible: boolean;
  title?: string;
  message?: string;
  type: 'success' | 'warning' | 'error';
  submit?: () => void;
  onCancel?: () => void;
  content?: any;
};
const ArlertPopup = ({
  visible,
  content,
  message,
  type,
  title,
  onCancel,
  submit,
}: ArlertPopupProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      style={[{ justifyContent: 'flex-end', margin: 0 }, styles.absolute]}
      visible={visible}
      onRequestClose={() => {
        onCancel && onCancel();
      }}
    >
      <BlurView
        style={styles.absolute}
        blurType="extraDark"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            className="justify-center align-middle"
            onPress={() => {
              onCancel && onCancel();
            }}
            style={{
              padding: 5,
              borderRadius: 1000,
              width: ScaleSize(42),
              height: ScaleSize(42),

              backgroundColor: 'white',
              position: 'absolute',
              bottom: -70,
              left: 130,
            }}
          >
            <CloseCircle variant="Bulk" color="#DA202C" size={35} />
          </TouchableOpacity>

          {/* {type === 'success' ? (
            <View
              centerH
              centerV
              style={{
                width: 60,
                height: 60,
                borderRadius: 1000,
                backgroundColor: '#12B996',
              }}
            >
              <ShieldTick color="#ffff" size={40} />
            </View>
          ) : type === 'error' ? (
            <View
              centerH
              centerV
              style={{
                width: 60,
                height: 60,
                borderRadius: 1000,
                backgroundColor: 'red',
              }}
            >
              <ShieldCross color="#ffff" size={40} />
            </View>
          ) : (
            <View
              centerH
              centerV
              style={{
                width: 60,
                height: 60,
                borderRadius: 1000,
                backgroundColor: Colors.successColor,
              }}
            >
              <ShieldCross color="#ffff" size={40} />
            </View>
          )} */}
          <Text
            style={[
              styles.modalText,
              {
                color:
                  type === 'success'
                    ? Colors.successColor
                    : type === 'warning'
                    ? Colors.warnColor
                    : Colors.errorColor,
              },
            ]}
          >
            {title}
          </Text>
          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              onPress && onPress();
            }}
          >
            <Text style={styles.textStyle}>Chup</Text>
          </Pressable> */}
          <View style={styles.content}>{content && content}</View>
          <View style={{ width: '80%', marginBottom: 12 }}>
            <Button
              onPress={() => {
                submit && submit();
              }}
              label="Chụp lại"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 44,
    width: 300,

    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: Spacing(5),

    textAlign: 'center',
    fontSize: ScaleSize(17),
    textTransform: 'uppercase',
  },
  content: {
    marginVertical: Spacing(8),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ArlertPopup;
