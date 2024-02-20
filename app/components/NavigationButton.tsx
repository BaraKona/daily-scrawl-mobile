import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useColorScheme } from "nativewind";

export function NavigationButton({
	onPress,
	icon,
}: {
	onPress: () => void;
	icon?: ReactNode;
}) {
	const { colorScheme } = useColorScheme();

	return (
		<Pressable
			onPress={onPress}
			style={[
				button.container,
				colorScheme === "dark" ? button.dark : button.light,
			]}
		>
			{icon}
		</Pressable>
	);
}

const button = StyleSheet.create({
	container: {
		width: 36,
		height: 36,
		borderRadius: 6,
		padding: 4,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	light: {
		backgroundColor: "#e9e9e9",
	},
	dark: {
		backgroundColor: "#1f1f1f",
	},
});
