import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { HomeIcon } from "../../Components/Icons/Icons";
import { styled } from "nativewind";
import Screen from "../../Components/Screen/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
    return (
        <Screen>

            <ScrollView className='pt-12'   >
                <Link asChild href="/" className="text-blue-400 text-xl">
                    <StyledPressable className="active:opacity-70">
                        <HomeIcon />
                    </StyledPressable>
                </Link>
                <Text style={{ color: "white" }} className='text-white text-white/90 mb-4'>lorem ipsum dadsadsadolor sit amet</Text>
                <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
                <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
                <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
                <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
                <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>

            </ScrollView>
        </Screen>
    )
}
