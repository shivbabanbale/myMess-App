// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const RegisterScreen = ({ navigation, isOwner }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic
  };

  return (
    <Container>
      <Heading>{isOwner ? "Mess Owner Register" : "User Register"}</Heading>

      <InputField
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <InputField
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <RegisterButton onPress={handleRegister}>
        <ButtonText>Register</ButtonText>
      </RegisterButton>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <FooterText>Already have an account? Login Here</FooterText>
      </TouchableOpacity>
    </Container>
  );
};

export default RegisterScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 30px;
  color: #4caf50;
  margin-bottom: 20px;
`;

const InputField = styled.TextInput`
  width: 80%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const RegisterButton = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  background-color: #ff6347;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const FooterText = styled.Text`
  color: #4caf50;
  margin-top: 20px;
  text-decoration: underline;
`;
