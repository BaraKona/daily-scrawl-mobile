import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { getLocalData } from "../utils/getLocalData";
import { useCallback, useEffect } from "react";
import { storeLocalData } from "../utils/storeLocalData";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useColorScheme } from "nativewind";

export default function Page() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

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
		<View
			style={
				colorScheme === "dark" ? darkStyle.container : lightStyle.container
			}
		>
			<Text style={colorScheme === "dark" ? darkStyle.text : lightStyle.text}>
				Hello!
			</Text>
			<StatusBar />
		</View>
	);
}

export const lightStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
		color: "#151414",
	},
	text: {
		color: "#151414",
	},
});

export const darkStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#151414",
	},
	text: {
		color: "#808080",
	},
});
