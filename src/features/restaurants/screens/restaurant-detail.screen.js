import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaView, StyleSheet} from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExtended] = useState(false);
  const [lunchExpanded, setLunchExtended] = useState(false);
  const [dinnerExpanded, setDinnerExtended] = useState(false);
  const [drinksExpanded, setDrinksExtended] = useState(false);
  const { restaurant } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice"/>}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExtended(!breakfastExpanded)}
        >
          <List.Item title="Egg Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger"/>}
        expanded={lunchExpanded}
        onPress={() => setLunchExtended(!lunchExpanded)}
        >
          <List.Item title="Spagethi Bolognese" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant"/>}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExtended(!dinnerExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup"/>}
        expanded={drinksExpanded}
        onPress={() => setDrinksExtended(!drinksExpanded)}
        >
          <List.Item title="Rum" />
          <List.Item title="Sparkling Juice" />
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
          <List.Item title="Rum" />
          <List.Item title="Orange Juice" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
