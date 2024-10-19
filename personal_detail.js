import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Avatar, Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ActiveMessScreen = () => {
  const [markedDates, setMarkedDates] = useState({
    '2024-10-10': { marked: true, dotColor: 'red' },
    '2024-10-12': { marked: true, dotColor: 'green' },
    '2024-10-13': { marked: true, dotColor: 'green' },
  });

  const navigation = useNavigation(); // Navigation prop

  const handleClearDue = () => {
    Alert.alert('Clear Due', 'Are you sure you want to clear the pending due?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', onPress: () => console.log('Due Cleared!') },
    ]);
  };

  const handleLeaveApplication = () => {
    Alert.alert('Leave Application', 'Submit a leave application?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Submit', onPress: () => console.log('Leave Applied!') },
    ]);
  };

  const handleExitMess = () => {
    Alert.alert('Exit Mess', 'Are you sure you want to exit the mess?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Exit', onPress: () => console.log('Exited Mess!') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* User Profile */}
      <View style={styles.profileSection}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY6S1PGBmfU1r44y5k3YwM-vuXyHw3rirkg&s',
          }}
        />
        <Text style={styles.userName}>Shivba Banbale</Text>
        <Text style={styles.userDetails}>Joined: 01 Oct 2024</Text>
        <Text style={styles.userDetails}>Pending Due: $200</Text>
      </View>

      {/* Calendar for Attendance */}
      <Text style={styles.sectionTitle}>Attendance Calendar</Text>
      <Calendar
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#4B0082',
          todayTextColor: '#ff6347',
          arrowColor: '#4B0082',
        }}
      />

      {/* Clear Due Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClearDue}>
          <Text style={styles.buttonText}>Clear Due</Text>
        </TouchableOpacity>
      </View>

      {/* Leave Application */}
      <View style={styles.listItemContainer}>
        <ListItem bottomDivider>
          <Icon name="paper-plane-outline" size={25} color="#1e90ff" />
          <ListItem.Content>
            <ListItem.Title>Leave Application</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={handleLeaveApplication} />
        </ListItem>

        {/* Exit Mess */}
        <ListItem bottomDivider>
          <Icon name="exit-outline" size={25} color="#ff4500" />
          <ListItem.Content>
            <ListItem.Title>Exit Mess</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={handleExitMess} />
        </ListItem>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4B0082',
  },
  userDetails: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemContainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
});

export default ActiveMessScreen;
