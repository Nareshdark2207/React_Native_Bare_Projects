/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback, ImageBackground, Animated, StatusBar} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import Images from '../constants/images';
import Icons from '../constants/icons';
import Data from '../constants/data';
import icons from '../constants/icons';
import Profile from '../components/Profile';
import ProgressBar from '../components/ProgressBar';

const Home = ({navigation}) => {

const newSeasonScrollX = useRef(new Animated.Value(0)).current;

function renderHeader(){
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: SIZES.padding,
      paddingTop: SIZES.base,
    }}>
      <TouchableOpacity style={{
        alignItems:"center",
        justifyContent: "center",
        width:50,
        height:50
      }}>
      <Image source={Images.profile_photo} style={{
        width:40,
        height:40,
        borderRadius:20
      }}/>
      </TouchableOpacity>

      <TouchableOpacity style={{
      alignItems:"center",
      justifyContent: "center",
      width:50,
      height:50
    }}>
    <Image source={Icons.airplay} style={{
      width:30,
      height:30,
      tintColor: COLORS.errors,
    }}/>
    </TouchableOpacity>
    </View>
  )
}

function renderSeasonSection(){
  return (
    <Animated.FlatList 
      horizontal
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={SIZES.width}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={0}
      contentContainerStyle={{
        marginTop: SIZES.radius
      }}
      data={Data.newSeason}
      keyExtractor={(item)=>item.id.toString()}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: newSeasonScrollX}}}],
        {useNativeDriver: false},
      )}
      renderItem={({item,index})=>{
        return (
          <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("MovieDetails",{
              selectedMovie: item,
            })
          }}>
          <View style={{
            width: SIZES.width,
            alignItems:"center",
            justifyContent:"center",
          }}>
            <ImageBackground source={item.thumbnail} resizeMode="cover" style={{
              width: SIZES.width* 0.85,
              height: SIZES.width* 1.05,
              justifyContent:"flex-end",
            }} 
            imageStyle = {{
              borderRadius: 10,
              opacity: 0.8
            }}>
            <View style={{
              flexDirection: "row",
              height: 60,
              width: "100%",
              marginBottom: SIZES.radius,
              paddingBottom: SIZES.radius
            }}>
              <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent:"center"
              }}>
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 150,
                  height: 40,
                  flexDirection:"row",
                  borderRadius: 5,
                  marginLeft: 10,
                  marginRight:10,
                  backgroundColor: COLORS.light
                }}>
                <Image source={Icons.play} resizeMode="contain" style={{
                  width:20,
                  height:20,
                  tintColor: COLORS.dark
                }}/>
                <Text style={{
                  flexDirection: "row",
                  marginLeft: SIZES.base,
                  color: COLORS.dark,
                  fontWeight: 700,
                  ...FONTS.h3
                }}>
                  Play Now
                </Text>
                </View>
                {item.stillWatching.length > 0 && (
                  <View style={{
                    justifyContent: "center"
                  }}>
                    <Text 
                    style={{
                      color: COLORS.light,
                      fontWeight: 700,
                      ...FONTS.h4,
                    }}>
                    Still Watching
                    </Text>
                    <Profile profile={item.stillWatching}/>
                  </View>
                )}
              </View>
            </View>
            </ImageBackground>
          </View>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
}

function renderDots(){
  const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);
  return(
    <View style={{
      marginTop: SIZES.padding,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }}>
  {Data.newSeason.map((item, index)=>{
      const opacity = dotPosition.interpolate({
        inputRange:[index-1, index, index+1],
        outputRange:[0.3,1,0.3],
        extrapolate:"clamp"
      })

      const dotWidth = dotPosition.interpolate({
        inputRange:[index-1, index, index+1],
        outputRange:[6,20,6],
        extrapolate:"clamp"
      })

      const dotColor = dotPosition.interpolate({
        inputRange:[index-1, index, index+1],
        outputRange:[COLORS.lightGray, COLORS.errors, COLORS.lightGray],
        extrapolate:"clamp"
      })
      return (
        <Animated.View
        key={'dot-${index}'}
        opacity={opacity}
        style={{
          borderRadius: SIZES.radius,
          marginHorizontal: 3,
          width: dotWidth,
          height: 6,
          backgroundColor: dotColor,
        }}></Animated.View>
      )
    })
  }
    </View>
  )
}

function renderContinueWatchingSeason(){
  return(
    <View style={{
      marginTop: SIZES.padding,
    }}>
      <StatusBar hidden={true}/>
      <View style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        alignItems: "center"
      }}>
        <Text style={{
          flex: 1,
          color: COLORS.light, ...FONTS.body6}}>
          Continue Watching
        </Text>
        <Text style={{
          color: COLORS.errors, ...FONTS.base, marginRight:5}}>See All</Text>
        <Image source={icons.right_arrow} style={{
          width:14,
          height:14,
          tintColor: COLORS.errors,
          
        }}/>
      </View>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: SIZES.padding
      }}
      data={Data.continueWatching}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item, index})=>{
        return(
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("MovieDetails", {
            selectedMovie:item
          })}>
            <View style={{
              marginLeft: index==0?SIZES.padding: 20,
              marginRight: index==Data.continueWatching.length-1 ?SIZES.padding: 0,
            }}>
              <Image source={item.thumbnail} resizeMode='cover' style={{
                width: SIZES.width/3,
                height:SIZES.width/3,
                borderRadius:8
              }}/>
              <Text style={{
                marginTop: SIZES.base,
                color: COLORS.light,
                ...FONTS.h4
              }}>{item.name}</Text>
              <ProgressBar containerStyle={{
                marginTop: SIZES.body4
              }}barStyle={{
                height:3
              }}barPercentage={item.overallProgress}>
              </ProgressBar>
            </View>
          </TouchableWithoutFeedback>
        )
      }}>
      </FlatList>
    </View>
  );
}

function renderTrendingNow(){
  return(
    <View style={{
      marginTop: SIZES.padding,
    }}>
      <StatusBar hidden={true}/>
      <View style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        alignItems: "center"
      }}>
        <Text style={{
          flex: 1,
          color: COLORS.light, ...FONTS.body6}}>
          Trending Now
        </Text>
        <Text style={{
          color: COLORS.errors, ...FONTS.base, marginRight:5}}>See All</Text>
        <Image source={icons.right_arrow} style={{
          width:14,
          height:14,
          tintColor: COLORS.errors,
        }}/>
      </View>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: SIZES.padding
      }}
      data={Data.trendingNow}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item, index})=>{
        return(
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("MovieDetails", {
            selectedMovie:item
          })}>
            <View style={{
              marginLeft: index==0?SIZES.padding: 20,
              marginRight: index==Data.trendingNow.length-1 ?SIZES.padding: 0,
            }}>
              <Image source={item.thumbnail} resizeMode='cover' style={{
                width: SIZES.width/3,
                height:SIZES.width/2,
                borderRadius:8
              }}/>
            </View>
          </TouchableWithoutFeedback>
        )
      }}>
      </FlatList>
    </View>
  )
}

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.dark}}>
      {renderHeader()}
      <ScrollView contentContainerStyle={{
        paddingBottom:100,
      }}>
      {renderSeasonSection()}
      {renderDots()}
      {renderContinueWatchingSeason()}
      {renderTrendingNow()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
