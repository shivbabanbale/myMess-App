import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const notifications = [
  { id: '1', name: 'Mess Owners Group', type: 'group', avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQGXtvNCTKnHDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723214368511?e=2147483647&v=beta&t=A_FktcPDkrvFMlgEkVDo1vw1fnIwyMIhdQnQr7L1pA0' },
  { id: '2', name: 'Dnyaneshwar Chimane', type: 'individual', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHxrueCWAF7XQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718259098544?e=2147483647&v=beta&t=j3QOs7EhZC_-Vf-gGi_NZFIYyqnDxSce2nIoNFj-u4U' },
  { id: '3', name: 'Students Feedback', type: 'group', avatar: 'https://media.licdn.com/dms/image/D5603AQF0aeugfkrUlw/profile-displayphoto-shrink_200_200/0/1696344724144?e=2147483647&v=beta&t=cF4Ha6TKi4db0H2--KHIkVeWvl4ALdsaWkfRurXVuEw' },
  { id: '4', name: 'Mess Admin Group', type: 'individual', avatar: 'https://example.com/user2.png' },
];

const NotificationPage = ({ navigation }) => {
  const handleChatOpen = (item) => {
    navigation.navigate('Chat', { name: item.name, type: item.type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.notificationItem, item.type === 'group' ? styles.groupStyle : styles.individualStyle]}
            onPress={() => handleChatOpen(item)}
          >
            <Avatar
              rounded
              size="medium"
              source={{ uri: item.avatar }}
              containerStyle={styles.avatar}
            />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>{item.name}</Text>
              <Icon
                name={item.type === 'group' ? 'people' : 'person'}
                type='material'
                color='#ffffff'
                size={24}
                containerStyle={styles.icon}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0084ff',
    textAlign: 'center',
    marginVertical: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
  },
  groupStyle: {
    backgroundColor: '#ff6b6b',
  },
  individualStyle: {
    backgroundColor: '#51cf66',
  },
  avatar: {
    marginRight: 12,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  notificationText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
  },
  icon: {
    backgroundColor: '#ffffff30',
    borderRadius: 20,
    padding: 6,
  },
});

export default NotificationPage;
