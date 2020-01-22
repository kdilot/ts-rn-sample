import * as React from 'react';
import { View, Image } from 'react-native';
import Icon from './Icon';
import S from './styles';

interface Props {
    size?: number;
    style?: object;
    iconStyle?: object;
    name?: string;
}

export default class IconComponent extends React.PureComponent<any> {
    static defaultProps: Props = {
        size: 50,
        name: 'user',
    };
    constructor(props: any) {
        super(props);
    }

    render() {
        const { size, iconStyle, style, name } = this.props;
        return (
            <View style={style}>
                <Image source={Icon[name]} style={[S.SizeImage(size), iconStyle]} />
            </View>
        );
    }
}
