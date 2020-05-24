import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import Question from './Question.js';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  render () {
  return (
    <ScrollView>
      <Question 
      Q='What other places have you been to before?'
      survey='Options'
      option1='Yes'
      option2='No'
      />
      
      <Question
      survey='UserInput'
      Q='Do you have any dietary constraints?'
      placeholder='Enter Here:'
      />
    </ScrollView>
  );
} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
