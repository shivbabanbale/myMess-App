import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  // Correct import

const MessMembers = () => {
    const members = [
        { name: 'Dnyani', dateJoined: 'Aug 12, 2022', image: 'https://media.licdn.com/dms/image/v2/D5603AQHxrueCWAF7XQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718259098544?e=2147483647&v=beta&t=j3QOs7EhZC_-Vf-gGi_NZFIYyqnDxSce2nIoNFj-u4U', status: 'active' },
        { name: 'Mukund', dateJoined: 'Jul 22, 2022', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkigaedeaS-Tcl8qYCwdB-IVtV56zvDwFwbg&s', status: 'inactive' },
        { name: 'Gangu', dateJoined: 'Jul 22, 2022', image: 'https://randomuser.me/api/portraits/women/4.jpg', status: 'active' },
        { name: 'Ganesh', dateJoined: 'Jul 22, 2022', image: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'active' },
        { name: 'Rahul', dateJoined: 'Jul 22, 2022', image: 'image_url', status: 'inactive' }
    ];

    const renderMember = ({ item }) => (
        <TouchableOpacity style={styles.memberContainer}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.memberDetails}>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.joinedDate}>Joined on {item.dateJoined}</Text>
            </View>
            <View style={styles.memberActions}>
                {/* Phone Icon */}
                <FontAwesome name="phone" size={20} color="#4CAF50" />
                {/* Text should be wrapped within <Text> component */}
                <Text>
                    <FontAwesome name={item.status === 'active' ? 'circle' : 'circle-o'} size={12} color={item.status === 'active' ? 'green' : 'red'} style={styles.statusDot} />
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Search bar */}
            <TextInput placeholder="Search members..." style={styles.searchBar} />

            {/* List of members */}
            <FlatList
                data={members}
                renderItem={renderMember}
                keyExtractor={(item) => item.name}
            />

            {/* Floating Action Button (FAB) */}
            <TouchableOpacity style={styles.fab}>
                {/* Icon wrapped in Text */}
                <Text>
                    <FontAwesome name="plus" size={20} color="#fff" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchBar: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
        marginBottom: 20,
    },
    memberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    memberDetails: {
        flex: 1,
        marginLeft: 15,
    },
    memberName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    joinedDate: {
        fontSize: 14,
        color: '#999',
    },
    memberActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        marginLeft: 10,
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#FFA000',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MessMembers;
