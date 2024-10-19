import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
    const [name, setName] = useState('Shivba Banbale');
    const [address, setAddress] = useState('Kolhapur, Maharashtra');
    const [photo, setPhoto] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY6S1PGBmfU1r44y5k3YwM-vuXyHw3rirkg&s');

    const handleSave = () => {
        // Handle the save functionality here
        // For example, you can call an API to update the user's profile
        console.log('Profile updated:', { name, address, photo });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.headerTitle}>Edit Profile</Text>
            </View>

            <View style={styles.profileInfo}>
                <Image source={{ uri: photo }} style={styles.profileImage} />
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Enter your address"
                />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    saveText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditProfile;
