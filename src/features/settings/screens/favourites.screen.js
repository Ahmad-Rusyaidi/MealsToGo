import React, { useContext } from "react"
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";


const FavouritesArea = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
`;

const NoFavouritesArea = styled.SafeAreaView`
    
`;

export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext);


    return favourites.length ? (
        <NoFavouritesArea>
            <RestaurantList
                data={favourites}
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
            />
        </NoFavouritesArea>
    ) : 
    (
        <FavouritesArea>
            <Text center>No Favourites yet</Text>
        </FavouritesArea>
    )
};