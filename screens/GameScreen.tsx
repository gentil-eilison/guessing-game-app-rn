import { 
    View, 
    StyleSheet, 
    Alert, 
    FlatList, 
    useWindowDimensions 
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(
    min: number, max: number, exclude: number
): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
    
}

interface GameScreenProps {
    userNumber: number;
    onGameOver: (numberOfRounds: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(
    { userNumber, onGameOver }: GameScreenProps
) {
    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction: "lower" | "greater") {
        if (
            (direction == "lower" && currentGuess < userNumber) 
            || direction == "greater" && currentGuess > userNumber) {
                Alert.alert(
                    "Don't lie!",
                    "You know that this is wrong...",
                    [{text: "Sorry!", style: "cancel"}]
                );
                return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNum);
        setGuessRounds(
            previousGuessRounds => [newRndNum, ...previousGuessRounds]
        );
    }

    const guessRoundsListLength = guessRounds.length;
    let content = (
        <>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card>
                <InstructionText 
                    style={styles.instructionText}
                >
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={() => nextGuessHandler("lower")}
                        >
                            <FontAwesome5 
                                name="minus-circle" 
                                size={24} 
                                color="white" 
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={() => nextGuessHandler("greater")}
                        >
                            <FontAwesome5 
                                name="plus-circle" 
                                size={24} 
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={() => nextGuessHandler("lower")}
                        >
                            <FontAwesome5 
                                name="minus-circle" 
                                size={24} 
                                color="white" 
                            />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{ currentGuess }</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={() => nextGuessHandler("greater")}
                        >
                            <FontAwesome5 
                                name="plus-circle" 
                                size={24} 
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            { content }
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => 
                        <GuessLogItem 
                            roundNumber={guessRoundsListLength - itemData.index} 
                            guess={itemData.item} 
                        />
                    }
                    keyExtractor={(item) => String(item)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 30,
        alignItems: "center"
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonsContainerWide: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});