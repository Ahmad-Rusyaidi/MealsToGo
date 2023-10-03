import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurant-list.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [ isToggled, setIsToggled ] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#0000ff" />
        </LoadingContainer>
      )}
      <Search
      isFavouritesToggled={isToggled}
      onFavouritesToggled={() => setIsToggled(!isToggled)} 
      />
      {isToggled && (<FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />)}
        <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("RestaurantDetail", {
              restaurant: item,
            })
            }>
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
                
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
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
