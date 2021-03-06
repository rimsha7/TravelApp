import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  Animated,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animated.Image
            animation="bounceIn"
            duration={1500}
            source={require("../images/logo.png")}
            style={styles.logo}
            resizeMode={"stretch"}
          />
        </View>

            {/* <Animated.View animation="fadeInUpBig" style={styles.footer}> */
             <View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.title}>Stay Connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SigninScreen")}
            >
              {" "}
            </TouchableOpacity>
            <LinearGradient
              colors={["#5db8fe", "#39cff2"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="white" size={20} />
            </LinearGradient>
          </View>
                    {/* </Animated.View> */}
                    </View>
      </View>
    );
  }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
