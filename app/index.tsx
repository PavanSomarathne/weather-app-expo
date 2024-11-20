import { Image, StyleSheet, View, SafeAreaView, Text } from "react-native";
import LottieView from "lottie-react-native";
import WeatherCard from "@/components/WeatherCard";

// Example weather data
const weatherData = [
  {
    day: "Friday, 1 Nov",
    temperature: 22,
    icon: require("@/assets/icons/sunny.png"),
  },
  {
    day: "Saturday, 2 Nov",
    temperature: 25,
    icon: require("@/assets/icons/sunny.png"),
  },
  {
    day: "Sunday, 3 Nov",
    temperature: 19,
    icon: require("@/assets/icons/sunny.png"),
  },
  {
    day: "Monday, 4 Nov",
    temperature: 20,
    icon: require("@/assets/icons/sunny.png"),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.greetingContainer}>
          <Text style={styles.textGreeting}>Good Morning</Text>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </View>
        <View style={styles.midContainer}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "RubikMedium",
              color: "#494A4B",
            }}
          >
            Tokyo
          </Text>
          <Text
            style={{
              fontSize: 96,
              lineHeight: 96,
              marginBottom: 0,
              fontFamily: "RubikMedium",
              color: "#494A4B",
            }}
          >
            25 °C
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 0,
              fontFamily: "RubikRegular",
              color: "#494A4B",
            }}
          >
            Mostly Sunny
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <View
            style={{
              justifyContent: "center",
              paddingLeft: 10,
              alignItems: "center",
              borderRadius: 100,
              paddingBottom: 10,
              marginTop: 20,
              width: 180,
              height: 180,
            }}
          >
            <LottieView
              autoPlay
              style={{
                width: 150,
                height: 150,
              }}
              source={require("@/assets/images/animation1.json")}
            />
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <WeatherCard weatherData={weatherData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Rubik",
    justifyContent: "space-between",
    backgroundColor: "#E9EEF4",
    paddingTop: 40,
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
    marginHorizontal: 28,
    marginTop: 16,
  },
  midContainer: {
    alignItems: "center",
    marginTop: 36,
  },
  iconContainer: {
    alignItems: "center",
  },
});
