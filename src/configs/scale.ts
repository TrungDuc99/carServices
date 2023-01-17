import {Dimensions} from 'react-native';
const sizeWindow = Dimensions.get('window');

const sizeDefault = {
  width: 414,
  height: 896,
};
const ratioDefault = sizeDefault.height / sizeDefault.width;
const ratioCurrent = sizeWindow.height / sizeWindow.width;
const scaleVer = sizeWindow.height / sizeDefault.height;
const scaleHoz = sizeWindow.width / sizeDefault.width;
export const scaleSize = (s: number) => {
  if (ratioCurrent > ratioDefault) {
    return Math.round(s * scaleVer);
  } else {
    return Math.round(s * scaleHoz);
  }
};

export default scaleSize;
