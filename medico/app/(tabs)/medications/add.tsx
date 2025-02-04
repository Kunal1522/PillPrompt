import { useState } from "react";
import { TouchableOpacity, View,Text,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";


export default function AddMedicationScreen()
{
    return (
        <View>
        <LinearGradient colors={["#1a8e2d","146822"] } start={{x:0,y:0} } end={{x:1,y:1}}/>
        <View>
            <TouchableOpacity>
                <Ionicons name="chevron-back" size={28} color={'1a8e2d'}/>
                <Text>New Medication </Text>

            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>Hi</Text>
            </View>
        </ScrollView>
        </View>
    )
}