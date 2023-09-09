import { SafeAreaView, ScrollView } from "react-native";
import { PokemonCard } from "@/components";
import { PokemonData } from "@/data";
import { appStyles } from "@/styles";

const App = () => (
  <SafeAreaView
    className={`flex-1 bg-primary-default ${
      Platform.OS === "android" ? "pt-6" : "pt-0"
    }`}
  >
    <ScrollView>
      {PokemonData.map((pokemon, index) => {
        console.log("Pokemon index:", pokemon);
        return <PokemonCard key={index} {...pokemon} />;
      })}
    </ScrollView>
  </SafeAreaView>
);

export default App;
