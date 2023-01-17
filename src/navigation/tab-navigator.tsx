import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import colors from '@/ui/theme/colors';

import { ScaleSize, Spacing } from '@/configs';
import { Home } from '@/screens/home';
import { Style } from '@/screens/style';
import {
  CallCalling,
  Gift,
  HomeHashtag,
  LikeShapes,
  ProfileCircle,
} from 'iconsax-react-native';
import { Feed, Onboarding, Settings } from '@/screens';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { FeedNavigator } from './feed-navigator';
import { HomeNavigator } from './home-navigator';
type TabParamList = {
  Home: undefined;
  Style: undefined;
  FeedNavigator: undefined;
  Settings: undefined;
  Order: undefined;
  Service: undefined;
  Gifts: undefined;
  Profile: undefined;
  Calling: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  const width = 160;
  const height = 160;
  const r = width / 6;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarActiveTintColor: colors.primary[700],
        tabBarInactiveTintColor: colors.neutral[600],

        tabBarStyle: [
          { backgroundColor: colors.white },
          {
            borderTopWidth: 1,
            borderTopColor: colors.neutral[200],
          },
        ],
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: 'Trang chủ',
            tabBarIcon: (props) => {
              return (
                <HomeHashtag {...props} variant="Bulk" size={ScaleSize(30)} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Service"
          component={FeedNavigator}
          options={{
            title: 'Dịch vụ',
            tabBarIcon: (props) => {
              return (
                <LikeShapes {...props} variant="Bulk" size={ScaleSize(30)} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Calling"
          component={Settings}
          options={{
            title: '',
            tabBarIcon: (props) => {
              return (
                <View>
                  {/* <Canvas style={{ width, height }}>
                    <Group color={'#EDAD93'}>
                      <Group style="stroke" strokeWidth={8}>
                        <Circle cx={3 * r} cy={3 * r} r={r} />
                      </Group>
                    </Group>
                  </Canvas> */}
                  <View
                    width={ScaleSize(60)}
                    height={ScaleSize(60)}
                    style={styles.wrapAvatar}
                  >
                    <View style={styles.scan}>
                      <CallCalling
                        {...props}
                        variant="Bulk"
                        color={'white'}
                        size={ScaleSize(25)}
                      />
                    </View>
                  </View>
                  {/* <View centerH centerV style={styles.scan}>
                    <CallCalling
                      {...props}
                      variant="Bulk"
                      color={'white'}
                      size={ScaleSize(25)}
                    />
                  </View> */}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Gifts"
          component={Style}
          options={{
            title: 'Quà tặng',
            tabBarIcon: (props) => {
              return <Gift {...props} variant="Bulk" size={ScaleSize(30)} />;
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            title: 'Hồ sơ',
            tabBarIcon: (props) => {
              return (
                <ProfileCircle {...props} variant="Bulk" size={ScaleSize(30)} />
              );
            },
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  scan: {
    backgroundColor: colors.baseColor.orange,
    padding: Spacing(3),
    borderRadius: ScaleSize(50),
    shadowColor: colors.baseColor.orange,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    // top: Spacing(10.7),
    // left: Spacing(13.8),
    // position: 'absolute',

    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 20,
  },
  wrapAvatar: {
    borderRadius: 50,
    borderWidth: ScaleSize(7),
    borderColor: '#EDAD93',
    // backgroundColor: Colors.whiteColor,
    justifyContent: 'center',

    alignItems: 'center',
  },
});
//================================================================================================
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import type { RouteProp } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import type { ComponentType } from 'react';
// import * as React from 'react';
// import type { SvgProps } from 'react-native-svg';

// import { Settings, Style } from '@/screens';
// import {
//   Feed as FeedIcon,
//   Settings as SettingsIcon,
//   Style as StyleIcon,
//   Home as HomeIcon,
// } from '@/ui';
// import colors from '@/ui/theme/colors';

// import { FeedNavigator } from './feed-navigator';
// import { Home } from '@/screens/home';
// import { HomeHashtag, Stickynote } from 'iconsax-react-native';
// import { ScaleSize } from '@/configs';

// type TabParamList = {
//   Home: undefined;
//   Style: undefined;
//   FeedNavigator: undefined;
//   Settings: undefined;

// };

// type TabType = {
//   name: keyof TabParamList;
//   component: ComponentType<any>;
//   label: string;
// };

// type TabIconsType = {
//   [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
// };

// const Tab = createBottomTabNavigator<TabParamList>();

// const tabsIcons: TabIconsType = {
//   Home: (props: SvgProps) => <HomeIcon {...props} />,
//   Style: (props: SvgProps) => <StyleIcon {...props} />,
//   FeedNavigator: (props: SvgProps) => <FeedIcon {...props} />,
//   Settings: (props: SvgProps) => <SettingsIcon {...props} />,
// };
// export type TabList<T extends keyof TabParamList> = {
//   navigation: NativeStackNavigationProp<TabParamList, T>;
//   route: RouteProp<TabParamList, T>;
// };

// const tabs: TabType[] = [
//   {
//     name: 'Home',
//     component: Home,
//     label: 'Home',
//   },
//   {
//     name: 'Style',
//     component: Style,
//     label: 'Style',
//   },
//   {
//     name: 'FeedNavigator',
//     component: FeedNavigator,
//     label: 'Feed',
//   },
//   {
//     name: 'Settings',
//     component: Settings,
//     label: 'Settings',
//   },
// ];

// type BarIconType = {
//   name: keyof TabParamList;
//   color: string;
// };

// const BarIcon = ({ color, name, ...reset }: BarIconType) => {
//   const Icon = tabsIcons[name];
//   return <Icon color={color} {...reset} />;
// };

// export const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         // eslint-disable-next-line react/no-unstable-nested-components
//         tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
//         tabBarActiveTintColor: colors.primary[700],
//         tabBarInactiveTintColor: colors.neutral[600],
//         tabBarStyle: [
//           { backgroundColor: colors.white },
//           { borderTopWidth: 1, borderTopColor: colors.neutral[200] },
//         ],
//       })}
//     >
//       <Tab.Group
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         {tabs.map(({ name, component, label }) => {
//           return (
//             <Tab.Screen
//               key={name}
//               name={name}
//               component={component}
//               options={{
//                 title: label,
//               }}
//             />
//           );
//         })}
//       </Tab.Group>
//     </Tab.Navigator>
//   );
// };
