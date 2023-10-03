import React, { useContext} from "react";
import { TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    return(
      <SafeAreaView style={styles.container}>
        <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            </TouchableOpacity>
            <Spacer position="top" size="large">
                <Text variant="label">{user.email}</Text>
            </Spacer>
        </AvatarContainer>
        <List.Section>
            <SettingsItem 
                title="Favourites"
                description="View your favourites"
                left= {(props) => <List.Icon {...props} color="black" icon="heart" />}
                onPress={() => navigation.navigate("Favourites")}
            />
            <SettingsItem 
                title="Logout"
                left= {(props) => <List.Icon {...props} color="black" icon="door" />}
                onPress={onLogout}
            />
        </List.Section>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});