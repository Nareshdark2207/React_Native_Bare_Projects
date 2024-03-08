import React from 'react';
import {View, Text, Image, StyleSheet} from "react-native";
import { COLORS, SIZES } from '../constants/theme';

const Profile = ({profile}) => {
    if(profile.length <= 3){
        return (
            <View style={styles.container}>
                {profile.map((item, index) => {
                    return(
                    <View 
                    key={'profile-${index}'}
                    style={index == 0 ? null : {marginLeft: -15}}>
                    <Image 
                    source={item.profile}
                    resizeMode="cover"
                    style={styles.profileImage}/>        
                    </View>
                );
            })}
            </View>
        );
    }
    else{
        return(
            <View style={styles.container}>
                {profile.map((item, index) => {
                    if(index<=2){
                        return(
                        <View key={'profile-${index}'}
                        style={index == 0 ? null: {marginLeft: -15}}>
                        <Image 
                        source={item.profile}
                        resizeMode='cover'
                        style={styles.profileImage}/>        
                        </View>
                    );
                }
            })}
            <Text style={{
                marginLeft: SIZES.base,
                color: COLORS.light,
            }}> + {profile.length - 3}
            </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius:20,
        borderWidth:2,
        borderColor: COLORS.dark,
    },
});

export default Profile;