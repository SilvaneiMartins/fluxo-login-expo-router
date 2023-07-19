import { Link } from "expo-router";
import { Text, View } from 'react-native';

import { Button } from "@/components/Button";

export default function Home() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontSize: 44,
          fontWeight: "700"
        }}
      >
        Home
      </Text>

      <Link href="/profile/15" asChild>
        <Button
          title="Configuração"
        />
      </Link>
    </View>
  )
}
