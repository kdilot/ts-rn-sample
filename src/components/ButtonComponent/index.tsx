import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextStyle } from 'react-native';

interface Props {
    onPress: () => void;
    value: string;
    color?: string;
    icon?: String;
    activeOpacity?: number;
    iconSize?: number;
    iconIsRight?: boolean;
    outline?: boolean;
    disabled?: boolean;
    radius?: number;
    textStyle?: object;
    conatinerStyle?: object;
}
interface DefaultProps {
    activeOpacity: number;
    value: string;
    radius: number;
    outline: boolean;
    disabled: boolean;
    color: string;
    iconSize: number;
    iconIsRight: boolean;
}

interface State {}

interface Styles {
    containerView: any;
    containerIconView: any;
    outlineView: any;
    outlineTextView: any;
    disabledView: any;
    textView: TextStyle;
    disabledTextView: any;
    iconView: any;
}

export default class ButtonComponent extends React.PureComponent<Props, State> {
    static defaultProps: DefaultProps = {
        activeOpacity: 0.8,
        value: 'button',
        radius: 3,
        outline: false,
        disabled: false,
        iconSize: 20,
        iconIsRight: false,
        color: '#337ab7',
    };
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { activeOpacity, color, radius, conatinerStyle, outline, textStyle, value, onPress, icon, disabled, iconIsRight, iconSize } = this.props;
        return (
            <TouchableOpacity
                style={[
                    styles.containerView(color, radius),
                    icon && styles.containerIconView(iconSize),
                    outline && styles.outlineView(color),
                    disabled && styles.disabledView(outline),
                    conatinerStyle,
                ]}
                activeOpacity={activeOpacity}
                disabled={disabled}
                onPress={onPress}>
                <Text style={[styles.textView, outline && styles.outlineTextView(color), disabled && styles.disabledTextView(outline), textStyle]}>{value}</Text>
                {icon && <View style={styles.iconView(iconIsRight, iconSize)} />}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create<Styles>({
    containerView: (color: string, radius: number) => ({
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: radius,
    }),
    containerIconView: (iconSize: number) => ({
        padding: iconSize / 2,
    }),
    outlineView: (color: number) => ({
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: color,
    }),
    outlineTextView: (color: number) => ({
        color: color,
    }),
    textView: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
    },
    iconView: (iconIsRight: boolean, iconSize: number) => ({
        position: 'absolute',
        left: !iconIsRight ? 10 : 'auto',
        right: iconIsRight ? 10 : 'auto',
        width: iconSize,
        height: iconSize,
        backgroundColor: 'red',
    }),
    disabledView: (outline: boolean) => ({
        backgroundColor: !outline ? 'gray' : 'transparent',
        borderColor: outline ? 'gray' : 'transparent',
    }),
    disabledTextView: (outline: boolean) => ({
        color: outline ? 'gray' : 'white',
    }),
});
