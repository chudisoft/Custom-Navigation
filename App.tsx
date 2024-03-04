import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CurrentWeatherScreen from './src/screens/CurrentWeatherScreen';
import WeeklyForecastScreen from './src/screens/WeeklyForecastScreen';

type RootDrawerParamList = {
  CurrentWeather: undefined;
  WeeklyForecast: undefined;
};

type CurrentWeatherScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'CurrentWeather'>;
type WeeklyForecastScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'WeeklyForecast'>;

interface CurrentWeatherScreenProps {
  navigation: CurrentWeatherScreenNavigationProp;
}

interface WeeklyForecastScreenProps {
  navigation: WeeklyForecastScreenNavigationProp;
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="CurrentWeather">
        <Drawer.Screen name="CurrentWeather" 
          component={CurrentWeatherScreen} options={{ title: 'Current Weather' }} />
        <Drawer.Screen name="WeeklyForecast" 
          component={WeeklyForecastScreen} options={{ title: 'Weekly Forecast' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
