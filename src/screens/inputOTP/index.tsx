import { Colors, ScaleSize, Spacing } from '@/configs';
import { signIn } from '@/core';
import { AuthStackParamList } from '@/navigation/auth-navigator';
import { RootStackParamList } from '@/navigation/types';
import { Button, Text, TouchableOpacity } from '@/ui';
import Space from '@/ui/core/space';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Login, Refresh2 } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TextBase,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import { Card, View } from 'react-native-ui-lib';
// import RNOtpVerify from 'react-native-otp-verify';
export type LoginNavigationScreenProp = StackNavigationProp<RootStackParamList>;

export const InputOtp = () => {
  const {
    params: { to, verificationSid, originalPhoneNumber },
  } = useRoute<RouteProp<AuthStackParamList, 'InputOtp'>>();
  // const {to, verificationSid, originalPhoneNumber} = params
  // const [otp, setOtp] = useState<any>();
  const [countdownSencond, setCountdownSencond] = useState<any>(60);
  const [countdownMinute, setCountdownMinute] = useState<any>(1);
  const { navigate } = useNavigation();

  const [message, setMessage] = useState<string | null>(null);
  const [otp, setOtp] = useState<string | undefined>(undefined);
  const [timeoutError, setTimeoutError] = useState<boolean>(false);
  const [hash, setHash] = useState<string[] | null>([]);
  const toast = useToast();

  useEffect(() => {
    if (Platform.OS === 'android') {
    }
  }, []);
  ('QXotUyUIr7K');

  useEffect(() => {
    // if (Platform.OS === 'ios') {
    //   return;
    // } else if (Platform.OS === 'android') {
    //   RNOtpVerify.getHash().then(console.log).catch(console.log);
    //   RNOtpVerify.getOtp()
    //     .then(p => RNOtpVerify.addListener(otpHandler))
    //     .catch(p => console.log);
    //   return () => RNOtpVerify.removeListener();
    // }
  }, []);
  const otpHandler = (message: string) => {
    // const otp = /(\d{6})/g.exec(message)?.[1];
    // setOtp(otp);
    // RNOtpVerify.removeListener();
    // Keyboard.dismiss();
  };

  useEffect(() => {
    setTimeout(() => {
      if (countdownSencond > 0) {
        setCountdownSencond(countdownSencond - 1);
      } else if (countdownSencond === 0 && countdownMinute > 0) {
        setCountdownMinute(countdownMinute - 1);
        setCountdownSencond(60);
      }
    }, 1000);
  }, [countdownSencond]);

  const onSubmit = async (data: any) => {
    if (otp) {
      signIn({ access: 'access-token', refresh: 'refresh-token' });
    } else {
      toast.show(`Số điện thoại không tồn tại trong hệ thống`, {
        type: 'danger',
      });
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View flex paddingH-20 backgroundColor="#fff">
          <KeyboardAvoidingView behavior="position">
            <StatusBar
              barStyle="dark-content"
              backgroundColor={Colors.primaryColor}
            />
            <View
              padding-20
              style={{ marginTop: Spacing(40), alignItems: 'center' }}
              flex
              center
            >
              <View marginT-10>
                <Image
                  source={require('@assets/images/logo.png')}
                  style={{
                    width: ScaleSize(250),
                    height: ScaleSize(60),
                  }}
                />
              </View>
              <View marginT-40>
                <Text variant="md" className="font-medium">
                  Mã xác thực
                </Text>

                <View marginL-5 />
                <View marginT-10 row centerH centerV>
                  <Text
                    variant="lg"
                    className="font-bold"
                    style={{
                      fontSize: ScaleSize(25),
                      marginRight: Spacing(2),
                    }}
                  >
                    {`${countdownMinute > 0 ? countdownMinute : ''}${
                      countdownMinute > 0 ? ':' : ''
                    }${countdownSencond}`}
                  </Text>
                  <TouchableOpacity
                    disabled={
                      countdownMinute === 0 && countdownSencond === 0
                        ? false
                        : true
                    }
                    onPress={() => {
                      setCountdownMinute(1);
                      setCountdownSencond(60);
                    }}
                  >
                    <Refresh2
                      size="20"
                      color={
                        countdownMinute === 0 && countdownSencond === 0
                          ? Colors.primaryColor
                          : '#AEAEAE'
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View center marginT-30 marginB-10>
                <Text variant={'md'}>
                  Mã xác thực OTP được gửi bằng SMS tới số
                </Text>

                <Text variant={'md'} className="font-bold">
                  {originalPhoneNumber}
                </Text>
              </View>
              <View>
                <OTPInputView
                  style={{ height: 100, width: '70%', marginLeft: 3 }}
                  pinCount={4}
                  code={otp}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {
                    setOtp(code);
                  }}
                />
              </View>
              <Space value={5} />
              <View style={{ width: '100%' }}>
                <Button
                  label="Tiếp tục"
                  disabled={otp?.length === 4 ? false : true}
                  onPress={() => {
                    navigate('ForgetPassword');
                    // signIn({
                    //   access: 'access-token',
                    //   refresh: 'refresh-token',
                    // });
                  }}
                  iconLeft={{
                    name: Login,
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 25,
    height: 35,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    fontSize: ScaleSize(60),
    color: '#1975EE',
    width: 50,
    height: 70,
    borderWidth: 0,
    borderBottomWidth: 2,
  },

  underlineStyleHighLighted: {},
});
export default InputOtp;
