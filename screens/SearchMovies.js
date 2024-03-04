import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import MovieCard from '../components/MovieCard'

const appLogo = require("../assets/icons/popcorn.png")
const API_URL ='https://api.themoviedb.org/3/';

export function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    // Create an AbortController instance for handling fetch requests.
    const controller = new AbortController();

    useEffect(() => {
        setLoading(true);
        // If search query is empty, reset movies and loading state.
        if (!search) {
            setLoading(false);
            setMovies([]);
            return;
        }

        // Set a timeout to wait for user input before triggering search.
        const timeoutSearch = setTimeout(() => {
            searchMovies();
            setLoading(false);
        }, 400);

        // Cleanup function to clear the timeout and abort fetch request if component unmounts.
        return () => {
            clearTimeout(timeoutSearch);
            controller.abort();
            setMovies([]);
        };
    }, [search]); // Dependency array ensures useEffect runs when 'search' state changes.

    // Function to perform movie search using fetch API.
    const searchMovies = () => {
        fetch("https://api.themoviedb.org/3/search/movie?" +
            new URLSearchParams({
                api_key: process.env.MOVIE_API_KEY,
                query: search,
            }),
            { method: "GET", signal: controller.signal })
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error("Error fetching data:", error));
    };

    // Function to render main content based on loading state and search results.
    const mainContent = () => {
        if (loading) {
            return (
                // Display loading indicator if data is still being fetched.
                <View style={styles.mainContentView}>
                    <Text style={styles.mainContentText}>
                        Loading...
                    </Text>
                </View>
            );
        }

        if (!search) {
            // Display instructions when search query is empty.
            return (
                <View style={styles.mainContentView}>
                    <Image
                        resizeMode="contain"
                        source={appLogo}
                        style={{ height: 96, marginBottom: 20 }}
                    />
                    <Text style={styles.mainContentText}>
                        Search for a movie or specific genre  ...
                    </Text>
                </View>
            );
        }

        if (movies.length > 0) {
            // Display movie cards if search results are available.
            return (
                <View style={styles.mainContentView}>
                    <ScrollView>
                        {movies.map(movie => {
                            return <MovieCard
                                key={movie.id}
                                movie={movie}
                                height={350}
                                width={245}
                            />;
                        })}
                    </ScrollView>
                </View>
            );
        }

        // Display message when no search results are found.
        if (movies.length === 0) {
            return (
                <View style={styles.mainContentView}>
                    <Text style={styles.mainContentText}>
                        Sorry, nothing was found for
                    </Text>
                    <Text style={styles.mainContentText}>
                        "{search}"
                    </Text>
                </View>
            );
        }

        return <></>; // Placeholder for any other case.
    };

    // Render the search bar and main content.
    return (
        <View style={styles.container}>
            <View >
                <Image style={styles.icon} source={require("../assets/icons/popcorn.png")}></Image>
            </View>
            <View style={{ bottom: "8%", marginTop: 60 }}>
                <View style={styles.searchBox}>
                    <Ionicons
                        name="ios-search-sharp"
                        size={34}
                        color="#C1C1C1"
                        style={{ marginRight: 15 }}
                    />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#C1C1C1"
                        value={search}
                        onChangeText={setSearch}
                        style={styles.searchField}
                    />
                </View>
                {mainContent()} {/* Render main content based on search results */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
    },
    searchBox: {
        flexDirection: "row",
        width: "75%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: "#424242",
        borderRadius: 20,
    },
    searchField: {
        height: 60,
        width: "100%",
        color: "#FFF",
        fontSize: 18,
    },
    mainContentView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    mainContentText: {
        fontSize: 25,
        fontWeight: "500",
        color: "#FFF"
    },
    icon: {
        width: 40,
        height: 40
    }
})

