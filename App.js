import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./assets/Screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultnavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
