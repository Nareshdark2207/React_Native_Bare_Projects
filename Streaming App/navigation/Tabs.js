import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TabIcon from '../components/TabIcon';
import Icons from '../constants/icons';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator 
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { 
                position: 'absolute', 
                bottom: 0,
                left:0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.dark,
                borderTopColor: 'transparent',
                height:50,
                
            },
            }}>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    tabBarIcon: ({focused})=> {
                    return <TabIcon focused={focused} icon={Icons.home}/>
                },
            }}
            />             
            <Tab.Screen 
                name='Play' 
                component={Home} 
                options={{
                    tabBarIcon:({focused})=>{
                    return <TabIcon focused={focused} icon={Icons.play_button}/>
                },
            }}/> 
            <Tab.Screen name='Search' component={Home} 
            options={{
                tabBarIcon:({focused})=>{
                return <TabIcon focused={focused} icon={Icons.search}/>
                },
            }}/>
            <Tab.Screen 
                name='Profile' 
                component={Home} 
                options={{
                tabBarIcon:({focused})=>{
                return <TabIcon focused={focused} icon={Icons.user}/>
                },
            }}/>          
        </Tab.Navigator>
    );
};

export default Tabs;
