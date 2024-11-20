import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import LottieView from "lottie-react-native";
import WeatherCard from "../components/WeatherCard";

// Example weather data
const weatherData = [
  {
    day: "Friday, 1 Nov",
    temperature: 22,
    icon: require("../assets/icons/sunny.png"),
  },
  {
    day: "Saturday, 2 Nov",
    temperature: 25,
    icon: require("../assets/icons/sunny.png"),
  },
  {
    day: "Sunday, 3 Nov",
    temperature: 19,
    icon: require("../assets/icons/sunny.png"),
  },
  {
    day: "Monday, 4 Nov",
    temperature: 20,
    icon: require("../assets/icons/sunny.png"),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.textGreeting}>Good Morning</Text>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </View>

        {/* Weather Info Section */}
        <View style={styles.midContainer}>
          <Text style={styles.location}>Tokyo</Text>
          <Text style={styles.temperature}>25 °C</Text>
          <Text style={styles.weatherCondition}>Mostly Sunny</Text>
        </View>

        {/* Animation Section */}
        <View style={styles.iconContainer}>
          <View style={styles.animationWrapper}>
            <LottieView
              autoPlay
              style={styles.animation}
              source={require("../assets/images/animation1.json")}
            />
          </View>
        </View>

        {/* Weather Card Section */}
        <View>
          <WeatherCard weatherData={weatherData} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#E9EEF4",
    paddingHorizontal: 16,
  },
  textGreeting: {
    fontFamily: "RubikSemiBold",
    fontSize: 16,
    color: "#494A4B",
  },
  date: {
    fontFamily: "RubikRegular",
    fontSize: 12,
    color: "#494A4B",
  },
  greetingContainer: {
    marginTop: 16,
  },
  midContainer: {
    alignItems: "center",
    marginTop: 36,
  },
  location: {
    fontSize: 22,
    fontFamily: "RubikMedium",
    color: "#494A4B",
  },
  temperature: {
    fontSize: 96,
    lineHeight: 96,
    fontFamily: "RubikMedium",
    color: "#494A4B",
  },
  weatherCondition: {
    fontSize: 16,
    fontFamily: "RubikRegular",
    color: "#494A4B",
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  animationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 180,
    height: 180,
    marginTop: 20,
  },
  animation: {
    width: 150,
    height: 150,
  },
});
