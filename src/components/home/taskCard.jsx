import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { TASKDETAIL } from '../../utils/routes';
import { taskValues } from '../../utils/contant';
import { setCategory } from '../../utils/function';


const TaskCard = ({item}) => {
  const navigation = useNavigation();
    return (
      <Pressable style={styles.container}
      onPress={()=>navigation.navigate(TASKDETAIL,{item:item})}> 

        <View style={{backgroundColor:taskValues.find(task => task.status === item.status)
          ?.color,
          padding:3,
          borderRadius:5
        }}>
{ taskValues.find(task=> task.status === item?.status)?.icon}
        </View> 

        <View style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {item.description}
        </Text>
        <View>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {moment(item.startDate).format('MM/DD/YYYY')}-
            {moment(item.endDate).format('MM/DD/YYYY')}
          </Text>
        </View>
      </View>

      <View>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {setCategory(item.category)}
        </Text>
      </View>

      

        </Pressable>
      );
    };
    
export default TaskCard

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding:20,
      margin:10,
      backgroundColor:'#ffff',
      borderRadius:5,
      shadowColor: "#000",
      flexDirection: 'row',
      alignItems: 'center',
    }
})