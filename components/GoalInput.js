import React,{useState} from 'react'
import { StyleSheet,View,TextInput,Button, Modal } from 'react-native';

const GoalInput=props =>{
    const [enteredGoal,setEnteredGoal]=useState('');

    const goalInputHandler= (enteredText) =>{
        setEnteredGoal(enteredText);
      };

      addHandler= () =>{
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
      }

    return(
        <Modal visible={props.visible} animationType='slide' >
        <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.textInput}
        onChangeText={goalInputHandler} value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title="Title" color="red" onPress={props.onCancel}/></View>
        <View style={styles.button}><Button title='ADD' onPress={addHandler}/></View>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
      flex:1, //full space take
        justifyContent:'center',
        alignItems:'center'
      },
      textInput:{
        width:'80%' ,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        margin:10
      },
      buttonContainer:{
        flexDirection:row,
        justifyContent:'space-between',
        width:'40%'
      },
      button:{
        width:'40%'
      }
})

export default GoalInput;