import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './page/Login';
import DashboardScreen from './page/Dashboard';
import PositionReact from './page/PositionReact';
import ItemList from './page/ItemList';
import FlatListComponent from './page/FlatList';
import News from './page/News';
import LifeCycleComponent from './page/LifeCycleComponent';

const Stack = createNativeStackNavigator();


const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Latihan</Text>
            <Button
                title="ListView"
                onPress={() => navigation.navigate('DashboardScreen')}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
            />
            <Button
                title="PositionReact"
                onPress={() => navigation.navigate('PositionReact',{
                    ItemId:13,
                    Name:"Surendra",
                })}
            />
            <Button
                title="ItemList"
                onPress={() => navigation.navigate('ItemList')}
            />
            <Button
                title="FlatListComponent"
                onPress={() => navigation.navigate('FlatListComponent')}
            />
            <Button
                title="News"
                onPress={() => navigation.navigate('News')}
            />
            <Button
                title="LifeCycleComponent"
                onPress={() => navigation.navigate('LifeCycleComponent')}
            />
        </View>
    )
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="PositionReact" component={PositionReact} />
                <Stack.Screen name="ItemList" component={ItemList} />
                <Stack.Screen name="FlatListComponent" component={FlatListComponent} />
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="LifeCycleComponent" component={LifeCycleComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;