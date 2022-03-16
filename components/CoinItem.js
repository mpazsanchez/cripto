import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItem = ({coin}) => {
    //props.CoinItem
  return (
    <View style={styles.containerItem}>

        <View style={styles.containerItemLeft}>
            <Image style={styles.image} source={{uri: coin.image}} />
            <View>
                <Text style={styles.textCoinSymbol}>{coin.symbol}</Text>
                <Text style={styles.textCoinName}>{coin.name}</Text>
            </View>
        </View>

        <View>
            <Text style={styles.textCoinPrice}>{coin.current_price}U$D</Text>
            <Text style={[styles.textCoinPrice, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown] } >{coin.price_change_percentage_24h}%</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    containerItem: {
        alignItems: 'center',
        width: '90%',
        marginBottom: 7,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#b5b1ca1f',
        alignSelf: 'center',

    },

    containerItemLeft: {
        alignItems: 'center',
        flexDirection: 'row',
/*         borderColor:'red',
        borderWidth: 1, */
        justifyContent: 'flex-start',
        width: '60%',
    },


    textCoinPrice: {
        color: 'white',
        fontSize: 18,
        textAlign:'right',
    },


    
    textCoinName: {
        color: 'rgba(228, 219, 219, 0.774)',
        fontSize: 20,
    },

    textCoinSymbol: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginRight: 10,
    },

    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },

    priceUp: {
        color: 'rgba(34, 105, 20, 0.89)',
    },
    
    priceDown: {
        color: 'rgba(180, 49, 49, 0.892)',
    }
})

export default CoinItem