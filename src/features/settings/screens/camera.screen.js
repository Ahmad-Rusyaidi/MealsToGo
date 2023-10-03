import { Camera } from 'expo-camera';
import {  useContext, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styled from 'styled-components/native';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 95%;
`;

export const CameraScreen = ({ navigation }) => {

    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const snap = async () => {
        if(cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    };

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
          <View>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
    }
  
    return (
            <TouchableOpacity
                onPress={snap}
                style={{ backgroundColor: "blue", height:"100%"}}
            >
                <ProfileCamera
                    type={Camera.Constants.Type.back}
                    ref={(camera) => (cameraRef.current = camera)}
                />
                <Text style={{ color:"white", marginLeft: "40%", marginTop:"2%"}}>Take Picture</Text>
            </TouchableOpacity>
    );
  }