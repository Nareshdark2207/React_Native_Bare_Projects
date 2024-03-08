import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: '#4096FE',
    errors: '#FF002E',
    light: '#fff',
    dark: '#000',
    gray: '#464646',
    mildGray: '#363636',
    lightGray: '#dedede',
    transparentLight: '#ffffff33',
    transparentDark: '#00000066',
};

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    duration: 12,
    padding: 24,

    //font sizes
    largeText: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    body6: 20,

    //app dimensions
    width,
    height
};

export const FONTS = {
    largeText: { fontFamily: "Montserrat-Black", fontSize: SIZES.largeText },
    h1: { fontFamily: "Montserrat-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Montserrat-Medium", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    body6: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body6, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;