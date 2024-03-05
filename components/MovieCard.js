import { useState } from "react";
import { View, Modal, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MovieInfoModal from "./MovieInfoModal";

export default function MovieCard({ movie, height, width }) {
    // image source URL
    const imageSrc = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    
    // Define a state variable to control the visibility of the modal
    const [visible, setVisible] = useState(false);

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                onRequestClose={closeModal}
                animationType="slide"
            >
                {/* Touchable area to close the modal */}
                <TouchableOpacity onPress={closeModal} style={{ height: "100%" }} />
                
                {/* Custom MovieInfoModal component */}
                <MovieInfoModal movie={movie} />
            </Modal>

            {/* Touchable area to open the modal */}
            <TouchableOpacity onPress={openModal}>
                <View style={styles.movieCard}>
                    {/* If movie has a backdrop_path, display the image, otherwise display the movie title */}
                    {movie.backdrop_path
                        ? <Image
                            style={{ height, width, ...styles.image }}
                            source={{ uri: imageSrc }}
                        />
                        : <View style={{ height, width, ...styles.viewAlt }}>
                            <Text style={styles.textAlt}>{movie.title}</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({
    movieCard: {
        marginVertical: 14,
    },
    title: {
        color: "white"
    },
    image: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#252525",
    },
    textAlt: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "400",
    },
    viewAlt: {
        padding: 2,
        borderColor: "#FFF",
        borderWidth: 4,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
    }
})

