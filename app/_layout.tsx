import { View, StyleSheet } from "react-native";
import { useColorScheme } from "nativewind";
import { Slot } from "expo-router";
import { Navbar } from "./components/navigation/Navbar";

export default function HomeLayout() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<View
			style={[main.container, colorScheme === "dark" ? main.dark : main.light]}
		>
			<Navbar />
			<Slot />
		</View>
	);
}

export const main = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	light: {
		backgroundColor: "#f0f0f0",
		color: "#151414",
	},
	dark: {
		backgroundColor: "#151414",
		color: "#808080",
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
