import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView, Dimensions, Image, Linking, Pressable} from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MobilePic from '../../Image/MobilePic';
import { favourite_dish } from '../../Data/data';

function FavoriteScreen() {
  browseLink = (dish_name) => {
    var URL = 'https://hurrythefoodup.com/?s='+dish_name
  
    Linking.canOpenURL(URL).then(supported => {         
      if (!supported) {            
          console.warn('Can\'t handle url: ' + URL);            
      } else {
          return Linking.openURL(URL);            
      }            
    }).catch(err => console.error('An error occurred',URL));
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          <Text style={[styles.h1, {flex:1}]}>Your favourites are all here.</Text>
          <View Style={[styles.DishType]}>
            {
              favourite_dish.map((item, index) => (
                <View style={[styles.subTypeLike]}>
                  <Image style={[styles.ItemImage]} source={MobilePic[item.img]} />
                  <View style={[styles.contentstyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <View style={[styles.verticalStyle]}>
                      <Pressable onPress={ () => browseLink(item.name)}>
                        <Image style={[styles.recipeIcon]} source={MobilePic["recipe_icon_like"]} />
                      </Pressable>
                    </View>
                    <View style={[styles.verticalStyle]}>
                      <Image style={[styles.arrowIcon]} source={MobilePic["arrow_icon"]} />
                    </View>

                  </View>
                </View>
              ))
            }
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>
                <Ionicons name='restaurant-outline' size={15} color={'grey'}></Ionicons>
                {" Let's explore more food! "}
              </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
export default FavoriteScreen;

const styles = StyleSheet.create({
  DishType:{
    height: 240,
    width: Dimensions.get('window').width/1.02,
    margin: 10,
  },
  verticalStyle: {
    flexDirection: 'column',
    marginRight: 5
  },
  subTypeLike: {
    borderWidth: 1,
    borderColor: '#F26B8A',
    backgroundColor: 'white',
    shadowColor: '#F26B8A',
    elevation: 10,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15

  },
  subType: {
    borderWidth: 1,
    borderColor: 'rgb(170, 211, 0)',
    backgroundColor: 'white',
    shadowColor: 'rgb(170, 211, 0)',
    elevation: 10,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15

  },
  contentstyle: {
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 30,
  },
  ItemImage: {
    height: 129,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  recipeIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    position: 'absolute',
    left: 250,
    top: -30
  },
  arrowIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    position: 'absolute',
    left: 300,
    top: -28
  },
  h1: {
    fontSize: 25,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10
  },
  h2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10
  }
})