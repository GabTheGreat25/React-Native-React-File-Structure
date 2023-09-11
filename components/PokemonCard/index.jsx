import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { PokemonType } from "@utils";
import { createStyles } from "@styles";

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

  return (
    <View
      className={`p-2 m-2 bg-white border-2 rounded-xl`}
      style={styles.card}
    >
      <View className="flex-row justify-between w-full mb-6">
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}
