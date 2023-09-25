import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styled from 'styled-components/native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    flex: 1;
`;

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchContainer>
        <Searchbar placeholder="Search..." />
    </SearchContainer>
    <RestaurantListContainer>
        <TouchableOpacity 
        activeOpacity={0.9}
        >
            <RestaurantInfoCard />
        </TouchableOpacity>
    </RestaurantListContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
