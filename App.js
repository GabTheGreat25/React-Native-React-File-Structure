import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View
      className={`items-center justify-center flex-1 ${
        colorScheme === "dark" ? "bg-dark-default" : "bg-light-default"
      }`}
    >
      <View className="flex items-center justify-center w-full gap-5">
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        <Text
          selectable={false}
          className={`${
            colorScheme === "dark" ? "text-light-default" : "text-dark-default"
          }`}
        >
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </Text>
      </View>
    </View>
  );
}
