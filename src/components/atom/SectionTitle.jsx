import {Text, TouchableOpacity, View} from "react-native";

const SectionTitle = ({title, onPress}) => {
    return (
        <View className={'flex flex-row justify-between mb-2'}>
            <View>
                <Text className={'text-lg font-bold ml-1'}>{title}</Text>
            </View>
            <TouchableOpacity onPress={()=> onPress()}>
                <Text className={'text-main font-bold text-lg'}>More <Text className={'text-xl'}> > </Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionTitle;