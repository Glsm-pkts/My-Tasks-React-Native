import AddTask from "../screens/addTask";
import Home from "../screens/home"
import TaskDetail from "../screens/taskDetail";
import { ADDTASKS,  TASKDETAIL, TASKS } from "../utils/routes"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

const RoutNavigator = () => {
  return (
    <Stack.Navigator>

     <Stack.Screen  name={TASKS} component={Home}/>
     <Stack.Screen  name={ADDTASKS} component={AddTask}/>
     <Stack.Screen  name={TASKDETAIL} component={TaskDetail}/>
     
    </Stack.Navigator>
  )
}

export default RoutNavigator