import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

export default class Question extends React.Component
{
    constructor(props){
    super(props)
    this.state={

    }
    }

    render() {
        return(
            <View>
                <Text>{this.props.Q}</Text>
            </View>
        )
    }
}