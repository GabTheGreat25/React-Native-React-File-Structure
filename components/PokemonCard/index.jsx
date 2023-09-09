import React from "react";
import { View, Text, Image } from "react-native";
import { PokemonType } from "../../utils";
import { componentStyles } from "../../styles";

export default function ({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = PokemonType(type);

  return (
    <View style={componentStyles.card}>
      <View style={componentStyles.nameContainer}>
        <Text style={componentStyles.name}>{name}</Text>
        <Text style={componentStyles.hp}>❤️HP: {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={componentStyles.image}
        resizeMode="contain"
      />

      <View style={componentStyles.typeContainer}>
        <View style={[componentStyles.badge, { borderColor }]}>
          <Text style={componentStyles.typeEmoji}>{emoji}</Text>
          <Text style={componentStyles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={componentStyles.movesContainer}>
        <Text style={componentStyles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={componentStyles.weaknessContainer}>
        <Text style={componentStyles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}
