import { View, Text, StyleSheet } from "react-native";

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  styleText,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, styleText]}>{duration}m</Text>
      <Text style={[styles.detailsItem, styleText]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, styleText]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
