import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  
  const [courseGoals,setCourseGoals]=useState([]);

  const [isAddMode,setIsAddMode]=useState(false)

  const addGoalHandler= goalTitle =>{
    setCourseGoals(courseGoals=>[...courseGoals,{id:Math.random().toString(),value:goalTitle}]);
  };

  const deleteGoalHandler=goalID =>{
    setCourseGoals(courseGoals=>{
      return courseGoals.filter((goal) => goal.id != goalID)
    });
    setIsAddMode(false)
       
  }

  const cancelGoalAddition = () =>{
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
                  <Button title='Add new goal' onPress={() => setIsAddMode(true)}/>

      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAddition}/>
      <FlatList key={(item,index)=>item.id}  data={courseGoals} renderItem={itemData => 
        <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={deleteGoalHandler}/>}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
  
})


