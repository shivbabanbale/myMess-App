import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Sample data for mess history
const messHistory = [
  {
    id: '1',
    name: 'Yadav Mess',
    details: 'Pizza, American, 25-35 min',
    image: 'https://static.toiimg.com/thumb/49183777.cms?width=1200&height=900',
    isActive: true,
    dues: 200,
  },
  {
    id: '2',
    name: 'Singh Mess',
    details: 'Indian, 20-30 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTVH_-eQjBDT2J2qDI0SBj7Nw3Rtclv1U0w&s',
    isActive: false,
    dues: 0,
  },
  {
    id: '3',
    name: 'Khan Mess',
    details: 'Asian, 30-40 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngKhvQutCnAyUyXoxmaVucZNP7crH0tYBnldYNVCxgKJvOvE7L7ru2UUwzJ1UDEyXDr0&usqp=CAU',
    isActive: false,
    dues: 0,
  },
];

const HistoryScreen = ({ navigation }) => {
  const activeMess = messHistory.find(mess => mess.isActive);
  const previousMesses = messHistory.filter(mess => !mess.isActive);

  return (
    <Container>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Active Mess Section */}
      <SectionTitle>Active Messes</SectionTitle>
      {activeMess ? (
        <ActiveMessCard>
          <Image source={{ uri: activeMess.image }} style={styles.messImage} />
          <MessInfo>
            <MessName>{activeMess.name}</MessName>
            <MessDetails>{activeMess.details}</MessDetails>
            <DuesText>Pending Dues: ${activeMess.dues}</DuesText>
            <ViewButton onPress={() => navigation.navigate('active_mess', { messId: activeMess.id })}>
              <ButtonText>View</ButtonText>
            </ViewButton>
          </MessInfo>
        </ActiveMessCard>
      ) : (
        <Text>No active mess available.</Text>
      )}

      {/* Previous Messes Section */}
      <SectionTitle>Previous Messes</SectionTitle>
      <FlatList
        data={previousMesses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MessCard>
            <Image source={{ uri: item.image }} style={styles.messImage} />
            <MessInfo>
              <MessName>{item.name}</MessName>
              <MessDetails>{item.details}</MessDetails>
              <ViewButton onPress={() => navigation.navigate('active_mess', { messId: item.id })}>
                <ButtonText>View</ButtonText>
              </ViewButton>
            </MessInfo>
          </MessCard>
        )}
      />
    </Container>
  );
};

export default HistoryScreen;

// Styled components
const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
  padding: 10px;
`;

const ActiveMessCard = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 5;
  flex-direction: row;
  align-items: center;
`;

const MessCard = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
`;

const MessInfo = styled.View`
  flex: 1;
  padding-left: 15px;
`;

const MessName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const MessDetails = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const DuesText = styled.Text`
  font-size: 14px;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const ViewButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #4caf50;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Styles for image and header
const styles = StyleSheet.create({
  messImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  header: {
    marginBottom: 20,
    padding: 10,
  },
});
