import React, { Component } from "react";
import uuid from 'uuid';
import { FlatList, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import {
    Container, Header, Content,
    Text, Body, Title, Icon, Card, CardItem
} from "native-base";
import { connect } from 'react-redux';
import SentThrough from './SentThrough';
import GeoLocation from './GeoLocation';
import ReviewItem from "./ReviewItem";



class ReviewList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return (<Icon name="list" style={{ color: tintColor }} />);
        }
    }
    constructor(props) {
        super(props);
    }

    openMap(review) {
        const { latitude, longitude } = review;
        const url = Platform.select({
            ios: `maps:0,0?q=${latitude},${longitude}`,
            android: `geo:0,0?q=${latitude},${longitude}`
        });
        Linking.openURL(url);
    }

    _renderImage(item) {
        if (item.imageUri) {
            return (
                <CardItem cardBody>
                    <Image
                        source={{ uri: item.imageUri }}
                        style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>);
        } else {
            return null;
        }
    }

    _renderItem({ item }) {
        return (
            <ReviewItem item={item}
                renderImage={(item) => this._renderImage(item)}>
                <GeoLocation
                    latitude={item.latitude}
                    longitude={item.longitude}
                    onPress={(item) => this.openMap(item)} />
                <SentThrough deviceName={item.deviceName} />
            </ReviewItem>
        );
    }
    render() {
        return (
            <Container>
                <Header>
                    <Body><Title>Lista de Opiniões</Title></Body>
                </Header>
                <Content padder>
                    <FlatList
                        data={this.props.reviews}
                        keyExtractor={(review) => review.id}
                        renderItem={(item) => this._renderItem(item)}
                    />
                </Content>
            </Container>
        );
    }
}

const mapsStateToProps = ({ reviews }) => {
    return { reviews };
}

export default connect(mapsStateToProps)(ReviewList);

