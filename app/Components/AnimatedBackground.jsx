import React, { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";


const RainbowBackground = () => {
  
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 12000 }), 
      -1, 
      false 
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
  
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
      ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"]
    );

    return { backgroundColor };
  });

  return <Animated.View style={[styles.background, animatedStyle]} />;
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default RainbowBackground;
