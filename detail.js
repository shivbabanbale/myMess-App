import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

const MessOwnerUploadPage = () => {
  const [messName, setMessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rent, setRent] = useState('');
  const [guestCharge, setGuestCharge] = useState('');
  const [singleTimeCharge, setSingleTimeCharge] = useState('');
  const [messType, setMessType] = useState('boys');  // boys, girls or both
  const [foodType, setFoodType] = useState({
    veg: false,
    nonVeg: false,
  });
  const [images, setImages] = useState([]);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 5,  // Allow multiple image selection
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Cancelled', 'You cancelled image selection.');
      } else if (response.error) {
        Alert.alert('Error', 'Error while selecting images.');
      } else {
        const selectedImages = response.assets.map(asset => asset.uri);
        setImages([...images, ...selectedImages]);
      }
    });
  };

  const handleSubmit = () => {
    // Submit form logic here
    console.log({ messName, ownerName, rent, guestCharge, singleTimeCharge, messType, foodType, images });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upload Mess Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Mess Name"
        value={messName}
        onChangeText={setMessName}
      />

      <TextInput
        style={styles.input}
        placeholder="Owner Name"
        value={ownerName}
        onChangeText={setOwnerName}
      />

      <TextInput
        style={styles.input}
        placeholder="Mess Rent (₹)"
        keyboardType="numeric"
        value={rent}
        onChangeText={setRent}
      />

      <TextInput
        style={styles.input}
        placeholder="Guest Charge (₹)"
        keyboardType="numeric"
        value={guestCharge}
        onChangeText={setGuestCharge}
      />

      <TextInput
        style={styles.input}
        placeholder="Single Time Charge (₹)"
        keyboardType="numeric"
        value={singleTimeCharge}
        onChangeText={setSingleTimeCharge}
      />

      <Text style={styles.label}>Mess Type</Text>
      <RadioButton.Group onValueChange={newValue => setMessType(newValue)} value={messType}>
        <RadioButton.Item label="Boys" value="boys" />
        <RadioButton.Item label="Girls" value="girls" />
        <RadioButton.Item label="Both" value="both" />
      </RadioButton.Group>

      <Text style={styles.label}>Food Type</Text>
      <Checkbox.Item
        label="Veg"
        status={foodType.veg ? 'checked' : 'unchecked'}
        onPress={() => setFoodType({ ...foodType, veg: !foodType.veg })}
      />
      <Checkbox.Item
        label="Non-Veg"
        status={foodType.nonVeg ? 'checked' : 'unchecked'}
        onPress={() => setFoodType({ ...foodType, nonVeg: !foodType.nonVeg })}
      />

      <Button title="Upload Photos" onPress={pickImage} />
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>

      <Button title="Submit" onPress={handleSubmit} color="#ff6347" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default MessOwnerUploadPage;
