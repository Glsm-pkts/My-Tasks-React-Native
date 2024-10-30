import { StyleSheet, Text, Pressable, FlatList, View} from 'react-native'
import React from 'react'
import {
    ChartCircle,
    Clock,
    TickCircle,
    CloseCircle,
    ArrowCircleRight2,
  } from 'iconsax-react-native';
import AppColors from '../../theme/color';

const HeaderComponents = ({ongoing, pending, comleted, cancel}) => {
    const tasks = [
        {
          id: 1,
          title: 'Ongoing',
          color: AppColors.ONGOING,
          icon: <ChartCircle size="32" color={AppColors.WHITE} />,
          count: ongoing
          
        },
        {
          id: 2,
          title: 'Pending',
          color: AppColors.PENDING,
          icon: <Clock size="32" color={AppColors.WHITE} />,
          count: pending
          
        },
        {
          id: 3,
          title: 'Complated',
          color: AppColors.COMPLATED,
          icon: <TickCircle size="32" color={AppColors.WHITE} />,
          count: comleted
          
        },
        {
          id: 4,
          title: 'Cancel',
          color: AppColors.CANCEL,
          icon: <CloseCircle size="32" color={AppColors.WHITE} />,
          count: cancel
          
        },
      ];

   const Task = ({item}) => {

    return(
        <Pressable style={{width:"45%", 
        backgroundColor:item.color,
        margin:10,
        padding:10,
        borderRadius:10,
        }}>
            {item.icon}
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginTop:30


            }}>
                <View> 
                <Text style={{
                    color:AppColors.WHITE, 
                    fontSize:14, 
                    fontWeight:"600", 
                    marginTop:5}}
                    >{item.title}</Text>
                        
                <Text style={{
                    color:AppColors.WHITE, 
                    fontSize:16, 
                    fontWeight:"600", 
                    marginTop:5}}>{item.count} Task</Text>
                    </View>
            <View>
                <ArrowCircleRight2 size="24" color={AppColors.WHITE} />
            </View>

            </View>
           
        </Pressable>
    )
   }  
        return (
<View>
    <FlatList
    numColumns={2}
    data={tasks}
    renderItem={({item})=> <Task item={item}/>}
    />
    <View>
        <Text style={{fontSize:19, fontWeight:"500", marginHorizontal:19, margin:10}}>All Task</Text>
    </View>
</View>


        )
      
    
}

export default HeaderComponents

const styles = StyleSheet.create({})