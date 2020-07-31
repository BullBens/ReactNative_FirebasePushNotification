export * from '@react-navigation/stack';
export * from '@react-navigation/core';
export * from '@react-navigation/bottom-tabs/lib/typescript/src/types';
export * from './globalState';

// REQUESTS

export type TGenerateOptions = {
  method: 'POST' | 'GET';
  url: string;
  data?: any;
  params?: any;
};
export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};
