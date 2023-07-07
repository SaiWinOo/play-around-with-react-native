import {TextInput, View} from "react-native";

const Input = ({placeholder, isPassword = false}) => {
    return (
        <View className={'mb-4'}>
            <TextInput placeholder={placeholder} secureTextEntry={isPassword} className={'border border-gray-300 rounded-lg p-3 text-lg'}/>
        </View>
    );
};

export default Input;