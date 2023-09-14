import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="items-center justify-center flex-1 bg-light-default dark:bg-dark-default">
      <View className="flex-row w-full gap-5">
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        <Text selectable={false} className="dark:text-white">
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </Text>
      </View>
    </View>
  );
}
