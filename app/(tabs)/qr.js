import { Link } from "expo-router";
import { Button, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeIcon } from "../../Components/Icons/Icons";
import { styled } from "nativewind";
import Screen from "../../Components/Screen/Screen";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from "react";

const StyledPressable = styled(Pressable);

export default function About() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [camera, setCamera] = useState(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.8, base64: true }; // Adjust quality and format as needed
            console.log(camera, 'camera')
            // const data = await camera.takePhotoAsync(options);
            // console.log('Photo data:', data); // You can use this data to display or save the photo
            // Handle the photo data, e.g., display it in an image component, save it to storage
        }
    };

    return (
        <View style={styles.container}>
            <CameraView ref={setCamera} style={styles.camera} facing={facing} barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.text}>Take Photo</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});