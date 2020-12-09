/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ScrollView} from 'react-native';

function StrobeScienceMessage(props) {
    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
                borderRadius: 30,
                marginHorizontal: '3%',
                marginTop: '3%',
                height: '74%',
            }}>
            <View style={{marginVertical: '2.6%'}}>
                <Text
                    style={{
                        color: 'rgb(141, 58, 226)',
                        fontSize: 24,
                        fontFamily: 'Rubik',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}>
                    Training your brain
                </Text>
            </View>
            <View style={{marginHorizontal: '4%'}}>
                <Text style={{fontSize: 15, fontFamily: 'Rubik'}}>
                    {'\t'}
                    It may seem quite obvious to say that your brain matters in
                    sports. As important as it is to have superior athletic
                    ability, if you can't think then you will find yourself on
                    the bench. But how often are you training your brain when
                    you workout?{'\n\n'}
                    {'\t'}Today's training techniques focus almost exclusively
                    on physical training; making athletes bigger, faster, and
                    stronger, along with refining muscle memory specific to
                    their sport. Indeed, these are very important aspects of
                    athletic development and success without it is impossible.
                    But the brain is the captain of the ship. Your success as an
                    athlete hinges on being able to apply your skills in-game,
                    an ability that comes not from your body, but from your
                    mind.
                </Text>
            </View>
            <View style={{marginVertical: '2.6%'}}>
                <Text
                    style={{
                        color: 'rgb(141, 58, 226)',
                        fontSize: 24,
                        fontFamily: 'Rubik',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}>
                    Endless possibilities
                </Text>
            </View>
            <View style={{marginHorizontal: '4%'}}>
                <Text style={{fontSize: 15, fontFamily: 'Rubik'}}>
                    {'\t'}All sports share the basic concept of being
                    reaction-based. Good athletes are able to react quickly and
                    accurately to the situation in front of them over and over
                    again. This crucial trait was previously something that
                    could only be developed in scrimmages and practices, due to
                    the fact that these are the best simulators of actual games.
                    However, with StrobeLite, it is now possible to train your
                    mind to react and make accurate decisions in
                    skill-development training sessions.
                </Text>
            </View>
            <View style={{marginVertical: '2.6%'}}>
                <Text
                    style={{
                        color: 'rgb(141, 58, 226)',
                        fontSize: 24,
                        fontFamily: 'Rubik',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}>
                    How it works
                </Text>
            </View>
            <View style={{marginHorizontal: '4%', marginBottom: '5%'}}>
                <Text style={{fontSize: 15, fontFamily: 'Rubik'}}>
                    {'\t'}StrobeLite works by forcing the athletes to make
                    splitsecond decisions that simulate real games. Its users
                    are training their brains to instinctively react to any
                    situation thrown at them.
                    {'\n'}{'\n'}
                    {'\t'}The athlete, trainer, or coach customizes the workout
                    by selecting a certain amount of colors they want to use in
                    their drill. Each color represents an action that they would
                    use in their sport. The user then customizes how long each
                    color will flash, the interval time between each flash, and
                    the total time they want to be running the drill. Of the
                    colors selected, StrobeLite will output a random color,
                    forcing the athlete to react, rather than anticipate their
                    decision. Just like the game!{'\n'}{'\n'}
                    {'\t'}StrobeLite is revolutionizing the modern day approach
                    to sports training. While we cannot guarantee that it will
                    make you an overnight success, we can guarantee that
                    consistent use over an extended period of time will have you
                    making plays you could never make before and seeing your
                    sport through a completely different perspective. Have fun
                    and Happy Strobing!
                </Text>
            </View>
        </ScrollView>
    );
}

export default StrobeScienceMessage;
