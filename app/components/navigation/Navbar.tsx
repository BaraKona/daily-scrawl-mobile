import { View } from "react-native";
import { NavigationButton } from "../NavigationButton";
import TablerIcon from "../icons/TablerIcon";
import { useColorScheme } from "nativewind";
import { StyleSheet } from "react-native";
import { DailyScrawlIcon } from "../icons/DailyScrawlIcon";

export const Navbar = () => {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<View style={navigation.mainContainer}>
			<View style={[svgDark.container]}>
				<DailyScrawlIcon colorScheme={colorScheme} />
			</View>
			<View style={navigation.container}>
				<NavigationButton
					icon={
						<TablerIcon
							name="help-hexagon"
							size={24}
							color={colorScheme === "dark" ? "#808080" : "#151414"}
						/>
					}
					onPress={() => console.log("clicked")}
				/>
				<NavigationButton
					icon={
						colorScheme === "dark" ? (
							<TablerIcon name="moon-stars" size={24} color="#0ea5e9" />
						) : (
							<TablerIcon name="sun-filled" size={24} color="#d97706" />
						)
					}
					onPress={toggleColorScheme}
				/>
			</View>
		</View>
	);
};

const navigation = StyleSheet.create({
	mainContainer: {
		display: "flex",
		height: 70,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		gap: 10,
	},
	container: {
		height: 70,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		justifyContent: "flex-end",
	},
});

const svgDark = StyleSheet.create({
	container: {
		width: 42,
		height: 42,
		borderRadius: 6,
		padding: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	light: {
		// @ts-ignore
		fill: "#1f1f1f",
	},
	dark: {
		// @ts-ignore
		fill: "#c0c0c0",
	},
});
