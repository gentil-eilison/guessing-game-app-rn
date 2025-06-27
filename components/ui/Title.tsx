import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface TitleProps {
    children: ReactNode
}

export default function Title({ children }: TitleProps) {
    return <Text style={styles.title}>{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12
    }
});