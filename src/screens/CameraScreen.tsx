import { Camera, CameraType } from "expo-camera";
import React, { FC ,useEffect, useRef, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Constants from "expo-constants";
import { Repeat2, X, Zap, ZapOff } from "lucide-react-native";
import RecordButton from "../components/RecordButton";

const CameraScreen: FC = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
    const {width} = useWindowDimensions();
    const height = Math.round((width * 16) / 9);

    useEffect(() => {
        (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);
  return (
    <View style={styles.container}>
      <View style={{
          height: height,
          width: '100%',
          borderBlockColor: "white",
          borderRadius: 10,
          overflow: 'hidden'
        }}>
      <Camera
        style={{
          height: height,
          width: '100%',
          borderBlockColor: "white"
        }}
        type={type}
        ref={cameraRef}
        flashMode={flash}
        ratio={"16:9"} 
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <TouchableOpacity onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }} style={styles.button}>
            <X size={ 34 }  color="white"/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() =>
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              )
            } style={styles.button}>
            {flash === Camera.Constants.FlashMode.off && <Zap  size={ 24 }  color="white"/> }   
            {flash === Camera.Constants.FlashMode.on && <ZapOff  size={ 24}  color="white" /> }   
            
          </TouchableOpacity>
          
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            bottom: 20,
            position: 'absolute',
            alignItems: "flex-end",
          }}>

          <TouchableOpacity onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }} style={styles.button}>
            <Repeat2 size={ 32 }  color="white"/>
          </TouchableOpacity>
        </View>
      </Camera>
      </View>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 40,
          }}
        >
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <RecordButton />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#000"
    },
    controls: {
        flex: 0.5,
    },
    button: {
        height: 40,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        color: "red",
        justifyContent: "center",
    },
    topControls: {
        flex: 1,
    },
});
