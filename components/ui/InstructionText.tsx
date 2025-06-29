import { ReactNode } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
    children: ReactNode;
    style?: StyleProp<TextStyle>;
}

export default function InstructionText({ children, style }: InstructionTextProps) {
    return <Text style={[styles.instructionText, style]}>{ children }</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: "inter_regular"
    }
});