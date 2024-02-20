import { Text, Pressable } from "react-native";

export function NavigationButton({
	onPress,
	text,
}: {
	onPress: () => void;
	text?: string;
}) {
	return (
		<Pressable onPress={onPress}>
			<Text>{text}</Text>
		</Pressable>
	);
}
