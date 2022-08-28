import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Aux/firebase-config";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState("");
  const [messagePas, setMessagePas] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
      })
      .catch((error) => {
        Alert.alert(error.message);
        console.log(error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigation.navigate("home", { detail: user });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const validarPass = (validate) => {
    if (validate.length < 6) {
      setMessagePas(`El password tiene que tener como minnimo 6 caracteres`);
    } else {
      setMessagePas("");
    }
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Create your account</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Jhon@email.com"
          />
          <TextInput
            onChangeText={(text) => {
              setValidate(text);
              validarPass(text);
            }}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Repeat Password"
          />
          <Text style={styles.alert}>{messagePas}</Text>
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={styles.button_login}
          >
            <Text style={styles.text_button}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignInGoogle} style={styles.button}>
            <Image
              source={{
                uri: "https://iconape.com/wp-content/files/mn/370960/svg/370960.svg",
              }}
              style={styles.image}
            />
            <Text style={styles.text_button}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
            style={styles.forgot}
          >
            <Text style={styles.forgot_text}>Go Back</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },

  title: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: "5px",
  },

  subtitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: "20px",
  },

  input: {
    height: 50,
    width: "80%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 30,
    textAlign: "center",
    marginBottom: "20px",
    color: "#fff",
  },

  forgot: {
    color: "#fff",
    fontSize: 15,
    textAlign: "right",
    marginBottom: 20,
    width: "80%",
  },
  forgot_text: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 20,
  },

  image: {
    height: 50,
    width: 50,
    marginLeft: "30px",
  },
  button: {
    backgroundColor: "#DC4D42",
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 50,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_login: {
    backgroundColor: "rgba(129,0,250,0.85)",
    borderRadius: 20,
    marginBottom: 80,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 50,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text_button: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "10px",
  },
  alert: {
    color: "#fff",
    fontSize: 15,
    marginVertical: 10,
  },
});
