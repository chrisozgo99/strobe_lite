import {createStackNavigator} from 'react-navigation-stack';

import LandingScreen from '_scenes/strobelite/landing';
import ColorsScreen from '_scenes/strobelite/colors';
import TimeConstraintsScreen from '_scenes/strobelite/time_constraints';
import StrobeScreen from '_scenes/strobelite/strobe';

const StrobeLiteNavigatorConfig = {
    initialRouteName: 'Landing',
    header: null,
    headerMode: 'none',
    defaultNavigationOptions: {
        gestureEnabled: false,
    },
};

const RouteConfigs = {
    Landing: {
        screen: LandingScreen,
    },
    Colors: {
        screen: ColorsScreen,
    },
    TimeConstraints: {
        screen: TimeConstraintsScreen,
    },
    Strobe: {
        screen: StrobeScreen,
    },
};

const StrobeLiteNavigator = createStackNavigator(
    RouteConfigs,
    StrobeLiteNavigatorConfig,
);

export default StrobeLiteNavigator;
