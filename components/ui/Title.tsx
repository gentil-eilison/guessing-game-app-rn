import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
    children: ReactNode
}

export default function Title({ children }: TitleProps) {
    return <Text style={styles.title}>{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "inter_bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12
    }
});