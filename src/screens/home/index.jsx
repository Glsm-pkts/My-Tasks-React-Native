import { StyleSheet, Text, View, FlatList , RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatActionButton from "../../components/ui/floatActionButton"
import { ADDTASKS } from '../../utils/routes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';

const Home = ({ navigation }) => {

const [refreshing, setRefreshing] = useState(false);
const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    const myTask = [];
try{
const task = await AsyncStorage.getItem('task');
myTask.push(JSON.parse(task));
console.log(task);
setTasks(myTask);
}catch(error){
console.log(error);
}
}
  useEffect(() => {
    getTask();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);// yenileme bailadığında
    getTask();//görevleri yeniden al
    setRefreshing(false);// yenileme bittiğinde resrefing stattini false yap
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={tasks}
      renderItem={({item}) =><TaskCard item={item}/>}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home

const styles = StyleSheet.create({})