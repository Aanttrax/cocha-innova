import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native-web";
import axios from "axios";

// import news from "./Aux/News";

export default function Cards() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      axios
        .get(
          "https://7hxy2xvbrl.execute-api.us-east-1.amazonaws.com/v1/event/list_all"
        )
        .then((response) => {
          const posts = response.data;
          setNews(posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(err);
    }
  };
  console.log(news);
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
