import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import S from './styles';

interface Props {}
interface State {
    todo: any;
    inputValue: string;
}

export default class MainScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todo: [
                {
                    title: 'asdfasdfasd',
                    isDone: false,
                },
            ],
            inputValue: null,
        };
    }

    onDone = (index: number) => {
        const { todo } = this.state;
        console.log(todo);
    };

    onAdd = (value: string) => {
        const { todo } = this.state;
        value &&
            this.setState({
                todo: todo.concat({ title: value, isDone: false }),
                inputValue: null,
            });
    };

    render() {
        const { todo, inputValue } = this.state;
        return (
            <View style={S.ContainerView}>
                <View style={S.HeaderView}>
                    <Text style={S.HeaderText}>TODO</Text>
                </View>
                <View style={S.InputView}>
                    <TextInput style={S.InputBox} value={inputValue} onChangeText={inputValue => this.setState({ inputValue })} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.onAdd(inputValue)}>
                        <Text style={S.InputText}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <View style={S.ContentView}>
                    <FlatList
                        data={todo}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }: any) => (
                            <View style={S.ListView}>
                                <TouchableOpacity onPress={() => this.onDone(index)}>
                                    <Text style={[S.ListText, item.isDone && S.ListDoneText]}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}
