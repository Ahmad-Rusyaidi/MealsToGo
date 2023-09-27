import React from "react";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 110px;
    height: 100px;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {

    const Image = isAndroid ? CompactWebView : CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }}/>
            <Text center variant="caption" numberOfLines={3}>
                { restaurant.name }
            </Text>
        </Item>
    )
}