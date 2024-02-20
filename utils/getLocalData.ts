import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value) {
			return value;
		}
		return null;
	} catch (e) {
		console.error(e);
		return null;
	}
};
