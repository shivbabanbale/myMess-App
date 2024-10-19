import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import RestaurantPage from './messdetail'; // Make sure this file exists
import MessProfile from './AccountPage';  // Make sure this file exists
import HistoryScreen from './History';    // Make sure this file exists
import NotificationPage from './NotificationPage';
import ChatScreen from './ChatScreen';
import EditProfile from './EditProfile';
import MessOwnerHomeScreen from './MessOwner';
import MessMembers from './MessMember';
import Detail from './detail';
import active_mess from './personal_detail'



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        {/* Register Screen */}
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />

        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        {/* Mess Detail Screen */}
        <Stack.Screen name="MessDetails" component={RestaurantPage} options={{ headerShown: false }} />

        {/* Account/Profile Screen */}
        <Stack.Screen name="Account" component={MessProfile} options={{ headerShown: false }} />

        {/* History Screen */}
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Notifications" component={NotificationPage} />
       <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Edit_Profile" component={EditProfile} />
        <Stack.Screen name="MessOwner" component={MessOwnerHomeScreen} />
        <Stack.Screen name="member" component={MessMembers} />
        <Stack.Screen name="Mess_Details" component={Detail} />
         <Stack.Screen name="active_mess" component={active_mess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
