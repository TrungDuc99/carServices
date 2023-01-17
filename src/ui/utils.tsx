import type { AxiosError } from 'axios';
import { showMessage } from 'react-native-flash-message';

// for onError react queries and mutations
export const showError = (error: AxiosError) => {
  console.log(JSON.stringify(error?.response?.data));
  const description = extractError(error?.response?.data).trimEnd();

  showMessage({
    message: 'Error',
    description,
    type: 'danger',
    duration: 4000,
    icon: 'danger',
  });
};

export const showErrorMessage = (message: string = 'Something went wrong ') => {
  showMessage({
    message,
    type: 'danger',
    duration: 4000,
  });
};

export const extractError = (data: unknown): string => {
  if (typeof data === 'string') {
    return data;
  }
  if (Array.isArray(data)) {
    const messages = data.map((item) => {
      return `  ${extractError(item)}`;
    });

    return `${messages.join('')}`;
  }

  if (typeof data === 'object' && data !== null) {
    const messages = Object.entries(data).map((item) => {
      const [key, value] = item;
      const separator = Array.isArray(value) ? ':\n ' : ': ';

      return `- ${key}${separator}${extractError(value)} \n `;
    });
    return `${messages.join('')} `;
  }
  return 'Something went wrong ';
};
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const colors = [
  '#330000',
  '#330033',
  '#330066',
  '#330099',
  '#3300CC',
  '#3300FF',
  '#660000',
  '#660033',
  '#660066',
  '#660099',
  '#6600CC',
  '#6600FF',
  '#CC0000',
  '#CC0033',
  '#CC0066',
  '#CC0099',
  '#CC00CC',
  '#CC00FF',
  '#FF6600',
  '#FF6633',
  '#FF6666',
  '#FF6699',
  '#FF66CC',
  '#FF66FF',
  '#006600',
  '#006633',
  '#006666',
];
export const generateName = (name: string) => {
  const arrName = name?.trim().toUpperCase().split(' ');
  const nameVisible = arrName
    ? arrName.length === 1
      ? arrName[0][0] === undefined
        ? 'None'
        : arrName[0][0]
      : arrName[0][0] + arrName[arrName.length - 1][0]
    : 'None';
  return nameVisible;
};
export const getColor = (name: string) => {
  name = name ?? 'A';
  const color =
    colors[alpha.lastIndexOf(name[0]?.toLowerCase())] ??
    colors[colors.length - 1];
  return color;
};
