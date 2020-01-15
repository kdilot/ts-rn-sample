import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
    title: string;
    msg: string;
}
interface DefaultProps {
    title: string;
    msg: string;
}

export default class AlertComponent extends React.PureComponent<Props> {
    static defaultProps: DefaultProps = {
        title: 'Title',
        msg: 'Alert Message',
    };
    render() {
        const { title, msg } = this.props;
        return (
            <>
                <BackgroundView />
                <ContainerView>
                    <ContainerTitleText>{title}</ContainerTitleText>
                    <ContainerText>{msg}</ContainerText>
                </ContainerView>
            </>
        );
    }
}

const BackgroundView = styled(View)`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
`;
const ContainerView = styled(View)`
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: 15%;
    right: 15%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: white;
`;
const ContainerTitleText = styled(Text)`
    font-size: 15px;
    padding: 5px;
    font-weight: bold;
`;
const ContainerText = styled(Text)`
    font-size: 15px;
    padding: 5px 20px;
`;
