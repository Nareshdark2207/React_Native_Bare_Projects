import React from 'react'
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme'

const HeaderButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity style={{
        alignItems:"center",
        justifyContent: "center",
        width:50,
        height:50,
        borderRadius:10,
        backgroundColor: COLORS.transparentDark
    }}onPress={onPress}>
    {icon}
    </TouchableOpacity>
  );
};

export default HeaderButton