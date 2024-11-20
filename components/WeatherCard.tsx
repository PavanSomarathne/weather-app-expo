import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ weatherData }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Next days</Text>
      {weatherData.map((item, index) => (
        <View key={index} style={styles.card}>
          {/* Weather Icon */}
          <Image source={item.icon} style={styles.icon} />

          {/* Day and Temperature */}
          <View style={styles.textContainer}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.temperature}>{item.temperature}°</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
  title: {
    fontSize: 12,
    fontFamily: 'RubikRegular',
    color: '#8E8E8E',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
  },
  day: {
    fontSize: 14,
    fontFamily: 'RubikRegular',
    color: '#8E8E8E',
  },
  temperature: {
    fontSize: 20,
    fontFamily: 'RubikMedium',
    color: '#494A4B',
  },
});

export default WeatherCard;
