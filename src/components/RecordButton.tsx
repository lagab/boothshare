import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
const RecordButton: FC = () => {
    return(
        <View style={styles.container}>
            <View style={{ ...styles.circle, ...styles.outerCircle }} />
            <View style={{ ...styles.circle, ...styles.innerCircle }} />
        </View>
    );
};
export default RecordButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  circle: {
    position: 'absolute',
  },
  outerCircle: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 9999,
    borderColor: 'white',
    borderWidth: 5,
    opacity: 0.7
  },
  innerCircle: {
    width: '50%',
    height: '50%',
    overflow: 'hidden',
    borderRadius: 9999,
    backgroundColor: 'red',
  },
});
