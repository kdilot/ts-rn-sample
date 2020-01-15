import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';

const HEIHGT = Dimensions.get('window').height;

interface Props {
    children: React.ReactNode;
    ref: React.Ref<View>;
}

interface State {
    isCloseable: boolean;
    isClose: boolean;
    title: string;
    content: string;
}

export default class PopupComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isCloseable: true,
            isClose: true,
            title: 'Title',
            content: 'Message...',
        };
    }

    closePopup = () => {
        this.setState({ isClose: true });
    };

    showPopup = (title: string, content: string) => {
        this.setState({ isClose: false });
        if (title && content) {
            this.setState({ title, content });
        }
    };

    onlyShowPopup = (title: string, content: string) => {
        this.setState({ isClose: false, isCloseable: false });
        if (title && content) {
            this.setState({ title, content });
        }
    };

    render() {
        const { children } = this.props;
        const { isClose, isCloseable, title, content } = this.state;
        return (
            <View style={styles.container}>
                <View style={[styles.backgroundLayout, isClose && { top: HEIHGT }]}>
                    {isCloseable && (
                        <TouchableOpacity style={styles.closeLayout} activeOpacity={1} onPress={this.closePopup}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                    )}
                    <View style={styles.msgLayout}>
                        <View style={styles.msgHeaderLayout}>
                            <Text style={styles.msgHeaderText}>{title}</Text>
                        </View>
                        <View style={styles.msgContentLayout}>
                            <Text>{content}</Text>
                        </View>
                    </View>
                </View>
                {children}
            </View>
        );
    }
}
