import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "../components/IconButton";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const id = route.params.id;
  const selectedMealItem = MEALS.find((item) => item.id === id);

  const mealIsFavorite = favoriteMealIds.includes(id);

  const changeFavoriteStausHandler = () => {
    dispatch(mealIsFavorite ? removeFavorite({ id }) : addFavorite({ id }));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStausHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStausHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMealItem.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMealItem.title}</Text>
      <MealDetails
        duration={selectedMealItem.duration}
        complexity={selectedMealItem.complexity}
        affordability={selectedMealItem.affordability}
        styleText={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMealItem.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMealItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
