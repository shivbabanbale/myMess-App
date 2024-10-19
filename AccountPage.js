import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MessProfile = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleEditProfile = () => {
        setModalVisible(false);
        navigation.navigate('EditProfile'); // Change this to your EditProfile screen name
    };

    return (
        <ScrollView style={styles.container}>
            {/* Profile Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Icon name="settings-outline" size={25} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Options Drawer */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Settings</Text>
                        <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate('Edit_Profile')}>
                            <Text>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} onPress={() => { /* Add delete account functionality here */ }}>
                            <Text>Delete Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} onPress={() => { /* Add My Activities functionality here */ }}>
                            <Text>My Activities</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} onPress={() => { /* Add Payments functionality here */ }}>
                            <Text>Payments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Mess Image and Info */}
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY6S1PGBmfU1r44y5k3YwM-vuXyHw3rirkg&s' }}
                    style={styles.profileImage}
                />
                <Text style={styles.messName}>Shivba Banbale</Text>
                <Text style={styles.messDetails}>Delicious Indian cuisine</Text>
            </View>

            {/* Mess Status */}
            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusItem}>
                    <Icon name="location-outline" size={20} color="#000" />
                    <Text style={styles.statusText}>at.post. Kolhapur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statusItem}>
                    <Icon name="heart-outline" size={20} color="#000" />
                    <Text style={styles.statusText}>Popular choice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statusItem}>
                    <Icon name="briefcase-outline" size={20} color="#000" />
                    <Text style={styles.statusText}>Joining date: 01/01/2000</Text>
                </TouchableOpacity>
            </View>

            {/* Friends Section */}
            <View style={styles.friendsSection}>
                <Text style={styles.friendsTitle}>Friends</Text>
                <View style={styles.friendsList}>
                    <Image source={{ uri: 'https://media.licdn.com/dms/image/v2/D5635AQFSVutBTFto6Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1719442622273?e=1729054800&v=beta&t=3Xis4JwaLOfNVETN3SZY2jWACHVWwyrHhTezEjejVKs' }} style={styles.friendImage} />
                    <Image source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHLRiJXmx16gA/profile-displayphoto-shrink_200_200/0/1713795540181?e=2147483647&v=beta&t=a7Ev9q5SC4LHUicz-b6BIHt0c_Q78hjjsBXZoii4DDo' }} style={styles.friendImage} />
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkigaedeaS-Tcl8qYCwdB-IVtV56zvDwFwbg&s' }} style={styles.friendImage} />
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/4.jpg' }} style={styles.friendImage} />
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }} style={styles.friendImage} />
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/6.jpg' }} style={styles.friendImage} />
                </View>
            </View>

            {/* Log Out and Membership Info */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.membershipInfo}>
                <Text>Membership points: 1200</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    iconButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    profileInfo: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    messName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    messDetails: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
    statusContainer: {
        paddingHorizontal: 20,
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    statusText: {
        fontSize: 16,
        marginLeft: 10,
    },
    friendsSection: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    friendsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    friendsList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    friendImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    logoutButton: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 16,
        color: '#000',
    },
    membershipInfo: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    closeText: {
        color: '#007BFF',
    },
});

export default MessProfile;
