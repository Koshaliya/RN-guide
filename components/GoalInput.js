import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const GoalInput=props =>{
    const [enteredGoal,setEnteredGoal]=useState('');
    const goalInputHandler= (enteredText) =>{
        setEnteredGoal(enteredText);
      };
    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.textInput}
        onChangeText={goalInputHandler} value={enteredGoal}
        />
        <Button title='ADD'
        onPress={props.addGoalHandler.bind(this,enteredGoal)}
        />
      </View>
          
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      textInput:{
        width:'80%' ,
        borderColor:'black',
        borderWidth:1,
        padding:10
      },
})

export default GoalInput;