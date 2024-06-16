import { Image, StyleSheet, View, StatusBar, Text } from 'react-native';

const DashboardScreen = ({ navigation }) =>  {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
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
          <View style={styles.bodyheadImage}>
            <View style={styles.bodyheadImageItem}>
              <Image
                  source={require('../assets/img/sun.png')} 
              />
            </View>
            <View>
              <Image
                  source={require('../assets/img/user.png')} 
              />
            </View>
          </View>
        </View>  
        <View style={styles.cardFirst}>
          <View>
            <Text style={styles.cardText}>My Cards</Text>
          </View>
          <View>
            <Image
                  source={require('../assets/img/card.png')} 
                  style={styles.cardImage}
              />
          </View>
        </View>      
        <View style={styles.cardSecond}>
          <View>
            <Text style={styles.cardText}>My Accounts</Text>
          </View>
          <View>
            <Image
                  source={require('../assets/img/bodyUser.png')}
                  style={styles.cardImage}
              />
          </View>
        </View> 
        <View style={styles.cardDarkHead}>
          <View>
            <Text style={styles.cardDarkHeadText}>RECENT TRANSACTIONS</Text>
          </View>
          <View>
            <Image
                source={require('../assets/img/arrow-left.png')} 
            />
          </View>
        </View>
        <View style={styles.cardDarkBody}>
          <View style={styles.cardDarkBodyItem}>
            <View style={styles.cardDarkBodyItemFrst}>
              <View>
                <Image
                    source={require('../assets/img/usr1.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemTxt}>
                <Text style={styles.cardDarkBodyItemText}>Sanda King-David Ayodele</Text>
                <Text style={styles.cardDarkBodyItemTextf}>Transfer</Text>
              </View>
            </View>
            <View>
              <Text style={styles.cardDarkBodyItemText}>₦ 2,999.00</Text>
            </View>
          </View>
          <View style={styles.cardDarkBodyItem}>
            <View style={styles.cardDarkBodyItemFrst}>
              <View>
                <Image
                    source={require('../assets/img/usr2.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemTxt}>
                <Text style={styles.cardDarkBodyItemText}>Bayo Adekunle</Text>
                <Text style={styles.cardDarkBodyItemTextf}>Transfer</Text>
              </View>
            </View>
            <View>
              <Text style={styles.cardDarkBodyItemText}>₦ 230,800.00</Text>
            </View>
          </View>
          <View style={styles.cardDarkBodyItem}>
            <View style={styles.cardDarkBodyItemFrst}>
              <View>
                <Image
                    source={require('../assets/img/usr3.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemTxt}>
                <Text style={styles.cardDarkBodyItemText}>Simi Adegunle</Text>
                <Text style={styles.cardDarkBodyItemTextf}>Transfer</Text>
              </View>
            </View>
            <View>
              <Text style={styles.cardDarkBodyItemText}>₦ 230,000.00</Text>
            </View>
          </View>
        </View>     
        <View style={styles.cardDarkHead}>
          <View>
            <Text style={styles.cardDarkHeadText}>BENEFICIARIES</Text>
          </View>
          <View>
            <Image
                source={require('../assets/img/arrow-left.png')} 
            />
          </View>
        </View>
        <View style={styles.cardDarkBody}>
          <View style={styles.cardDarkBodyItem2}>
            <View style={styles.cardDarkBodyItemScd}>
              <View>
                <Image
                    source={require('../assets/img/frm1.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemScdTxt}>
                <Text style={styles.cardDarkBodyItemscText}>Josh</Text>
              </View>
            </View>
            <View style={styles.cardDarkBodyItemScd}>
              <View>
                <Image
                    source={require('../assets/img/frm2.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemScdTxt}>
                <Text style={styles.cardDarkBodyItemscText}>Ife</Text>
              </View>
            </View>
            <View style={styles.cardDarkBodyItemScd}>
              <View>
                <Image
                    source={require('../assets/img/frm3.png')} 
                />
              </View>
              <View style={styles.cardDarkBodyItemScdTxt}>
                <Text style={styles.cardDarkBodyItemscText}>King-David</Text>
              </View>
            </View>
            <View style={styles.cardDarkBodyItemScd}>
              <View>
                <Image
                    source={require('../assets/img/frm4.png')} 
                />
              </View>
            </View>
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
    padding: 20
  },
  bodyDownbar: {
    marginTop: 10,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
  },
  body: {
    marginLeft: "auto",
    marginRight: "auto",
    width: '100%'
  },
  bodyhead: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  bodyheadImage:{
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
  bodyheadImageItem: {
    marginRight: 10,
    marginTop: 10
  },
  cardFirst: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EB5757',
    padding: 15,
    marginTop: 10,
    borderRadius: 20
  },
  cardSecond: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#8186FF',
    padding: 15,
    marginTop: 10,
    borderRadius: 20
  },
  cardImage: {
    width: 50,
    height: 50
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 15
  },
  cardDarkHead: {
    backgroundColor: '#1E1E1E',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    marginTop: 10
  },
  cardDarkHeadText: {
    color: '#808080'
  },
  cardDarkBody: {
    backgroundColor: '#181818',
    padding: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cardDarkBodyItem: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 5
  },
  cardDarkBodyItem2: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 5,
  },
  cardDarkBodyItemFrst: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardDarkBodyItemTxt: {
    marginLeft: 10
  },
  cardDarkBodyItemText: {
    color: "#FFFFFF",
    fontSize: 10
  },
  cardDarkBodyItemscText: {
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: 'center'
  },
  cardDarkBodyItemTextf: {
    color: "#5D5D5D",
    fontSize: 10
  },
  cardDarkBodyItemScd: {
    textAlign: "center",
    marginRight: 20
  }, 
  cardDarkBodyItemScdTxt: {
    textAlign: 'center',
    marginTop: 5
  }
});

export default DashboardScreen