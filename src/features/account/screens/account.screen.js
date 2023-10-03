import React from "react";
import { 
    AccountBackground, 
    AccountContainer, 
    AccountCover,
    AuthButton,
    Title,
    AnimationWrapper
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import AnimatedLottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <AnimatedLottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    LOGIN
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        REGISTER
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
}