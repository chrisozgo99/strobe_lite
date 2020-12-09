/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import {WebView} from 'react-native-webview';

function BasketballVideos(props) {
    const videoInfo = [
        {
            title: 'Straight Line Drive: 2 Reads',
            link: 'https://www.youtube.com/embed/Okj133dH6os',
        },
        {
            title: 'Straight Line Drive: 3 Reads',
            link: 'https://www.youtube.com/embed/5HswsCf4ZBA',
        },
        {
            title: 'Finishing',
            link: 'https://www.youtube.com/embed/xWuUs6a-Ulk',
        },
        {
            title: 'Straight Line Drive: 2 Spots, 3 Reads',
            link: 'https://www.youtube.com/embed/mjRnUO5dIes',
        },
        {
            title: 'Straight Line Drive: 2 Spots, 2 Reads',
            link: 'https://www.youtube.com/embed/QZkIl4GeVJo',
        },
        {
            title: 'Isolation Sizeup: 3 Reads',
            link: 'https://www.youtube.com/embed/moEWr756LFU',
        },
        {
            title: 'Isolation Sizeup: 5 Reads',
            link: 'https://www.youtube.com/embed/e7c1eNTS3dQ',
        },
        {
            title: 'Agility',
            link: 'https://www.youtube.com/embed/5QcuqNnB2uQ',
        },
        {
            title: 'Jab Setp, Dribble Drive: 3 Reads',
            link: 'https://www.youtube.com/embed/RfQ_PmIigFo',
        },
        {
            title: 'Dribble Drive and Kick: 3 Reads',
            link: 'https://www.youtube.com/embed/8rIsgGG8P3c',
        },
        {
            title: 'Pick and Roll: 2 Reads',
            link: 'https://www.youtube.com/embed/BmCsEUUE6v8',
        },
        {
            title: 'Pick and Roll: 3 Reads',
            link: 'https://www.youtube.com/embed/Q7VTpVlk0dU',
        },
        {
            title: 'Off-Ball Screen: 2 Reads',
            link: 'https://www.youtube.com/embed/lv3iFUv0R9Q',
        },
        {
            title: 'Post Moves: Faceup, 2 Reads',
            link: 'https://www.youtube.com/embed/NsI-70-oCX4',
        },
        {
            title: 'Post Moves: Back to the Basket, 2 Reads',
            link: 'https://www.youtube.com/embed/k8bHW9ZadcM',
        },
        {
            title: 'Ball Handling Warmup',
            link: 'https://www.youtube.com/embed/ZBLhlRzZHJ8',
        },
        {
            title: 'Ball Handling',
            link: 'https://www.youtube.com/embed/PXzw2qInxpk',
        },
        {
            title: 'Handling Pressure',
            link: 'https://www.youtube.com/embed/KMsQgTd3JKI',
        },
        {
            title: 'Passing',
            link: 'https://www.youtube.com/embed/r_6azldpe4s',
        },
    ];

    const videos = videoInfo.map((video) => {
        return (
            <View
                key={video.title}
                style={{width: '100%', height: 200, marginBottom: '5%'}}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        fontFamily: 'Kanit',
                        fontWeight: '400',
                    }}>
                    {video.title}
                </Text>
                <WebView
                    style={{
                        width: '80%',
                        marginHorizontal: '10%',
                        borderRadius: 20,
                    }}
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{uri: video.link}}
                />
            </View>
        );
    });

    return (
        <ScrollView
            style={{width: '100%', marginTop: '5%', marginBottom: '5%'}}>
            {videos}
        </ScrollView>
    );
}

export default BasketballVideos;
