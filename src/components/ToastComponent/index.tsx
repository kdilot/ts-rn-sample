import * as React from 'react';
import { Text, Dimensions, Animated } from 'react-native';
import styles from './styles';

interface Props {
    ref: React.Ref<any>;
}
interface State {
    animation: Animated.Value;
    message: string;
}

export default class ToastComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: 'Toast Message',
            animation: new Animated.Value(-100),
        };
    }

    showToast = (message: string, timer: number = 1500) => {
        const { animation } = this.state;

        message && this.setState({ message });

        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
        }).start();

        setTimeout(() => {
            this.hideToast();
        }, timer);
    };

    hideToast = () => {
        const { animation } = this.state;
        Animated.timing(animation, {
            toValue: -100,
            duration: 500,
        }).start();
    };

    render() {
        const { animation, message } = this.state;
        return (
            <Animated.View
                style={[
                    styles.ContainerView,
                    {
                        width: Dimensions.get('window').width,
                        bottom: animation,
                    },
                ]}>
                <Text style={styles.MsgText}>{message}</Text>
            </Animated.View>
        );
    }
}
