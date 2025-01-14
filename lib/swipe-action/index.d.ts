import React from 'react';
import { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
declare type SwipeableExcludes = Exclude<keyof PanGestureHandlerProps, 'onGestureEvent' | 'onHandlerStateChange'>;
interface SwipeableProps extends Pick<PanGestureHandlerProps, SwipeableExcludes> {
    enableTrackpadTwoFingerGesture?: boolean;
    friction?: number;
    leftThreshold?: number;
    rightThreshold?: number;
    overshootLeft?: boolean;
    overshootRight?: boolean;
    overshootFriction?: number;
    onSwipeableLeftOpen?: () => void;
    onSwipeableRightOpen?: () => void;
    onSwipeableOpen?: () => void;
    onSwipeableClose?: () => void;
    onSwipeableLeftWillOpen?: () => void;
    onSwipeableRightWillOpen?: () => void;
    onSwipeableWillOpen?: () => void;
    onSwipeableWillClose?: () => void;
    /**
     *
     * This map describes the values to use as inputRange for extra interpolation:
     * AnimatedValue: [startValue, endValue]
     *
     * progressAnimatedValue: [0, 1]
     * dragAnimatedValue: [0, +]
     *
     * To support `rtl` flexbox layouts use `flexDirection` styling.
     * */
    renderLeftActions?: (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode;
    /**
     *
     * This map describes the values to use as inputRange for extra interpolation:
     * AnimatedValue: [startValue, endValue]
     *
     * progressAnimatedValue: [0, 1]
     * dragAnimatedValue: [0, -]
     *
     * To support `rtl` flexbox layouts use `flexDirection` styling.
     * */
    renderRightActions?: (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode;
    useNativeAnimations?: boolean;
    animationOptions?: Record<string, unknown>;
    containerStyle?: StyleProp<ViewStyle>;
    childrenContainerStyle?: StyleProp<ViewStyle>;
}
export interface SwipeActionProps extends SwipeableProps {
    left?: SwipeoutButtonProps[];
    right?: SwipeoutButtonProps[];
    buttonWidth?: number;
}
export interface SwipeoutButtonProps {
    style?: StyleProp<TextStyle>;
    backgroundColor?: string;
    color?: string;
    text?: React.ReactNode;
    disabled?: boolean;
    onPress?(): void;
}
declare class SwipeAction extends React.Component<SwipeActionProps> {
    swipeableRow?: Swipeable;
    render(): JSX.Element;
    updateRef: (ref: Swipeable) => void;
    close: () => void;
    renderActions: (progress: Animated.AnimatedInterpolation, _dragAnimatedValue: Animated.AnimatedInterpolation, isLeft?: boolean) => JSX.Element | null;
}
export default SwipeAction;
