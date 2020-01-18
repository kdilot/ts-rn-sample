import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import S from './styles';

interface Props {}
interface State {
    todo: any;
    inputValue: string;
}
interface TodoType {
    title: string;
    isDone: boolean;
}

const MainScreen = () => {
    const [todo, setTodo] = React.useState<TodoType[]>([
        {
            title: 'asdfasdfasd',
            isDone: false,
        },
    ]);
    const [inputValue, setInputValue] = React.useState<string>(null);

    const onAdd = (value: string) => {
        setTodo(todo.concat({ title: value, isDone: false }));
        setInputValue(null);
    };

    return (
        <View style={S.ContainerView}>
            <View style={S.HeaderView}>
                <Text style={S.HeaderText}>TODO</Text>
            </View>
            <View style={S.InputView}>
                <TextInput style={S.InputBox} value={inputValue} onChangeText={inputValue => setInputValue(inputValue)} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => onAdd(inputValue)}>
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
};

export default MainScreen;
