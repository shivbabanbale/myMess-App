import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AuthStyles from 'AuthStyles';

const SignUp = () => {
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.title}>Create an account</Text>
      <TextInput
        placeholder="Your name"
        style={AuthStyles.input}
      />
      <TextInput
        placeholder="Your email"
        style={AuthStyles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={AuthStyles.input}
      />
      <TouchableOpacity style={AuthStyles.button}>
        <Text style={AuthStyles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={AuthStyles.button}>
        <Text style={AuthStyles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
