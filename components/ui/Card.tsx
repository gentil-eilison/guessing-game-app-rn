import { ReactNode } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

interface CardProps {
    children: ReactNode
}

export default function Card({ children }: CardProps) {
    return <View style={styles.card}>{ children }</View>
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Only works on Android
        // Adding shadow for iOS
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
});