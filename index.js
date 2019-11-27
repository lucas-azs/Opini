import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reviewsReducer from './src/reducers/ReviewsReducer';
import { Provider } from 'react-redux';
import ReviewList from './src/components/ReviewList'
import { AppRegistry, AsyncStorage } from 'react-native';
import ReviewForm from './src/components/ReviewForm';
import { name as appName } from './app.json';
import { Root } from 'native-base';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RemoteList from './src/components/RemoteList';
import MessageService from './src/services/MessageService';


const TabNavigator = createBottomTabNavigator({
    ReviewForm, ReviewList, RemoteList
});

const AppContainer = createAppContainer(TabNavigator);

const persistConfig = {
    key: 'reviews',
    storage: AsyncStorage
};

const rootReducer = combineReducers({ reviews: reviewsReducer });

const persistentReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistentReducer,
    applyMiddleware(thunk)
);

const persistor = persistStore(store);

if (Platform.OS === 'android') {
    MessageService.initToken().then(() => {
        MessageService.listenMessages();
    })
}

const wrappedView = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Root>
                    <AppContainer />
                </Root>
            </PersistGate>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => wrappedView);