import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    SizeImage: any;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    SizeImage: (size: number) => ({
        width: size,
        height: size,
    }),
});
