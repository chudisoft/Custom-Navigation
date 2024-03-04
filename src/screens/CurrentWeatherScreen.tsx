// CurrentWeatherScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Mapping of weather conditions to icon URLs
const iconUrls = {
  Sunny: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-day-sunny.svg',
  Cloudy: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-cloudy.svg',
  Rainy: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-rain.svg',
  Snowy: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-snow.svg',
  Thunderstorm: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-thunderstorm.svg',
  Windy: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-windy.svg',
  Foggy: 'https://raw.githubusercontent.com/erikflowers/weather-icons/master/svg/wi-fog.svg',
};


// Define your dummy data for the current weather
const currentWeatherData = {
  location: 'Barcelona, Spain',
  temperature: 28,
  weatherCondition: 'Cloudy',
  feelsLike: 32,
  sunset: '20:15',
  hourlyForecast: [
    { time: '12AM', temperature: 26, condition: 'Sunny' },
    { time: '3AM', temperature: 25, condition: 'Cloudy' },
    { time: '6AM', temperature: 22, condition: 'Foggy' },
    { time: '9AM', temperature: 24, condition: 'Sunny' },
    { time: '12PM', temperature: 28, condition: 'Sunny' },
    { time: '3PM', temperature: 30, condition: 'Cloudy' },
    { time: '6PM', temperature: 27, condition: 'Rainy' },
    { time: '9PM', temperature: 24, condition: 'Thunderstorm' },
  ],
};

const CurrentWeatherScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{currentWeatherData.location}</Text>
        <Text style={styles.temperature}>{`${currentWeatherData.temperature}°C`}</Text>
        <Text style={styles.weatherCondition}>{currentWeatherData.weatherCondition}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>Feels like {currentWeatherData.feelsLike}°C</Text>
        <Text style={styles.detailsText}>Sunset: {currentWeatherData.sunset}</Text>
      </View>
      <ScrollView horizontal={false} style={styles.hourlyForecast}
        contentContainerStyle={styles.hourlyForecastContainer}>
        {currentWeatherData.hourlyForecast.map((item, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.time}>{item.time}</Text>
            <Image source={{ uri: iconUrls[item.condition as keyof typeof iconUrls] }} style={styles.icon} />
            <Text style={styles.hourlyTemp}>{`${item.temperature}°C`}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E213A',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  location: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  temperature: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherCondition: {
    fontSize: 24,
    color: '#fff',
  },
  weatherIcon: {
    width: 50, // Set your desired size
    height: 50,
    resizeMode: 'contain', // This ensures the icon scales properly within the Image dimensions
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  detailsText: {
    fontSize: 18,
    color: '#fff',
  },
  hourlyForecast: {
  },
  hourlyForecastContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20, // Or any other value to provide padding on the sides
  },
  forecastItem: {
    backgroundColor: '#A0A0AD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    minWidth: 100,
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  hourlyTemp: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CurrentWeatherScreen;
