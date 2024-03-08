/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {View, ScrollView, ImageBackground, FlatList, Text, Platform, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import HeaderButton from '../components/HeaderButton';
import Data from '../constants/data';
import Icons from '../constants/icons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";

const MovieDetails = ({navigation, route}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(()=>{
    let {selectedMovie} = route.params;
    setSelectedMovie(selectedMovie)
  },[])

  function renderHeaderBar(){
    return(
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:Platform.OS === "ios" ? 40 : 20,
        paddingHorizontal: SIZES.padding
      }}>
      <HeaderButton onPress={() => { navigation.goBack();}} 
      icon={
        <Image source={Icons.left_arrow} style={{
          width:20,
          height:20,
          tintColor:COLORS.light
        }}/>
      }/>
      <HeaderButton onPress={()=>console.log('Share')} icon={
        <Image source={Icons.upload} style={{
          width:25,
          height:25,
          tintColor: COLORS.light,
        }}/>
      }/>
      </View>
    );
  };

  function renderHeaderSection(){
    return (
      <ImageBackground source={selectedMovie?.details?.image} resizeMode="cover" style={{
        width:"100%",
        opacity:0.9,
        height:SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.5
      }}>
        <View style={{ flex:1 }}>
          {renderHeaderBar()}
        </View>
        <View style={{
          flex:1,
          justifyContent:"flex-end",
        }}>
        <LinearGradient 
          start={{x:0, y:0}} 
          end={{x:0, y:1}} 
          colors={["transparent", "#000"]} 
          style={{
          width:"100%",
          height:"150",
          alignItems:"center",
          justifyContent:"center",
        }}>
        <Text style={{
          color: COLORS.light,
          ...FONTS.body3
        }}>
          {selectedMovie?.details?.season}
        </Text>
        <Text style={{
          color: COLORS.light,
          marginTop:SIZES.base,
          ...FONTS.h1
        }}>
          {selectedMovie?.name}
        </Text>
        </LinearGradient>
        </View>
      </ImageBackground>
    );
  };

  function renderCategoryAndRatings(){
    return(
      <View style={{
        flexDirection:"row",
        marginTop: SIZES.base,
        alignItems:"center",
        justifyContent:"center"
      }}>
        <View style={[styles.categoryContainer,{marginLeft:0}]}>
          <Text style={{
            color: COLORS.light,
            ...FONTS.h4
          }}>
            {selectedMovie?.details?.age}
          </Text>
        </View>
        <View style={[styles.categoryContainer,{paddingHorizontal: SIZES.padding}]}>
          <Text style={{
            color: COLORS.light,
            ...FONTS.h4
          }}>
            {selectedMovie?.details?.genre}
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          <Image source={Icons.star} resizeMode="contain" style={{
            width:15,
            height:15
          }}/>
            <Text style={{
              marginLeft: SIZES.base,
              color: COLORS.light,
              ...FONTS.h4
            }}>
              {selectedMovie?.details?.ratings}
            </Text>
        </View>
      </View>
    );
  }

  function renderActiveButton(){
    return(
      <View style={{
        flex:0,
        paddingHorizontal: SIZES.padding,
        justifyContent:"center",
        marginBottom:10
      }}>
        <TouchableOpacity style={{
          height:50,
          alignItems:"center",
          justifyContent:"center",
          marginTop: 18,
          marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
          borderRadius:5,
          backgroundColor: COLORS.errors
        }}>
          <Text style={{color:COLORS.light,...FONTS.body6 }}>
          <Image source={Icons.play} resizeMode="cover" style={{
            width:20,
            height:20,
            tintColor:COLORS.light,
          }}/>&nbsp;
            {selectedMovie?.details?.progress === "0%" ? 'Play Now' : 'Continue Watching'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height:50,
          alignItems:"center",
          justifyContent:"center",
          marginTop:10,
          marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
          borderRadius:5,
          backgroundColor: COLORS.transparentLight
        }}>
          <Text style={{color:COLORS.light,...FONTS.body6 }}>
            WatchList
          </Text>
        </TouchableOpacity>
      </View>      
    );
  }

  function renderEpisodes(){

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    
    return(
        <View style={{
          flexDirection:"column",
          paddingHorizontal: SIZES.padding,
          justifyContent:"center",
          }}>
          <Text style={{
            color: COLORS.light,
            ...FONTS.h3,
            fontWeight:700,
            marginTop:0,
          }}>Episodes</Text>
          <TouchableOpacity onPress={toggleModal} style={{
            height:40,
            width:110,
            paddingHorizontal:8,
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"center",
            marginTop: SIZES.body4,
            marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
            borderRadius:5,
            backgroundColor: "#ffffff15"
          }}>
            <Text style={{color:COLORS.light,...FONTS.body3 }}>
              Season 1
            </Text>
            <Image source={Icons.down_arrow} resizeMode="contain" style={{
              width:20,
              height:20,
              tintColor:COLORS.light,
            }}/>
            <Modal style={{
              backgroundColor:COLORS.transparentDark,
              paddingHorizontal:20,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:5,
              }} isVisible={isModalVisible}>
              <View style={{
                paddingHorizontal: SIZES.padding,
                marginTop:SIZES.body1,
                alignItems:"center",
                justifyContent:"center"
              }}>
                <Text style={{color:COLORS.light,...FONTS.body1,fontWeight:700, marginBottom:10 }}>Season 1</Text>
                <Text style={{color:COLORS.light,...FONTS.body2,fontWeight:600, marginBottom:10 }}>Season 2</Text>
                <Text style={{color:COLORS.light,...FONTS.body2,fontWeight:600, marginBottom:10 }}>Season 3</Text>
                <View style={{
                  paddingVertical: SIZES.h1,
                }}>
                  <TouchableOpacity onPress={toggleModal} style={{
                    height:50,
                    width:50,
                    alignItems:"center",
                    justifyContent:"center",
                    marginVertical:300,
                    marginLeft:30,
                    marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
                    borderRadius:50,
                    backgroundColor: COLORS.light
                  }}>
                    <Image source={Icons.close} resizeMode="cover" style={{
                      width:25,
                      height:25,
                      tintColor:COLORS.dark,
                    }}/>
                  </TouchableOpacity>
                </View>
                
              </View>            
            </Modal>
          </TouchableOpacity>
          
          <FlatList 
            vertical
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.padding
            }}      
            data={Data.trendingNow}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index})=>{
              return(
                <View style={{
                  flexDirection:"column",
                  paddingHorizontal: 2,
              }}>
              <View style={{
                  flexDirection:"row",
                  paddingHorizontal: 2,
              }}>
              <Image source={selectedMovie?.details?.image} resizeMode="cover" style={{
                width: 150,
                height:100,
                borderRadius:4,
                marginBottom: SIZES.font
              }}/>
              <Text style={{
                  color: COLORS.light,
                  ...FONTS.body3,
                  marginLeft: SIZES.font
                }}>
                {selectedMovie?.details?.episodeNo}
              </Text>
              <Text style={{
                  color: COLORS.light,
                  ...FONTS.body3,
                  marginLeft: 5,                  
                }}>
                {selectedMovie?.details?.title}
              </Text>
                <Text style={{
                  color: COLORS.light,
                  marginTop:SIZES.padding,
                  marginLeft:-140,
                  ...FONTS.body5
                }}>
                  {selectedMovie?.details?.duration}
                </Text>
              </View>

                </View>
              )
              }}>
          </FlatList>


          {/* <View style={{
              flexDirection:"row",
              paddingHorizontal: 2,
              justifyContent:"center",
              marginTop: SIZES.base
              }}>
              <Image source={selectedMovie?.details?.episodes?.episodeImage} resizeMode="cover" style={{
                width:"100%",
                opacity:0.9,
                height:SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.5
              }}/>
              <Text style={{
                  color: COLORS.light,
                  ...FONTS.body3
                }}>
                {selectedMovie?.details?.episodes?.episodeNo}
              </Text>
              <Text style={{
                  color: COLORS.light,
                  ...FONTS.body3
                }}>
                {selectedMovie?.details?.episodes?.title}
              </Text>
              <Text style={{
                color: COLORS.light,
                marginTop:SIZES.base,
                ...FONTS.radius
              }}>
                {selectedMovie?.details?.episodes?.duration}
              </Text>              */}
              {/* <ImageBackground source={selectedMovie?.details?.image} resizeMode="cover" style={{
                width:"100%",
                opacity:0.9,
                height:SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.5
              }}>
              <View style={{
                flex:1,
                justifyContent:"flex-end",
              }}>
                <LinearGradient 
                  start={{x:0, y:0}} 
                  end={{x:0, y:1}} 
                  colors={["transparent", "#000"]} 
                  style={{
                  width:"100%",
                  height:"150",
                  alignItems:"center",
                  justifyContent:"center",
                }}>
                <Text style={{
                  color: COLORS.light,
                  ...FONTS.body3
                }}>
                  {selectedMovie?.details?.season}
                </Text>
                <Text style={{
                  color: COLORS.light,
                  marginTop:SIZES.base,
                  ...FONTS.h1
                }}>
                  {selectedMovie?.name}
                </Text>
                </LinearGradient>
              </View>
              </ImageBackground> */}
          {/* </View> */}
        </View>
    );
  }

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.dark}}>
        {renderHeaderSection()}
        {renderCategoryAndRatings()}
        {renderActiveButton()}
      <ScrollView 
      contentContainerStyle={{
          backgroundColor: COLORS.dark,
          marginTop: 5
        }}
        style={{
          backgroundColor: COLORS.dark,
        }}>    
        {renderEpisodes()}
      </ScrollView>     
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  categoryContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray
  }
})

export default MovieDetails;
