import * as React from 'react';
import { View, Text } from 'react-native';
import { PinInput } from 'react-native-pins';
import { VirtualKeyboard } from 'react-native-screen-keyboard';
import S from './styles';

const NEW = 1;
const CONFIRM = 2;
const ACCESS = 3;
const EMPTY_ARRAY = new Array(0);

interface Props {
    maxPin?: number;
    maxCount?: number;
    status?: number;
    moveTo?: string;
    retryTimer?: number;
}
interface State {
    pinNumber: string[];
    savedPinNumber: string;
    currentCount: number;
    status: number;
}

export default class PinCodeScreen extends React.Component<Props, State> {
    static defaultProps: Props = {
        maxPin: 6,
        maxCount: 5,
        status: NEW,
        retryTimer: 30000,
    };
    constructor(props: Props) {
        super(props);

        this.state = {
            pinNumber: new Array(0),
            savedPinNumber: null,
            currentCount: 1,
            status: props.status,
        };
    }
    keyboard: any = null;

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        const { maxPin, maxCount, moveTo, retryTimer } = this.props;
        const { savedPinNumber, status, currentCount } = this.state;
        const confirmPinNumber = nextState.pinNumber ? nextState.pinNumber.join('') : null;
        const pinLength = nextState.pinNumber.length;

        if (pinLength === maxPin && status === NEW && !nextState.savedPinNumber) {
            this.setState({
                savedPinNumber: confirmPinNumber,
                status: CONFIRM,
                pinNumber: EMPTY_ARRAY,
            });
            this.blockKeyboard(500);
            return true;
        }
        if (pinLength === maxPin && status === CONFIRM) {
            if (confirmPinNumber === savedPinNumber) {
                this.setState({
                    status: ACCESS,
                    pinNumber: EMPTY_ARRAY,
                });
                this.blockKeyboard(500);
                return true;
            }
            this.setState({
                status: NEW,
                savedPinNumber: null,
                pinNumber: EMPTY_ARRAY,
            });
            this.blockKeyboard(1500, 'WRONG CONFIRM PIN NUMBER');

            return true;
        }
        if (pinLength === maxPin && status === ACCESS) {
            if (confirmPinNumber === savedPinNumber) {
                if (moveTo) {
                    return true;
                }
                this.keyboard.disable();
                this.keyboard.displayMessage('SUCCESS');
                return true;
            }
            this.setState({
                pinNumber: EMPTY_ARRAY,
                currentCount: currentCount + 1,
            });
            maxCount === currentCount ? this.blockKeyboard(retryTimer, 'YOU CAN TRY LATER') : this.blockKeyboard(1500, 'WRONG PIN NUMBER');

            return true;
        }
        return true;
    }

    blockKeyboard = (timer: number, msg: string = null) => {
        this.keyboard.disable();
        msg && this.keyboard.displayMessage(msg);
        setTimeout(() => {
            msg && this.keyboard.clearMessage();
            this.keyboard.enable();
        }, timer);
    };

    onKeyDown = (key: string) => {
        const { pinNumber } = this.state;
        const length = pinNumber.length;
        if (key !== 'custom') {
            this.setState({ pinNumber: key === 'back' ? (length > 0 ? pinNumber.slice(0, length - 1) : EMPTY_ARRAY) : pinNumber.concat(key) });
        }
    };

    render() {
        const { pinNumber, status } = this.state;
        const { maxPin } = this.props;
        return (
            <View style={S.ContainerView}>
                <View style={S.PinView}>
                    <PinInput
                        onRef={(ref: any) => (this.keyboard = ref)}
                        numberOfPins={maxPin}
                        numberOfPinsActive={pinNumber.length | 0}
                        containerStyle={S.PinContainerView}
                        pinStyle={S.PinStyleView}
                        pinActiveStyle={S.PinActiveStyleView}
                    />
                </View>
                <View style={S.TextView}>
                    <Text style={S.PinText}>{status === NEW ? 'New Pincode' : status === CONFIRM ? 'Confirm Pincode' : 'Access Pincode'}</Text>
                </View>
                <View style={S.InputView}>
                    <VirtualKeyboard onRef={(ref: any) => (this.keyboard = ref)} onKeyDown={this.onKeyDown} />
                </View>
            </View>
        );
    }
}
