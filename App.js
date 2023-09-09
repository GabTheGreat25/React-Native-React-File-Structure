import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { PokemonCard } from "@/components";
import { PokemonData } from "@/data";
import { appStyles } from "@/styles";

const App = () => (
  <SafeAreaView style={appStyles.container}>
    <ScrollView>
      {PokemonData.map((pokemon, index) => {
        console.log("Pokemon index:", pokemon);
        return <PokemonCard key={index} {...pokemon} />;
      })}
    </ScrollView>
  </SafeAreaView>
);

export default App;
