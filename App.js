import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  
  const [courseGoals,setCourseGoals]=useState([]);

  const addGoalHandler= goalTitle =>{
    setCourseGoals(courseGoals=>[...courseGoals,{key:Math.random().toString(),value:goalTitle}]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList key={(item,index)=>item.id}  data={courseGoals} renderItem={itemData => 
        <GoalItem title={itemData.item.value} />}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
  
})


