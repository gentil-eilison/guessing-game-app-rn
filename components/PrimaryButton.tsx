import { ReactNode } from "react";
import { Text, View } from "react-native";

interface PrimaryButtonProps {
    children: ReactNode
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
    return (
        <View>
            <Text>{ children }</Text>
        </View>
    );
}