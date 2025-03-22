import { View } from "react-native";
import { router } from "expo-router";

import { Welcome } from "@/componets/welcome";
import { Steps } from "@/componets/steps";
import { Button } from "@/componets/button";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}