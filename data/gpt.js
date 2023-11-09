import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

export const USERS = [
  {
    user: 'Arshiyan',
    image: '../userphoto/user1.jpg'
  },
  {
    user: 'P.E.S college',
    image: '../../userphoto/user2.jpg'
  },
  {
    user: 'Deadpool',
    image: '../../userphoto/user3.jpg'
  },
  {
    user: 'Aniket',
    image: '../../userphoto/user4.jpeg'
  },
  {
    user: 'IronMan',
    image: '../../userphoto/user5.jpg'
  },
  {
    user: 'Amey',
    image: '../../userphoto/user6.png'
  },
  {
    user: 'Sidhant',
    image: '../../userphoto/user7.jpg'
  }
];

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Image source={{ url: story.image }} style={styles.story} />
            <Text>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Image source={{ url: story.image }} style={styles.story} />
            <Text>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text style={{ color: 'black' }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#ff8501'
  }
});

export default Stories;
