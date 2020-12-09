import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import StrobeLiteNavigator from './strobelite-navigator/strobelite-navigator';
import StrobeScienceScreen from '_scenes/strobescience';
import CommunityNavigator from './community-navigator/community-navigator';
import TutorialsScreen from '_scenes/tutorials';

const RootNavigator = createSwitchNavigator(
    {
        StrobeLite: StrobeLiteNavigator,
        StrobeScience: {
            screen: StrobeScienceScreen,
        },
        Community: CommunityNavigator,
        Tutorials: {
            screen: TutorialsScreen,
        },
    },
    {
        initialRouteName: 'StrobeLite',
    },
);

export default createAppContainer(RootNavigator);
