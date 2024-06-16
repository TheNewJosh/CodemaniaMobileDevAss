import { Image, StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) =>  {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.bodyImage}>
          <Image
              source={require('../assets/img/start.png')} 
            />
        </View>        
        <View style={styles.bodyImage}>
          <TouchableOpacity style={styles.buttonStylAct} onPress={() => navigation.navigate("Send")}>
              <Text style={styles.buttonStylText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyl}>
              <Text style={styles.buttonStylText}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyl}>
              <Text style={styles.buttonStylText}>Connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStylwhite} onPress={() =>navigation.navigate("Dashboard")}>
              <Text style={styles.buttonStylTextWh}>
                Go to dashboard
                <Image
                  source={require('../assets/img/arrow-right.png')} 
                  style={styles.startImage}
                />
              </Text>
          </TouchableOpacity>
        </View>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020912"
  },
  body: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  bodyImage: {
    marginTop: 45
  },
  buttonStylAct: {
    backgroundColor: "#FB5521",
    color: "#FFFFFF",
    padding: 20,
    fontSize: 20,
    borderRadius: 10
  },
  buttonStyl: {
    color: "#FFFFFF",
    padding: 20,
    fontSize: 20,
    borderRadius: 10
  },
  buttonStylwhite: {
    backgroundColor: "#FFFFFF",
    color: "#020912",
    padding: 1,
    paddingBottom: 4,
    fontSize: 20,
    borderRadius: 10
  },
  buttonStylText: {
    textAlign: "center", 
    fontSize: 35, 
    color: "#FFFFFF", 
    fontWeight: "400" 
  },
  buttonStylTextWh: {
    textAlign: "center", 
    fontSize: 20, 
    color: "#020912", 
    fontWeight: "400" 
  }
});

export default HomeScreen