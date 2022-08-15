import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { MealList } from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const idsFavorites = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => idsFavorites.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}> You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
