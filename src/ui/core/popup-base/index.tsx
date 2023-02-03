import { CloseCircle, ShieldCross, ShieldTick } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable } from 'react-native';
import { View } from 'react-native-ui-lib';

import { BlurView } from '@react-native-community/blur';
import { TouchableOpacity } from '../touchable-opacity';
import { Colors, ScaleSize, Spacing } from '@/configs';
import { Button } from '../button';
export type BasePopupProps = {
  visible: boolean;
  onCancel?: () => void;
  content?: any;
};
const BasePopup = ({ visible, content, onCancel }: BasePopupProps) => {
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
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              position: 'absolute',
              top: 220,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              // className="justify-center align-middle"
              onPress={() => {
                onCancel && onCancel();
              }}
              style={{
                borderRadius: 1000,
                width: ScaleSize(42),
                height: ScaleSize(42),
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#fff',
                // position: 'absolute',
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                // left: 130,
              }}
            >
              <CloseCircle variant="Bulk" color="#DA202C" size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{content && content}</View>
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
    backgroundColor: 'rgba(0,0,0,0.2)',
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

export default BasePopup;
