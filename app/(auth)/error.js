import { View, Text } from "react-native";

const Error = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#ff4d4d" }}>An error occurred. Please try again later.</Text>
        </View>
    );
};

export default Error;
