import { useSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Product() {
  const { id } = useSearchParams() as any;


  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          fontSize: 44,
          fontWeight: "700"
        }}
      >
        Produto: {id}
      </Text>
    </View>
  )
}
