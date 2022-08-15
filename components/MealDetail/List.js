import { View, Text, StyleSheet } from "react-native";

export const List = ({ data }) => {
  return data.map((dataItem) => (
    <View key={dataItem} style={styles.lisItem}>
      <Text style={styles.textItem}>{dataItem}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  lisItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginVertical: 8,
    backgroundColor: "#e2b497",
  },
  textItem: {
    color: "#351401",
    textAlign: "center",
  },
});
