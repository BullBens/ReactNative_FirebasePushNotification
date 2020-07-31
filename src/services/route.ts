import React from 'react';
import {StackActions} from '@react-navigation/routers';
import {NavigationContainerRef} from '@react-navigation/core';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export function navigate(name: string, params?: any) {
  navigationRef?.current?.navigate(name, params);
}
export function push(name: string, params?: any) {
  navigationRef?.current?.dispatch(StackActions.push(name, params));
}
export function pop() {
  navigationRef?.current?.dispatch(StackActions.pop());
}
export function popToTop() {
  navigationRef?.current?.dispatch(StackActions.popToTop());
}
export function goBack() {
  navigationRef?.current?.goBack();
}
