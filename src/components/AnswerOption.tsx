import { Pressable, StyleSheet, Text, View } from "react-native";

type AnswerOptionProps = {
  option: string;
  isSelected?: boolean;
  onPress: (option: string) => void;
};

export default function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerOptionProps) {
  return (
    <Pressable
      onPress={() => onPress(option)}
      style={[
        styles.container,
        isSelected
          ? {
              backgroundColor: "#E1F396",
              borderColor: "#E1F396",
            }
          : {},
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
