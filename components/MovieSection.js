import { StyleSheet, Text, View, FlatList } from "react-native"
import MovieCard from "./MovieCard"

export default function MovieSection({ movies, sectionTitle }) {
    return (
        <View style={styles.section}>
            // Display the section title
            <Text style={styles.sectionTitle}>
                {sectionTitle}
            </Text>

            // Display a horizontal list of movies
            <FlatList
                data={movies}
                // Function to render each movie in the list
                renderItem={
                    ({ item }) =>
                        // Wrapper for the movie card
                        <View style={styles.cardWraper}>
                            // Display a MovieCard for the movie
                            <MovieCard
                                key={item.id}
                                movie={item}
                                height={200}
                                width={140}
                            />
                        </View>
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        height: 260,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFF"
    },
    cardWraper: {
        marginRight: 10,
    }
})

