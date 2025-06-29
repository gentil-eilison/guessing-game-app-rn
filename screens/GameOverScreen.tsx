import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenProps {
    roundsNumber: number;
    userNumber: number;
    onStartNewGame: () => void;
}

export default function GameOverScreen(
    { roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps
) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require("../assets/images/success.png")}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> 
                rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignContent: "center"
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "inter_regular",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: "inter_bold",
        color: Colors.primary500
    }
});