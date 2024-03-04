import React, {useEffect, useState, useRef} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Avatar, Divider, Card } from 'react-native';
import { ScrollView } from 'react-native'


// sample user profiles for user and potential friends
export function UserProfileInfo() {

 const similarUsersData = [
    {
      id: 1,
      name: 'Mark Doe',
      genres: 'Action, Adventure',
      location:'Denver,USA',
      image: require('../assets/images/avatars/avatar7.png'),
    },
    {
      id: 1,
      name: 'John Doe',
      genres: 'Action',
      location:'Boulder,USA',
      image: require('../assets/images/avatars/avatar8.png'),
    },
    {
      id: 2,
      name: 'Clark Man',
      genres: 'Action, Comedy',
      location:'Jacksonvile,USA',
      image: require('../assets/images/avatars/avatar3.png'),
    },
    {
      id: 3,
      name: 'Jaden Boor',
      genres: 'Adventure, Fantasy',
      location:'Toronto,Canada',
      image: require('../assets/images/avatars/avatar4.png'),
    },
    {
      id: 4,
      name: 'Srick Tree',
      genres: 'Adventure, Sci-Fi',
      location:'San Paolo,Brasil',
      image: require('../assets/images/avatars/avatar2.png'),
    },
    {
      id: 5,
      name: 'Cynthia Doe',
      genres: 'Action, Drama',
      location:'Boston,USA',
      image: require('../assets/images/avatars/avatar10.png'),
    },
    {
      id: 6,
      name: 'Carlos Stone',
      location:'Saint Petersburg,USA',
      genres: 'Comedy, Action',
      image: require('../assets/images/avatars/avatar6.png'),
    }
  
  ]

  const userInfo = {
    username: 'Johnny7',
    location: 'Denver, USA',
    genres:'Action, Adventure',
    groups: 5,
    age: 33,
    joined: '01/02/2024',
    lastVisit: '15/02/2024 12:32 PM',
    image:require('../assets/images/avatars/avatar0.png')
  };

  const [users, setUsers] = useState(similarUsersData);


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity>
        <View style={[styles.card, styles.profileCard]}>
          <Image
            style={styles.avatar}
            source={userInfo.image}
          />
          <Text style={styles.name}>{userInfo.username}</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.userInfo}>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>{userInfo.location}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Genres:</Text>
            <Text style={styles.infoValue}>{userInfo.genres}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Groups:</Text>
            <Text style={styles.infoValue}>{userInfo.groups}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Age:</Text>
            <Text style={styles.infoValue}>{userInfo.age}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Joined:</Text>
            <Text style={styles.infoValue}>{userInfo.joined}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Last Visit:</Text>
            <Text style={styles.infoValue}>{userInfo.lastVisit}</Text>
          </View>

        </View>


      </View>
      <View style={styles.photosCard}>
      <Text style={styles.cardTittle}>Similar Users</Text>
      <FlatList
        style={styles2.list}
        contentContainerStyle={styles2.listContainer}
        data={users}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles2.card}
              onPress={() => {
                clickEventListener()
              }}>
              <View style={styles2.cardHeader}>
                <Image
                  style={styles2.icon}
                  source={ require("../assets/icons/popcorn.png") }
                />
              </View>
              <Image style={styles2.userImage} source={item.image} />
              <View style={styles2.cardFooter}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles2.name}>{item.name}</Text>
                  <Text style={styles2.position}>{item.genres}</Text>
                  <Text style={styles2.position}>{item.location}</Text>
                  <TouchableOpacity
                    style={styles2.connectButton}
                    onPress={() => clickEventListener()}>
                    <Text style={styles2.connectButtonText}>Connect</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>


      </View>
    </ScrollView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DCDCDC',
  },
  cardTittle: {
    color: '#808080',
    fontSize: 40,
    marginBottom: 5,
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 75,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginTop: 10,
  },
  profileCard: {
    height: 400,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    color: '#808080',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 200,
    height: 200,
    marginTop: 5,
    marginRight: 5,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 24,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    width: 150, // Adjust width for better layout
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoValue: {
    flex: 1,
    fontSize: 30,
  }
})


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#060606',
  },
  listContainer: {
    alignItems: 'left',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 200,
    width: 200,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#DCDCDC',
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 20,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  connectButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#7F00FF',
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    height: 40,
    width: 40,
  },
})