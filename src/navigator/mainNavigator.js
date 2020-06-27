import React, { useState, useContext, useEffect } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../View/login/loginScreen';
import RegisterScreen from '../View/register/register';
import AppScreen from '../View/APP/appScreen';
import SettingScreen from '../View/settings/settingScreen';
import OnBoarding from '../View/onBoarding/onBoarding';
import Colors from '../config/colors';
import {FirebaseContext} from '../firebase/index';
import CustomDrawer from '../components/customDrawer';

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoard"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Hiffel"
        component={AppScreen}
      />
      <Drawer.Screen
        name="Consultas"        
        component={SettingScreen}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

const mainNavigator = () => {
  const { datosUsuario,usuario } = useContext(FirebaseContext);
  const [isLogged, setIsLogged] = React.useState(null);
  return (
    <NavigationContainer>
      {usuario ?  (<DrawerScreen/>):(<StackScreen/>)}
    </NavigationContainer>
  );
};

export default mainNavigator;
