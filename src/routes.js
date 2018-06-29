import { TabNavigator } from "react-navigation";

import Contacts from "./screens/Contacts";
import Favorites from "./screens/Favorites";
import User from "./screens/User";

export default TabNavigator({
  Contacts: {
    screen: Contacts
  },
  Favorites: {
    screen: Favorites
  },
  User: {
    screen: User
  }
});
