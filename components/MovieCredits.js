import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CastMemberCard from "./CastMemberCard";

export default function MovieCredits({ movieId }) {
    const [cast, setCast] = useState([]);
    
    // Create an AbortController instance to control fetch requests
    const controller = new AbortController();
    
    // Flag to check if the component has been unmounted
    let didCancel = false;

    const filterTop10ActingMembers = (castMembers) => {
        const filteredCast = castMembers
            .sort((a, b) => a.order - b.order)
            .slice(0, 10);

        // Update the cast state with the filtered cast
        setCast(filteredCast);
    }

    // Use the useEffect hook to fetch movie credits when the component mounts
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?`
            + new URLSearchParams({ api_key: process.env.MOVIE_API_KEY, }),
            { method: "GET", signal: controller.signal })
            .then(response => {
                // Only proceed if the component has not been unmounted
                if (!didCancel) {
                    return response.json();
                }
            })
            .then(data => {
                // Only proceed if the component has not been unmounted
                if (!didCancel) {
                    filterTop10ActingMembers(data.cast);
                }
            })
            .catch(error => {
                // Only proceed if the component has not been unmounted
                if (!didCancel) {
                    if (error.name === 'AbortError') {
                        console.log('Fetch request was cancelled');
                    } else {
                        console.error('Another error happened: ', error.message);
                    }
                }
            });

        // Cleanup function to run when the component unmounts
        return () => {
            didCancel = true;
            controller.abort();
        };
    }, []);  // Empty dependency array means this effect runs once on mount and cleanup on unmount
    return (
        <View>
            <Text style={styles.title}>Staring:</Text>
            <FlatList
                data={cast}
                renderItem={
                    ({ item }) =>
                        <CastMemberCard key={item.id} castMember={item} />
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#FFF",
        fontWeight: "500",
        letterSpacing: 1,
        fontSize: 18,
        marginLeft: 12,
        marginBottom: 6
    }
})

