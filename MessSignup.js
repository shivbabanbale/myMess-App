import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MessStyles from 'MessStyles';

const MessSignup = () => {
  return (
    <View style={MessStyles.container}>
      <Text style={MessStyles.title}>Sign up for Mess</Text>
      <TextInput placeholder="Name" style={MessStyles.input} />
      <TextInput placeholder="City" style={MessStyles.input} />
      <TextInput placeholder="State" style={MessStyles.input} />
      <TextInput placeholder="Zip code" style={MessStyles.input} />
      <TextInput placeholder="Number of employees" style={MessStyles.input} />
      <TextInput placeholder="Monthly budget" style={MessStyles.input} />
      <TouchableOpacity style={MessStyles.button}>
        <Text style={MessStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessSignup;
