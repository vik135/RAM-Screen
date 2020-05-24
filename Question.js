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
                {
                    this.props.survey=='Options'
                    ?
                    <View>
                        <Text>{this.props.option1}</Text>
                        <Text>{this.props.option2}</Text>
                    </View>
                    :
                    <View>
                        <TextInput placeholder={this.props.placeholder} />
                    </View>
                }
            </View>
        )
    }
}