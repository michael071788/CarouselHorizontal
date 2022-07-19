import "./ignoreWarnings.js";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { scrollInterpolator, animatedStyles } from "./src/utils/animations";
// import styles from "./src/styles/index.style";
const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const slideHeight = viewportHeight * 0.77;
const slideWidth = wp(86);
const itemHorizontalMargin = wp(3);
const itemVerticalMargin = wp(5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const DATA = [];
for (let i = 0; i < 4; i++) {
  DATA.push(i);
}

const _renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.slideInner}>
        <Text>{`Item ${item}`}</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e0e0e0",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <View style={{ height: wp(35), backgroundColor: "#fa6b6b" }} />
      <View
        style={{
          flex: 3,
          backgroundColor: "#f78d8d",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel
          // ref={(c) => (this.carousel = c)}
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={slideHeight}
          itemWidth={itemWidth}
          itemHeight={slideHeight}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          // onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
          vertical={true}
        />
      </View>
      <View style={{ height: wp(20), backgroundColor: "#fa6b6b" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 1,
  },
  slide: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingVertical: itemVerticalMargin,
    backgroundColor: "dodgerblue",
  },
  slideInner: { flex: 1, backgroundColor: "#6e7cf5" },
});
