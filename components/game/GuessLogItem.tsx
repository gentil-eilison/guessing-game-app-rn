import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface GuessLogItemProps {
    roundNumber: number;
    guess: number;
}

export default function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
    return (
        <View>
            <Text>#{ roundNumber }</Text>
            <Text>Oponent's Guess: { guess }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500
    }
});