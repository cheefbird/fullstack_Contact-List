import { StackNavigator } from "react-navigation";

import Contacts from "./src/screens/Contacts";
import Profile from "./src/screens/Profile";

export default StackNavigator({
  Contacts: {
    screen: Contacts
  },
  Profile: {
    screen: Profile
  }
});
