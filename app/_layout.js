import { Pressable, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { CircleInfoIcon } from "../Components/Icons/Icons";
import { Logo } from "../Components/LogoSVG/Logo";
export default function Layout() {
    return (
        <View className="flex-1">
            <Stack screenOptions={{
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitle: "",
                headerLeft: () => <Logo />,
                headerRight: () => (
                    <Link href="/about" asChild>
                        <Pressable>
                            <CircleInfoIcon />
                        </Pressable>
                    </Link>
                )
            }} />
        </View>
    );
}
