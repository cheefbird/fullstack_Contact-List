import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import Contacts from "./screens/Contacts";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Profile from "./screens/Profile";

import colors from "./utils/colors";

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const ContactsStack = StackNavigator(
  {
    Contacts: {
      screen: Contacts
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Contacts",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("list")
    }
  }
);

const FavoritesStack = StackNavigator(
  {
    Favorites: {
      screen: Favorites
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Favorites",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("star")
    }
  }
);

const UserStack = StackNavigator(
  {
    User: {
      screen: User
    }
  },
  {
    initialRouteName: "User",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("person")
    }
  }
);

export default TabNavigator(
  {
    Contacts: {
      screen: ContactsStack
    },
    Favorites: {
      screen: FavoritesStack
    },
    User: {
      screen: UserStack
    }
  },
  {
    initialRouteName: "Contacts",
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null
    }
  }
);
