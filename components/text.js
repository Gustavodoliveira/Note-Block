import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextView = ({ children, className }) => {
    return (
        <View style={style.container}>
            <View style={className}>
                <Text style={style.textStyle}>
                    {children}
                </Text>
            </View>
        </View>
    )
}

export default TextView

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",

    },
    textStyle: {
        color: "blue",
        fontSize: 20,
    }
})