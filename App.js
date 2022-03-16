import { View, Text, FlatList, StyleSheet, TextInput, StatusBar, Image, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import CoinItem from './components/CoinItem'

const image = { uri: "./assets/bg.png" };

const App = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const loadData = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        const data = await res.json();

        setCoins(data);

    }

    useEffect( () => {
        loadData();
      }, [])


    return (

    <View style={styles.container}>
      
    <StatusBar/>
      <View style={styles.header}>
          <View>
              <Image source={require("./assets/logo.png")}
                style={{
                  resizeMode: 'contain',
                  height: 70,
                  width: 200,
                  marginTop: 20,
                }}
                />
          </View>

          <TextInput style={styles.input} placeholder="Search a coin" placeholderTextColor="white"
          onChangeText={(text) => setSearch(text)}/>

      </View>
          
      <FlatList
        style={styles.list}
        data={coins.filter(
          coin =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
          )}

        renderItem={({item}) => {
          return <CoinItem coin={item} />
        }}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }   
        }
      />

  </View>
       
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07031ae3',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },

  header: {
    borderBottomColor: '#2f2f2f',
    width: '100%',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    backgroundColor: '#141414',
    fontSize: 25,
    marginTop: 10,
    padding: 20,
    textAlign: 'center',
  },

  input: {
    color:'white',
    fontSize: 18,
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '85%',
    marginBottom: 20,
    marginTop: 20,
  },

  list: {
    width: '100%',
    
  }
    

})



export default App

//rnfe: React native functional expression
//rafce components