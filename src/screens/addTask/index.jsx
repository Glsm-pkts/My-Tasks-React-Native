import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { Button, Input, RadioGroup, Radio } from '@ui-kitten/components';
import CustomDatePicker from '../../components/ui/customDatePicker';
import taskSchema from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { status } from '../../utils/contant';
import uuid from "react-native-uuid";

const AddTask = () => {

  //!setItem ile localstorageye kaydettik
  const saveTask = async values => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (error) {
      console.log(error);
    }
  };



  return (
  <View style={styles.container}> 
      <Formik
        initialValues={{
          id:uuid.v4(),
          title:"", 
          description:"", 
          startDate:null, 
          endDate:null,
          category:null,
          status:status.ONGOING,
          
        }}
        validationSchema={taskSchema}
      onSubmit={values => saveTask(values) }
      >

{({handleChange,handleSubmit, values, setFieldValue, errors} ) =>(
<View>
  <Input 
  style={{marginVertical:10}}
  size='large'
  value={values.title}
  label='Title'
  placeholder=''
  onChangeText={handleChange("title")}
  status= {errors.title ? "danger" : "success"}
  caption={errors.title}

  />
  <Input 
  multiline
  style={{marginVertical:10}}
  size='large'
  value={values.description}
  label={'Description'}
  placeholder=''
  onChangeText={handleChange("description")}
  status= {errors.description ? "danger" : "success"}
  caption={errors.description}


  />
  
  <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />

<CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />

<RadioGroup  
selectedIndex={values.category}
//!seçenek sunduğumuzda setFieldValue kullanıyoruz
onChange={index=>setFieldValue('category', index)}
>
  <Radio status='success'> Software </Radio>
  <Radio status='success'> Design</Radio>
  <Radio status='success'> Operation </Radio>
</RadioGroup>

            <Button style={{marginTop:30}}
            onPress={handleSubmit}
            status="success"> CREATE </Button>
</View>


)}



      </Formik>
      </View>
    
  )
}

export default AddTask

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:15
  }
})