import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import Contacts from "./screens/Contacts";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Profile from "./screens/Profile";
import Options from "./screens/Options";

import colors from "./utils/colors";

const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

// ** UNCOMMENT AND ADD TABNAVIGATOR IMPORT to switch to tabs
// const getTabBarIcon = icon => ({ tintColor }) => (
//   <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
// );

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
      drawerIcon: getDrawerItemIcon("list")
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
      drawerIcon: getDrawerItemIcon("star")
    }
  }
);

const UserStack = StackNavigator(
  {
    User: {
      screen: User
    },
    Options: {
      screen: Options
    }
  },
  {
    mode: "modal",
    initialRouteName: "User",
    navigationOptions: {
      drawerIcon: getDrawerItemIcon("person")
    }
  }
);

export default DrawerNavigator(
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
    initialRouteName: "Contacts"
    // tabBarPosition: "bottom",
    // tabBarOptions: {
    //   style: {
    //     backgroundColor: colors.greyLight
    //   },
    //   showLabel: false,
    //   showIcon: true,
    //   activeTintColor: colors.blue,
    //   inactiveTintColor: colors.greyDark,
    //   renderIndicator: () => null
    // }
  }
);
