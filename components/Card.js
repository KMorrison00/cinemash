// Importing necessary dependencies
import React from 'react'
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import MovieInfoModal from "./MovieInfoModal"

// API URL for movie posters
const POSTER_API_URL = 'https://image.tmdb.org/t/p/w500/';

// Card component
const Card = ({ movie }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {/* Modal for displaying movie information */}
      <Modal
        visible={isOpen}
        transparent={true}
        onRequestClose={closeModal}
        animationType="slide"
      >
        <TouchableOpacity onPress={closeModal} style={{ height: "100%" }} />
        <MovieInfoModal movie={movie} />
      </Modal>

      {/* Card container */}
      <TouchableOpacity style={{ height: "100%" }} onPress={openModal}>
        <View
          activeOpacity={1}
          style={styles.card}
        >
          {/* Movie poster */}
          <Image
            style={styles.image}
            source={{ uri: `${POSTER_API_URL}${movie.poster_path}` }}
            resizeMode="cover"
          />

          {/* Movie description */}
          <View style={styles.photoDescriptionContainer}>
            <Text style={styles.text}>
              {`${movie.original_title}`}
            </Text>
            <Text style={styles.text}>
              {`${movie.release_date}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    card: {
      /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 5,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      elevation: 2,
    },
    image: {
      borderRadius: 5,
      flex: 1,
      width: '100%',
    },
    photoDescriptionContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      flexDirection: 'column',
      height: '100%',
      position: 'absolute',
      left: 10,
      bottom: 10,
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      color: colors.white,
      textShadowColor: colors.black,
      textShadowRadius: 10,
    },
  })

export default Card