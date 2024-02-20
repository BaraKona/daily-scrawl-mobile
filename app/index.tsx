import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { getLocalData } from "../utils/getLocalData";
import { useEffect } from "react";
import { storeLocalData } from "../utils/storeLocalData";
import { NavigationButton } from "./components/NavigationButton";

export default function Page() {
	useEffect(() => {
		const getData = async () => {
			const value = await getLocalData("notification");
			if (!value) {
				storeLocalData("notification", "true");
			}
		};
		getData();
	}, []);

	return (
		<View className="bg-background h-full">
			<Text className="text-text">Hello!</Text>
			<NavigationButton text="hi" onPress={() => console.log("clicked")} />
			<StatusBar />
		</View>
	);
}
