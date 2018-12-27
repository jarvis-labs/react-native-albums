import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={styles.thumbNailStyle}
                        source={{ uri: props.data.thumbnail_image }} />
                </View>
                <View style={styles.cardSectionHeaderStyle}>
                    <Text>{props.data.title}</Text>
                    <Text>{props.data.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                style={styles.imageStyle}
                source={{ uri: props.data.image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(props.data.url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardSectionHeaderStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10
    },
    thumbNailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        width: null,
        height: 200,
        flex: 1
    }
};

export default AlbumDetail;
