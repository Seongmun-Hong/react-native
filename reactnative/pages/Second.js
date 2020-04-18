import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Second({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Second Page</Text>
            <Button
                title="Go to Second... again"
                onPress={() => navigation.push('Second')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}