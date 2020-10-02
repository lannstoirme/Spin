import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Image, Card } from 'react-native-elements';
import axios from 'axios';


//const steps = 10000;

//const bmi = 32;

// get datetime const datetime = getdatetime();

// pulserate

// oxygensat

// temperature

// systolicpressure

// diastolicpressure

// post these to API URL using Axios

export default class Measure extends Component {
    constructor(){
        super();

        this.State={
            pulseRateCurrent : 1
        }
    }

    GeneratePulseRate=()=>
    {
        var PulseRate = Math.floor(Math.random() * 100) + 1 ;
        if (PulseRate > 180)
        {
            PulseRate = PulseRate - 60;
        }
        else (PulseRate < 50)
        {
            PulseRate = PulseRate + 20;
        }

        this.setState({
            pulseRateCurrent : PulseRate
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom: 10, fontSize: 25}}>The pulse rate is: {this.GeneratePulseRate}</Text>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}><Text style={{fontSize: 25}}>Go Back Home</Text></TouchableOpacity>
            </View>
        )
    }
}