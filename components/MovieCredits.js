import { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import CastMemberCard from "./CastMemberCard"

export default function MovieCredits({ movieId }) {
    const [cast, setCast] = useState([])
    const controller = new AbortController()
    let didCancel = false;

    const filterTop10ActingMembers = (castMembers) => {
        const filteredCast = castMembers
            .sort((a, b) => a.order - b.order)
            .slice(0, 10)

        setCast(filteredCast)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?`
            + new URLSearchParams({ api_key: process.env.MOVIE_API_KEY, }),
            { method: "GET", signal: controller.signal })
            .then(response => {
                if (!didCancel) {
                    return response.json();
                }
            })
            .then(data => {
                if (!didCancel) {
                    filterTop10ActingMembers(data.cast);
                }
            })
            .catch(error => {
                if (!didCancel) {
                    if (error.name === 'AbortError') {
                        console.log('Fetch request was cancelled');
                    } else {
                        console.error('Another error happened: ', error.message);
                    }
                }
            });

        return () => {
            didCancel = true;
            controller.abort();
        };
    }, [])


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
    )
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

