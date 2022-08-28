import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Cards from "./Cards";
import Stands from "./Stands";
import Settings from "./Settings";

export default function Home({ route }) {
  const [seccion, setSeccion] = useState("home");
  const { detail } = route.params;
  return (
    <View style={styles.body}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/c6/b8/f0/c6b8f08483429489a214cfac8d8c0aa5.jpg",
        }}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          colors={["rgba(240,54,85,0.85)", "rgba(129,0,250,0.85)"]}
          start={[0.5, 0.3]}
          style={styles.linearGradient}
        >
          <BlurView intensity={15} style={styles.nav}>
            <View style={styles.nav_content}>
              <Image source={require("../assets/2.png")} style={styles.image} />
            </View>
          </BlurView>
          {seccion === "home" ? (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                height: "70%",
                marginTop: 140,
              }}
            >
              <Text style={styles.title}>Home</Text>
              <Cards style={styles.cards} />
            </View>
          ) : seccion === "stands" ? (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                height: "70%",
                marginTop: 140,
              }}
            >
              <Text style={styles.title}>Stands</Text>
              <TextInput style={styles.search} placeholder="Search" />
              <Stands />
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                height: "70%",
                marginTop: 140,
              }}
            >
              <Text style={styles.title}>Settings</Text>
              <View style={styles.user_details}>
                <View style={styles.img_user}>
                  <Image
                    source={{ uri: `${detail.photoURL}` }}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <View style={styles.description_user}>
                  <Text style={styles.display_name}>{detail.displayName}</Text>
                  <Text style={styles.display_email}>{detail.email}</Text>
                </View>
              </View>
              <Text style={styles.subtitle}>Favorites</Text>
              <Settings />
            </View>
          )}
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                setSeccion("home");
              }}
              style={styles.button}
            >
              <Text style={styles.btn_text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSeccion("stands");
              }}
              style={styles.button}
            >
              <Text style={styles.btn_text}>Stands</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSeccion("settings");
              }}
              style={styles.button}
            >
              <Text style={styles.btn_text}>Settings</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  nav: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: -10,
  },
  nav_content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  image: {
    marginTop: 40,
    width: "10%",
    height: "90%",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    marginBottom: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 25,
    fontWeight: "bold",
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,12,163,0.8)",
  },
  button: {
    padding: 20,
    width: "33%",
    textAlign: "center",
  },
  btn_text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  search: {
    height: 50,
    width: "80%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 30,
    textAlign: "center",
    marginBottom: "20px",
    color: "#fff",
  },
  user_details: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    width: "95%",
    flexDirection: "row",
  },
  img_user: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  description_user: {
    textAlign: "left",
  },
  display_name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  display_email: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "normal",
  },
});
