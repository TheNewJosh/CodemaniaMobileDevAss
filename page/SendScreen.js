import { Image, StyleSheet, View, StatusBar, Text } from 'react-native';

const SendScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.bodyImage}>
          <Image
              source={require('../assets/img/sunuser.png')} 
            />
        </View>
        <View style={styles.bodyCenter}>
          <Text style={styles.boldText}>Tap to Send</Text>
          <Text style={styles.boldTextFait}>Long tap to Receive</Text>
        </View> 
        <View style={styles.bodyCenterImage}>
          <Image
              source={require('../assets/img/light.png')} 
            />
        </View>        
      </View>
      <View style={styles.bodyDown}>
        <View style={styles.bodyDownbar}>
          <Image
              source={require('../assets/img/bar.png')} 
          />
        </View>
        <View style={styles.bodyhead}>
          <View>
            <Text style={styles.headTextFaint}>Good afternoon</Text>
            <Text style={styles.headTextBold}>Joshua Ajiboye</Text>
          </View>
          <View>
            <View>
              <Image
                  source={require('../assets/img/user.png')} 
              />
            </View>
          </View>
        </View> 
        <View style={styles.bodyheadCard}>
          <View style={styles.bodyheadCardItemOrg}>
            <Image
                  source={require('../assets/img/card.png')} 
                  style={styles.cardImage}
              />
          </View>
          <View style={styles.bodyheadCardItemPur}>
            <Image
                  source={require('../assets/img/bodyUser.png')} 
                  style={styles.cardImage}
              />
          </View>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020912",
  },
  body: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: '100%',
    padding: 20 
  },
  bodyImage: {
    marginTop: 15,
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  },
  boldText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center'
  },
  boldTextFait: {
    color: '#5C6166',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center'
  },
  bodyCenter: {
    marginTop: 50
  },
  bodyCenterImage: {
    marginTop: 20
  },
  bodyDown: {
    backgroundColor: '#101A1E',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20
  },
  bodyhead: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  headTextFaint: {
    color: "#A4A4A3",
    fontSize: 12
  },
  headTextBold: {
    color: "#F9F9F9",
    fontSize: 16
  },
  bodyDownbar: {
    marginTop: 20,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
  },
  bodyheadCard: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  bodyheadCardItemOrg: {
    backgroundColor: '#EB5757',
    padding: 10,
    width: '48%',
    borderRadius: 20
  },
  bodyheadCardItemPur: {
    backgroundColor: '#8186FF',
    padding: 15,
    width: '48%',
    borderRadius: 20
  },
  cardImage: {
    width: 100,
    height: 100
  }
});

export default SendScreen
