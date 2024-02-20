import { View, Text } from "react-native";
import { NavigationButton } from "../NavigationButton";
import TablerIcon from "../icons/TablerIcon";
import { useColorScheme } from "nativewind";

export const Navbar = () => {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<View className="h-16 flex flex-row px-2 justify-between items-center w-full">
			<Text className="text-text"> Daily Scrawl </Text>
			<View className="flex-row gap-x-10 ml-auto">
				<NavigationButton
					icon={<TablerIcon name="help-hexagon" size={30} color="black" />}
					onPress={() => console.log("clicked")}
				/>
				<Text className="dark:text-red-500">
					{colorScheme === "dark" ? "fsaf" : "safsafas"}
				</Text>
				<NavigationButton
					icon={<TablerIcon name="sun" size={30} color="orange" />}
					onPress={toggleColorScheme}
				/>
			</View>
		</View>
	);
};
