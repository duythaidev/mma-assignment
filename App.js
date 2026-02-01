import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  GoldScreen,
  GameScreen,
} from "./components/screens/SimpleScreen";
import AllAppsScreen from "./components/screens/AllAppsScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import { Image } from "expo-image";

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName, focused) => {
  const iconMap = {
    Home: {
      active: require("./assets/icons/icon_bot_nav_home.svg"),
      inactive: require("./assets/icons/icon_bot_nav_home.svg"),
    },
    AllApps: {
      active: require("./assets/icons/icon_bot_nav_allapp_active.svg"),
      inactive: require("./assets/icons/icon_bot_nav_allapp.svg"),
    },
    Gold: {
      active: require("./assets/icons/ic_gold_point_recognize_disable.svg"),
      inactive: require("./assets/icons/ic_gold_point_recognize_disable.svg"),
    },
    Game: {
      active: require("./assets/icons/icon_bot_nav_game.svg"),
      inactive: require("./assets/icons/icon_bot_nav_game.svg"),
    },
    Profile: {
      active: require("./assets/icons/ic_icon_bot_nav_profile_active.svg"),
      inactive: require("./assets/icons/ic_icon_bot_nav_profile.svg"),
    },
  };

  return focused ? iconMap[routeName].active : iconMap[routeName].inactive;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconSource = getTabIcon(route.name, focused);

            return (
              <Image
                source={iconSource}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#eee",
            paddingBottom: 8,
            paddingTop: 0,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="AllApps"
          component={AllAppsScreen}
          options={{ title: "All Apps" }}
        />
        <Tab.Screen name="Gold" component={GoldScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
