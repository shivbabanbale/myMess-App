import React from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'; // For styled cards
import { useNavigation } from '@react-navigation/native';
const MessOwnerHomeScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, in myMess</Text>
      </View>
 <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Mess_Details')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1599/1599838.png' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Fill Mess Detail</Text>
          </View>
        </TouchableOpacity>
      </Card>
      {/* Joins Members Profiles */}
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('member')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://peiacl.org/wp-content/uploads/2014/04/membership.jpg' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Joined Members Profiles</Text>
          </View>
        </TouchableOpacity>
      </Card>

      {/* Pending Due Analytics */}
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('DueAnalytics')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSfBqNmXLczVoRvES5TNUDMAol4HHLBK9pQ&s' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Pending Due Analytics</Text>
          </View>
        </TouchableOpacity>
      </Card>

      {/* Upload Photo Section */}
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0=' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Upload Mess Photos</Text>
          </View>
        </TouchableOpacity>
      </Card>

      {/* Notifications */}
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewylRtfooM9c8gAU5S6lDtCy4IkioVA4XymCC2iQBFRUqt8uB8k78Z5g94MR_3YG8T7M&usqp=CAU' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Check Notifications</Text>
          </View>
        </TouchableOpacity>
      </Card>

      {/* Send Notifications */}
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('SendNotifications')}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://pushalert.co/blog/wp-content/uploads/2016/12/email-push.png' }}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Send Notifications</Text>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.card}>
              <TouchableOpacity onPress={() => navigation.navigate('SendNotifications')}>
                <View style={styles.cardContent}>
                  <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnCOcxWMX-pEh43xpvmUScnV1SeMxI3vd_g&s' }}
                    style={styles.icon}
                  />
                  <Text style={styles.cardText}>Attendance</Text>
                </View>
              </TouchableOpacity>
            </Card>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
};

export default MessOwnerHomeScreen;