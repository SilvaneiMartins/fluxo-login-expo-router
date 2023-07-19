import { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
}

export const Button = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {

  return (
    <TouchableOpacity
      ref={ref}
      style={{
        width: 200,
        padding: 16,
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center",
        backgroundColor: "#171717"
      }}
      {...rest}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
})
