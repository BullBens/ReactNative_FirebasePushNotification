import {initialWindowSafeAreaInsets} from 'react-native-safe-area-context';

export const top = initialWindowSafeAreaInsets?.top || 20;
export const bottom = initialWindowSafeAreaInsets?.bottom || 0;
