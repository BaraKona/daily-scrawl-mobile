import { ReactNode } from "react";
import { Text, Pressable } from "react-native";

export function NavigationButton({
	onPress,
	icon,
	className,
}: {
	onPress: () => void;
	icon?: ReactNode;
	className?: string;
}) {
	return (
		<Pressable
			onPress={onPress}
			className={`bg-white border border-border dark:border-red-400 rounded p-2 px-3 ${className}`}
		>
			{icon ? icon : <Text>Bakary</Text>}
		</Pressable>
	);
}
