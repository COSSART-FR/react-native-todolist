import { Image, Text, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/check.png";
import { s } from "./CardTodo.style";

export default function CardTodo({ todo, onPress, onLongPress }) {
  return (
    <>
      <TouchableOpacity style={s.card} onPress={() => onPress(todo)} onLongPress={() => onLongPress(todo)}>
        <Text
          style={[
            s.text,
            todo.isCompleted && { textDecorationLine: "line-through" },
          ]}
        >
          {todo.title}
        </Text>
        {todo.isCompleted && <Image style={s.image} source={checkIcon} />}
      </TouchableOpacity>
    </>
  );
}
