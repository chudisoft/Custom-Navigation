// WeeklyForecastScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Define your dummy data directly within the component
const dummyForecastData = [
  { day: 'Monday', minTemp: 19, maxTemp: 26, chanceOfRain: 55, icon: 'cloud' },
  { day: 'Tuesday', minTemp: 15, maxTemp: 24, chanceOfRain: 10, icon: 'sun' },
  // ... other days
];

const WeeklyForecastScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>7-Day Weather Forecast</Text>
      {dummyForecastData.map((item, index) => (
        <View key={index} style={styles.forecastRow}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.temp}>{`${item.minTemp}°C - ${item.maxTemp}°C`}</Text>
          <Text style={styles.chanceOfRain}>{`Chance of rain: ${item.chanceOfRain}%`}</Text>
          {/* Here you would render the icon based on item.icon */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color: '#fefefe',
  },
  forecastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  day: {
    fontSize: 18,
    color: '#FBC9D5',
  },
  temp: {
    fontSize: 18,
    color: '#000',
  },
  chanceOfRain: {
    fontSize: 18,
    color: '#fefefe',
  },
  // Add styles for icons and other elements as needed
});

export default WeeklyForecastScreen;
