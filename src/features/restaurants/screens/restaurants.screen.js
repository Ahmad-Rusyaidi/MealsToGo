import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#0000ff" />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("RestaurantDetail", {
              restaurant: item,
            })
            }>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 14 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
