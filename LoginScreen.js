import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import styled from 'styled-components/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOwner, setIsOwner] = useState(false);  // Toggle between User and Mess Owner
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setErrorMessage(''); // Clear any error message

    if (isOwner) {
      navigation.replace('MessOwner');
    } else {
      navigation.replace('Home');
    }
  };

  const toggleLoginType = () => {
    setIsOwner(!isOwner);  // Switch between user and mess owner login
  };

  return (
    <Container>
      {/* Logo Section */}
      <Image source={require('./mess_logo.png')} style={styles.logo} />
      <Heading>{isOwner ? 'Mess Owner Login' : 'User Login'}</Heading>

      {/* Input Fields */}
      <InputField
        placeholder="Enter Email"
        placeholderTextColor="#B0B0B0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        placeholder="Enter Password"
        placeholderTextColor="#B0B0B0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Error Message */}
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}

      {/* Login Button */}
      <LoginButton onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </LoginButton>

      {/* Registration Links */}
      <TouchableOpacity onPress={() => navigation.navigate('Register', { isOwner })}>
        <FooterText>{isOwner ? 'Mess Owner?' : 'New User?'} Register Here</FooterText>
      </TouchableOpacity>

      {/* Toggle between User and Owner Login */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isOwner && styles.activeButton]}
          onPress={toggleLoginType}
        >
          <Text style={styles.toggleText}>
            {isOwner ? 'Switch to User Login' : 'Switch to Mess Owner Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginScreen;

// Styled components for input fields and buttons
const Container = styled.View`
  flex: 1;
  background-color: #e0f7fa;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 30px;
  color: #00796b;
  margin-bottom: 20px;
  font-weight: bold;
`;

const InputField = styled.TextInput`
  width: 80%;
  padding: 15px;
  border: 1px solid #00796b;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  color: black;
`;

const LoginButton = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  background-color: #00897b;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const FooterText = styled.Text`
  color: #00796b;
  margin-top: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;

// Styles for additional elements
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00796b',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#00796b',
  },
  toggleText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
