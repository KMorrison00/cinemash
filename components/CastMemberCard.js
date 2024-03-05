import { View, Text, Image, StyleSheet } from "react-native"


export default function CastMemberCard({ castMember }) {
    // This code defines a functional component called CastMemberCard that takes a castMember object as a prop.
    const imageSrc = `https://image.tmdb.org/t/p/w500/${castMember.profile_path}`
    // It creates a URL for the cast member's profile picture using their profile_path property.
    return (
        <View style={styles.container}>
            <Image
                style={styles.profilePicture}
                source={{ uri: imageSrc }}
            />

            <Text style={styles.name}>
                {castMember.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: 100,
        height: 140,
    },
    name: {
        color: "#FFF",
        fontSize: 13,
    },
    profilePicture: {
        height: 100,
        width: 80,
        borderRadius: 5,
    }
})

