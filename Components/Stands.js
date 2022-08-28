import { View, FlatList, Text, StyleSheet, Image } from "react-native-web";

import news from "./Aux/News";

export default function Stands() {
  return (
    <FlatList
      style={styles.cards}
      data={news}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.image}>
            <Image source={{ uri: `${item.img}` }} style={styles.img} />
          </View>
          <View style={styles.detail}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cards: {
    width: "85%",
    height: 50,
  },
  image: {
    height: "100%",
    width: "40%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "rgba(235,229,242,0.9)",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    margin: 15,
    height: 150,
    flexDirection: "row",
    padding: 15,
  },
  name: {
    fontSize: 20,
    textAlign: "left",
  },
  description: {
    fontSize: 12,
    color: "gray",
  },
  detail: {
    width: "55%",
  },
});
