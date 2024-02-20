import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { getLocalData } from "../utils/getLocalData";
import { useCallback, useEffect, useState } from "react";
import { storeLocalData } from "../utils/storeLocalData";
import { Navbar } from "./components/navigation/Navbar";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

export default function Page() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [fontsLoaded, fontError] = useFonts({
		"tabler-icons": require("../assets/tabler/tabler-icons.ttf"),
	});

	useEffect(() => {
		const getData = async () => {
			const value = await getLocalData("notification");
			if (!value || value === "false") {
				storeLocalData("notification", "true");
			}
		};
		getData();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View className="dark:bg-background h-full">
			<Navbar />
			<Text className="text-text">Hello!</Text>

			<StatusBar />
		</View>
	);
}
