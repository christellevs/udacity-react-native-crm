import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import ListRegions from "../screens/ListRegions";
import NewCustomer from "../screens/NewCustomer";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="List of Regions" component={ListRegions} />
        <Stack.Screen name="New Customer Form" component={NewCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
