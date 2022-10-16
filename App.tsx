import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign, FontAwesome,MaterialCommunityIcons,MaterialIcons,FontAwesome5,Ionicons,Foundation} 
from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <View>
          <View> 
            <View style={styles.icono}><AntDesign name="left" size={24} color="black" /></View>
            <Text style={styles.texto}> Medicine orders</Text>
          </View>
        </View>
      </View>

      <View style={styles.buscador}>
        <View>
          <View> 
            <View style={styles.x}><AntDesign name="close" size={24} color="black" /></View>
            <Text style={styles.textprincipal}> search</Text>
          </View>
        </View>
      </View>
      <View style={styles.lupa}><AntDesign name="search1" size={24} color="black" /></View>
    
      <View style={styles.contenedor1}>
        <View>
          <View style={styles.circulo1}></View>
            <View style={styles.icon1}><AntDesign name="medicinebox" size={35} color="green" /></View> 
          <Text style={styles.text1}>Guide to medecine order</Text>
        </View>
      </View>

      <View style={styles.contenedor2}>
        <View>
          <View style={styles.circulo2}></View>
           <View style={styles.icon2}><FontAwesome5 name="file-prescription" size={35} color="green" /></View>
          <Text style={styles.text2}>Prescription related issues</Text>
        </View>
      </View>

      <View style={styles.contenedor3}>
        <View>
          <View style={styles.circulo3}></View>
           <View style={styles.icon3}><FontAwesome name="cart-arrow-down" size={35} color="green"/></View>
          <Text style={styles.text3}>Order status</Text>
        </View>
      </View>

      <View style={styles.contenedor4}>
        <View>
          <View style={styles.circulo4}></View>
           <View style={styles.icon4}><MaterialCommunityIcons name="truck-delivery" size={35} color="green" /></View>
          <Text style={styles.text4}>Order delivery</Text>
        </View>
      </View>

      <View style={styles.contenedor5}>
        <View>
          <View style={styles.circulo5}></View>
           <View style={styles.icon5}><MaterialIcons name="payments" size={35} color="green" /></View>
          <Text style={styles.text5}>Payments & Refunds</Text>
        </View>
      </View>
      
        <View style={styles.contenedor6}>
        <View>
          <View style={styles.circulo6}></View>
           <View style={styles.icon6}><Ionicons name="arrow-undo" size={35} color="green" /></View>
          <Text style={styles.text6}>Order returns</Text> 
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5D0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    width: 455,
    height: 35,
     top: 130,
    right: -120,
    fontWeight: "bold",
    fontSize: 20,
    margin:0,
  },

  icono:{
    backgroundColor:"white",
    width: 30,
    height: 30,
     top: 160,
    right: -70,
    borderRadius:10,
  },

  buscador: {
    backgroundColor:"white",
    borderRadius:20,
    width: 325,
    height: 65,
     top: 140,
    right: 0,
  },
  textprincipal: {
    top: -5,
    right: -50,
    fontWeight: "bold",
    fontSize: 18,
  },
  lupa: {
    top: 95,
    right: 135,
  },
  x: {
    top: 20,
    right: -295,
  },

  contenedor1: {
    backgroundColor:"white",
    right: 80,
    top: 150,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo1: {
    backgroundColor:"#9ADBCE",
    width: 80,
    height: 80,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon1: {
    width: 70,
    height: 50,
    top: -35,
    right: -55,
    
  },
  text1: {
    top: -10,
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 13,
  },
  
  contenedor2: {
    backgroundColor:"white",
    right: -85,
    top: -20,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo2: {
    backgroundColor:"#9ADBCE",
    width: 85,
    height: 85,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon2: {
    width: 85,
    height: 85,
    top: -40,
    right: -60,
  },
  text2: {
    top: -40,
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 13,
  },

  contenedor3: {
    backgroundColor:"white",
    right: 80,
    top: -10,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo3: {
    backgroundColor:"#9ADBCE",
    width: 85,
    height: 85,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon3: {
    width: 95,
    height: 85,
    top: -40,
    right: -55,
  },
  text3: {
    top: -40,
    marginLeft: "15%",
    fontWeight: "bold",
    fontSize: 15,
  },

  contenedor4: {
    backgroundColor:"white",
    right: -85,
    top: -180,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo4: {
    backgroundColor:"#9ADBCE",
    width: 85,
    height: 85,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon4: {
    width: 85,
    height: 85,
    top: -40,
    right: -55,
  },
  text4: {
    top: -40,
    marginLeft: "15%",
    fontWeight: "bold",
    fontSize: 15,
  },

  contenedor5: {
    backgroundColor:"white",
    right: 80,
    top: -170,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo5: {
    backgroundColor:"#9ADBCE",
    width: 85,
    height: 85,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon5: {
    width: 85,
    height: 85,
    top: -40,
    right: -55,
  },
  text5: {
    top: -40,
    marginLeft: "3%",
    fontWeight: "bold",
    fontSize: 13,
  },

  contenedor6: {
    backgroundColor:"white",
    right: -85,
    top: -340,
    margin:0,
    width: 150,
    height: 170,
    borderRadius: 10,
  },
  circulo6: {
    backgroundColor:"#9ADBCE",
    width: 85,
    height: 85,
    top: 20,
    right: -30,
    borderRadius:100,
  },
  icon6: {
    width: 85,
    height: 85,
     top: -40,
    right: -55,
  },
  text6: {
    right: -20,
    top: -40,
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 15,
  },
});

