import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonAdd.style";

export default function ButtonAdd({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>+ New Todo</Text>
    </TouchableOpacity>
  );
}
