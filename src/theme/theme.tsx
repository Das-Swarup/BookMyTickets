interface Spacing {
    s_2: Number,
    s_4: Number,
    s_8: Number,
    s_10: Number,
    s_12: Number,
    s_15: Number,
    s_16: Number,
    s_18: Number,
    s_20: Number,
    s_22: Number,
    s_24: Number,
    s_28: Number,
    s_32: Number,
    s_36: Number,
}

export const SPACING: Spacing={
    s_2: 2,
    s_4: 4,
    s_8: 8,
    s_10: 10,
    s_12: 12,
    s_15: 15,
    s_16: 16,
    s_18: 18,
    s_20: 20,
    s_22: 22,
    s_24: 24,
    s_28: 28,
    s_32: 32,
    s_36: 36,
}

interface Colors {
    Primary:string,
    Secondary:string,
    Secondary0:string,
    Black:string,
    Black10:string,
    Grey:string,
    DarkGrey: string,
    Yellow:string,
    White15:string,
    White32:string,
    White50:string,
    White75:string,
}

export const COLORS: Colors={
    Primary:"#FFFFFF",
    Secondary:"#FF004D",
    Secondary0:"rgba(255,0,70,0)",
    Black:"#000000",
    Black10:"rgba(0,0,0,0.1)",
    Grey:"#333333",
    DarkGrey: "#0b0b0b",
    Yellow:"#E1CD17",
    White15:"rgba(255,255,255,0.15)",
    White32:"rgba(255,255,255,0.32)",
    White50:"rgba(255,255,255,0.50)",
    White75:"rgba(255,255,255,0.75)",
}

interface FontFamily {
    poppins_black: string,
    poppins_bold: string,
    poppins_extrabold: string,
    poppins_extralight: string,
    poppins_light: string,
    poppins_medium: string,
    poppins_regular: string,
    poppins_semibold: string,
    poppins_thin: string,
}

export const FONTFAMILY: FontFamily={
    poppins_black:"Poppins-Black" ,
    poppins_bold: "Poppins-Bold",
    poppins_extrabold: "Poppins-ExtraBold",
    poppins_extralight: "Poppins-ExtraLight",
    poppins_light: "Poppins-Light",
    poppins_medium: "Poppins-Medium",
    poppins_regular: "Poppins-Regular",
    poppins_semibold: "Poppins-SemiBold",
    poppins_thin: "Poppins-Thin"
}

interface FontSize {
    text_8: Number,
    text_10: Number,
    text_12: Number,
    text_14: Number,
    text_16: Number,
    text_18: Number,
    text_20: Number,
    text_24: Number,
    text_30: Number,
}

export const FONTSIZE:FontSize={
    text_8: 8,
    text_10: 10,
    text_12: 12,
    text_14: 14,
    text_16: 16,
    text_18: 18,
    text_20: 20,
    text_24: 24,
    text_30: 30,
}

interface BorderRadius {
    rounded_4: Number,
    rounded_8: Number,
    rounded_10: Number,
    rounded_15: Number,
    rounded_20: Number,
    rounded_25: Number,
}

export const BORDERRADIUS: BorderRadius ={
    rounded_4: 4,
    rounded_8: 8,
    rounded_10: 10,
    rounded_15: 15,
    rounded_20: 20,
    rounded_25: 25,
}