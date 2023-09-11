import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { PokemonType } from "@utils";
import { createStyles } from "@styles";
import { styled } from "nativewind";

export default function MyComponent({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = PokemonType(type);
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const styles = createStyles({ windowHeight, windowWidth });
  const StyledText = styled(Text, "text-xl font-bold");

  return (
    <View
      className={`p-2 m-2 bg-white border-2 rounded-xl`}
      style={styles.card}
    >
      <View className="flex-row justify-between w-full mb-6">
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-xl">❤️ HP: {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        className="w-full h-48 mb-4"
        resizeMode="contain"
      />

      <View className="flex-row items-center justify-center mb-7">
        <View
          className="flex-row items-center px-6 py-2 border-4 rounded-2xl"
          style={{ borderColor }}
        >
          <Text className="mr-3 text-2xl">{emoji}</Text>
          <StyledText>{type}</StyledText>
        </View>
      </View>

      <View className="mb-2">
        <StyledText>Moves: {moves.join(", ")}</StyledText>
      </View>

      <View className="mb-2">
        <Text
          className={`font-bold ${
            windowHeight > 100 && windowWidth > 100 ? "text-xl" : "text-base"
          }`}
        >
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}
