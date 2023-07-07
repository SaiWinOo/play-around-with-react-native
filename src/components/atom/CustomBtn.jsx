import { TouchableOpacity, Text} from "react-native";

const CustomBtn = ({display, tclass, onPress}) => {
    return (
        <TouchableOpacity onPress={()=> onPress()} className={'bg-main p-2.5 rounded-lg ' + tclass}>
            <Text className={'text-md text-white text-center font-semibold '}>{display}</Text>
        </TouchableOpacity>
    );
};

export default CustomBtn;