import { StyleSheet, Text, View, FlatList , RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatActionButton from "../../components/ui/floatActionButton"
import { ADDTASKS } from '../../utils/routes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponents from '../../components/home/headerComponents';
import taskSchema from '../../utils/validation';

const Home = ({ navigation }) => {

const [refreshing, setRefreshing] = useState(false);
const [tasks, setTasks] = useState([]);
const [ongoing, setOngoing] = useState();
const [pending, setPending] = useState()
const [comlated, setComlated] = useState()
const [cancel, setCancel] = useState()

  const getTask = async () => {
  
try{
const savedTask = await AsyncStorage.getItem("tasks")
setTasks(JSON.parse(savedTask))

let comlatedCount = 0
let ongoingCount = 0
let pendingCount = 0
let cancelCount = 0

for(const task of JSON.parse(savedTask)){
  if(task.status === 1){
    ongoingCount ++;
  }
  if(task.status === 2){
    pendingCount ++;
  }
  if(task.status === 3){
    comlatedCount ++;
  }
  if(task.status === 4){
    cancelCount ++;
  }
  setOngoing(ongoingCount)
  setPending(pendingCount)
  setComlated(comlatedCount)
  setCancel(cancelCount)
}
  


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
      ListHeaderComponent={
      <HeaderComponents 
        ongoing={ongoing} 
        pending={pending} 
        cancel={cancel} 
        comlated={comlated}
        />}
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