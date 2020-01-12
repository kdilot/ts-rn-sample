import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
    onPress: () => void;
    value: string;
    color?: string;
    icon?: String;
    activeOpacity?: number;
    iconSize?: number;
    iconIsRight?: boolean;
    outline?: boolean;
    radius?: number;
    textStyle?: object;
    conatinerStyle?: object;
}
interface DefaultProps {
    activeOpacity: number;
    value: string;
    radius: number;
    outline: boolean;
    color: string;
    iconSize: number;
    iconIsRight: boolean;
}

interface State {}

interface Styles {
    containerView: ViewStyle;
    textView: ViewStyle;
    iconView: ViewStyle;
}

export default class ButtonComp extends React.PureComponent<Props, State> {
    static defaultProps: DefaultProps = {
        activeOpacity: 0.8,
        value: 'button',
        radius: 3,
        outline: false,
        iconSize: 20,
        iconIsRight: false,
        color: '#337ab7',
    };
    constructor(props: Props) {
        super(props);
    }

    styles = StyleSheet.create<Styles>({
        containerView: {
            padding: this.props.icon && this.props.iconSize ? this.props.iconSize / 2 : 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: !this.props.outline ? this.props.color : 'transparent',
            borderWidth: this.props.outline ? 1 : 0,
            borderColor: this.props.outline ? this.props.color : 'transparent',
            borderRadius: this.props.radius,
        },
        textView: {
            color: this.props.outline ? this.props.color : 'white',
            width: '100%',
            textAlign: 'center',
        },
        iconView: {
            position: 'absolute',
            left: !this.props.iconIsRight ? 10 : 'auto',
            right: this.props.iconIsRight ? 10 : 'auto',
            width: this.props.iconSize,
            height: this.props.iconSize,
            backgroundColor: 'red',
        },
    });

    render() {
        const { activeOpacity, conatinerStyle, textStyle, value, onPress, icon } = this.props;
        return (
            <TouchableOpacity style={[this.styles.containerView, conatinerStyle]} activeOpacity={activeOpacity} onPress={onPress}>
                <Text style={[this.styles.textView, textStyle]}>{value}</Text>
                {icon && <View style={this.styles.iconView} />}
            </TouchableOpacity>
        );
    }
}
