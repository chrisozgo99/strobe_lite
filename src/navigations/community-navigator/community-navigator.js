import {createStackNavigator} from 'react-navigation-stack';

import CommunityScreen from '_scenes/community/community';
import SportsScreen from '_scenes/community/sports';
import VideosScreen from '_scenes/community/videos';

const StrobeLiteNavigatorConfig = {
    initialRouteName: 'Community',
    header: null,
    headerMode: 'none',
    defaultNavigationOptions: {
        gestureEnabled: false,
    },
};

const RouteConfigs = {
    Community: {
        screen: CommunityScreen,
    },
    Sports: {
        screen: SportsScreen,
    },
    Videos: {
        screen: VideosScreen,
    },
};

const StrobeLiteNavigator = createStackNavigator(
    RouteConfigs,
    StrobeLiteNavigatorConfig,
);

export default StrobeLiteNavigator;
