import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchContainer>
      <Searchbar placeholder="Search..." />
    </SearchContainer>
      <FlatList 
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 14 }}
      />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
