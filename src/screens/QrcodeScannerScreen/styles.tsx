import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    CameraView: ViewStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CameraView: {
        height: '100%',
    },
});
