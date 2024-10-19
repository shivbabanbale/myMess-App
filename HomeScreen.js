import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // for icons like search
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker from react-native-maps

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation prop

  const handleMessClick = (messName, messDetails, messImage) => {
    navigation.navigate('MessDetails', { messName, messDetails, messImage });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color="#4B0082" style={styles.menuIcon} />
        </TouchableOpacity>

        <Text style={styles.logoText}>myMess App</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications" size={25} color="#4B0082" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search mess"
          placeholderTextColor="#ebaf60"
        />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Open Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Nearby</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Fastest Delivery</Text></TouchableOpacity>
      </View>

      {/* ScrollView to enable scrolling */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Map Component */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 12.9716, // Example latitude (Bengaluru)
            longitude: 77.5946, // Example longitude (Bengaluru)
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Example Marker */}
          <Marker coordinate={{ latitude: 12.9716, longitude: 77.5946 }} title={"My Location"} />
        </MapView>

        {/* Suggested Section */}
        <Text style={styles.suggestedTitle}>Nearest For You :)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.messList}>
          <TouchableOpacity onPress={() => handleMessClick('Yadav Mess', 'Pizza, American · 25-35 min', 'https://static.toiimg.com/thumb/49183777.cms?width=1200&height=900')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://static.toiimg.com/thumb/49183777.cms?width=1200&height=900' }} style={styles.messImage} />
              <Text style={styles.messName}>Yadav Mess</Text>
              <Text style={styles.messDetails}>Pizza, American · 25-35 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMessClick('Annapurna Mess', 'Burgers, Fast Food · 20-30 min', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ibBxSFwcUIvxtMe3HzWusXn1dSPmraonHoU3zQ-2GwZN90sq-vyp1-dMf0pZXWWwLu0&usqp=CAU')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ibBxSFwcUIvxtMe3HzWusXn1dSPmraonHoU3zQ-2GwZN90sq-vyp1-dMf0pZXWWwLu0&usqp=CAU' }} style={styles.messImage} />
              <Text style={styles.messName}>Annapurna Mess</Text>
              <Text style={styles.messDetails}>Burgers, Fast Food · 20-30 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMessClick('Ganapure Mess', 'Sushi, Japanese · 30-40 min', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQsztuY1SAkXOpDUXiNIxbM87p-2mfUjEmQ&s')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQsztuY1SAkXOpDUXiNIxbM87p-2mfUjEmQ&s' }} style={styles.messImage} />
              <Text style={styles.messName}>Ganapure Mess</Text>
              <Text style={styles.messDetails}>Sushi, Japanese · 30-40 min</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Budget Friendly Section */}
        <Text style={styles.suggestedTitle}>Budget friendly :)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.messList}>
          <TouchableOpacity onPress={() => handleMessClick('Govind Mess', 'Pizza, American · 25-35 min', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVN8aSxKXyKueb4rqsBQr9VnSZIuF8U-s9tVLhS3A2ZhCvNJksohWHP45C7FIFo1UB0w&usqp=CAU')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVN8aSxKXyKueb4rqsBQr9VnSZIuF8U-s9tVLhS3A2ZhCvNJksohWHP45C7FIFo1UB0w&usqp=CAU' }} style={styles.messImage} />
              <Text style={styles.messName}>Govind Mess</Text>
              <Text style={styles.messDetails}>Pizza, American · 25-35 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMessClick('Chameli Mess', 'Burgers, Fast Food · 20-30 min', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrMjFmJs70FLiu3GYTKw1jgXgPOM6JnfZxg&s')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrMjFmJs70FLiu3GYTKw1jgXgPOM6JnfZxg&s' }} style={styles.messImage} />
              <Text style={styles.messName}>Chameli Mess</Text>
              <Text style={styles.messDetails}>Burgers, Fast Food · 20-30 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMessClick('Sushma Mess', 'Sushi, Japanese · 30-40 min', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Bg2JBxZZHYJCZNoP2rFDGcbSQjnvrt4zBdoEZY-cyFF3n3idkfKBF4Zk2LnBiaphAU4&usqp=CAU')}>
            <View style={styles.messItem}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Bg2JBxZZHYJCZNoP2rFDGcbSQjnvrt4zBdoEZY-cyFF3n3idkfKBF4Zk2LnBiaphAU4&usqp=CAU' }} style={styles.messImage} />
              <Text style={styles.messName}>Sushma Mess</Text>
              <Text style={styles.messDetails}>Sushi, Japanese · 30-40 min</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
       <View style={styles.bottomNav}>
              <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={25} color="blue" />
                <Text style={[styles.navText, { color: 'blue' }]}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
                <Icon name="receipt-outline" size={25} color="blue" />
                <Text style={[styles.navText, { color: 'blue' }]}>History</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Account')}>
                <Icon name="person-outline" size={25} color="blue" />
                <Text style={[styles.navText, { color: 'blue' }]}>Account</Text>
              </TouchableOpacity>
            </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    elevation: 1,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: '#ebaf60',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 100, // Ensures there's space at the bottom
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  suggestedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  messList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  messItem: {
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
  messImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  messName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  messDetails: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute', // Make the bottom nav fixed
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f5f5f5',
    elevation: 5, // Add elevation for shadow
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
  },
});

export default HomeScreen;
