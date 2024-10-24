import { NavigationContainer } from "@react-navigation/native";
import RoutNavigator from "./src/router/routNavigator";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

      <NavigationContainer>
      <RoutNavigator/>
    </NavigationContainer>

    </ApplicationProvider>
  )
}

export default App