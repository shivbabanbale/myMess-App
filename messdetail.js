import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MessDetailPage = () => {
    const photos = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlPzWV6FkWSOoRgVFh5YYKPdzRKt281usPw&s',
        'https://content.jdmagicbox.com/comp/kolhapur/t6/0231px231.x231.160526150242.q1t6/catalogue/hotel-jaihind-kolhapur-d6aglrs5bh.jpg?clr=#333333',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTli8BK1_FeBT6wwy81569EuFGZVKwCs7iNFh34OYQWiBKrkOTBU61mZjRbqoZ-XRZI1Q&usqp=CAU',
        // Add your photo URLs here
    ];
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* Back button and Share */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>
                <Icon name="share" size={30} color="#000" />
            </View>

            {/* Mess Info */}
            <View style={styles.infoSection}>
                <Image
                    source={{ uri: 'https://example.com/mess.jpg' }}
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.messName}>Yadav Mess</Text>
                    <Text style={styles.cuisine}>Vegetarian · 2.5 mi away</Text>
                </View>
                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
            </View>

            {/* Rating and Reviews */}
            <View style={styles.ratingSection}>
                <Text style={styles.ratingText}>4.8</Text>
                <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    startingValue={4.8}
                    style={styles.starRating}
                />
                <Text style={styles.reviewCount}>300 reviews</Text>
            </View>

            {/* Photos */}
            <View style={styles.photosSection}>
                {photos.map((photo, index) => (
                    <Image key={index} source={{ uri: photo }} style={styles.photo} />
                ))}
            </View>

            {/* Contact Information Section */}
            <View style={styles.contactSection}>
                <Text style={styles.contactTitle}>Contact Information</Text>

                <View style={styles.contactItem}>
                    <FontAwesome name="map-marker" size={24} color="#f4a261" />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>Address</Text>
                        <Text style={styles.contactValue}>1234 5th Ave, Seattle, WA 98101</Text>
                    </View>
                </View>

                <View style={styles.contactItem}>
                    <FontAwesome name="phone" size={24} color="#2a9d8f" />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>Phone Number</Text>
                        <Text style={styles.contactValue}>(206) 123-4567</Text>
                    </View>
                </View>

                <View style={styles.contactItem}>
                    <FontAwesome name="globe" size={24} color="#e63946" />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>Website</Text>
                        <Text style={styles.contactValue}>gustopizza.com</Text>
                    </View>
                </View>
            </View>

            {/* Menu Section */}
            <View style={styles.menuSection}>
                <Text style={styles.menuTitle}>Menu</Text>
                {renderMenuItem("Paneer Butter Masala", "Monday", "Creamy Paneer, Butter, Spices")}
                {renderMenuItem("Vegetable Biryani", "Tuesday", "Basmati Rice, Mixed Vegetables, Spices")}
                {renderMenuItem("Garlic Naan", "Wednesday", "Soft Indian Bread with Garlic")}
                  {renderMenuItem("Dal", "Thursday", "Soft Indian dal tadka")}
                    {renderMenuItem("Chicken", "Friday", "Hot And Spicy")}
                    {renderMenuItem("Chana", "Saturday", " Testy")}


            </View>

            {/* Reviews */}
            <View style={styles.reviewSection}>
                <Text style={styles.reviewTitle}>Reviews</Text>
                {renderReview("Aishwarya", "6/5/23", 5, "The food is delicious and always fresh!", 20, 1)}
                {renderReview("Rahul", "7/4/23", 4, "Good service and great atmosphere.", 15, 0)}
            </View>

            {/* View Cart Button */}
            <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartText}>Book Slot</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const renderMenuItem = (name, price, description) => {
    return (
        <View style={styles.menuItem}>
            <Text style={styles.menuItemName}>{name}</Text>
            <Text style={styles.menuItemPrice}>{price}</Text>
            <Text style={styles.menuItemDescription}>{description}</Text>
        </View>
    );
};

const renderReview = (name, date, rating, comment, likes, dislikes) => {
    return (
        <View style={styles.review}>
            <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{name}</Text>
                <Text style={styles.reviewDate}>{date}</Text>
            </View>
            <Rating type="star" imageSize={16} startingValue={rating} readonly style={styles.reviewRating} />
            <Text style={styles.reviewComment}>{comment}</Text>
            <View style={styles.reviewActions}>
                <Text style={styles.likeCount}>{likes} Likes</Text>
                <Text style={styles.dislikeCount}>{dislikes} Dislikes</Text>
            </View>
        </View>
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
        padding: 15,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    infoSection: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    messName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    cuisine: {
        fontSize: 16,
        color: '#777',
    },
    joinButton: {
        backgroundColor: '#f4a261',
        padding: 10,
        borderRadius: 20,
    },
    joinText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingSection: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 10,
    },
    starRating: {
        marginHorizontal: 10,
    },
    reviewCount: {
        color: '#777',
    },
    photosSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    photo: {
        width: '30%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    contactSection: {
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    contactText: {
        marginLeft: 15,
    },
    contactLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    contactValue: {
        fontSize: 14,
        color: '#777',
    },
    menuSection: {
        padding: 20,
    },
    menuTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuItem: {
        marginBottom: 15,
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    menuItemPrice: {
        fontSize: 14,
        color: '#777',
    },
    menuItemDescription: {
        fontSize: 14,
        color: '#777',
    },
    reviewSection: {
        padding: 20,
    },
    reviewTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    review: {
        marginBottom: 20,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewDate: {
        fontSize: 12,
        color: '#777',
    },
    reviewRating: {
        marginVertical: 5,
    },
    reviewComment: {
        fontSize: 14,
        color: '#777',
    },
    reviewActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    likeCount: {
        color: '#777',
    },
    dislikeCount: {
        color: '#777',
    },
    cartButton: {
        backgroundColor: '#2a9d8f',
        padding: 15,
        borderRadius: 30,
        margin: 20,
        alignItems: 'center',
    },
    cartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MessDetailPage;
