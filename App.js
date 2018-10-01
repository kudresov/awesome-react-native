import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Image } from 'react-native';
import Bananas from './Bananas';
import Greeting from './Greeting';
import Blink from './Blink';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [...Array(100).keys()].map(a => ({
        key: a
      }))
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.numbers}
          renderItem={({ item }) => <Text>{item.key.toString()}</Text>}
        />
      </View>
      // <ScrollView vertical={true}>
      //   <View style={styles.container}>
      //     <Text>Open up App.js to start working on your app!</Text>
      //     <Text>Changes you make will automatically reload.</Text>
      //     <Text>Shake your phone to open the developer menu.</Text>
      //     <Text>New Line</Text>
      //     <Bananas />
      //     <Blink text="Hi everyone!" />
      //     <Greeting name="John" />
      //     <TextInput
      //       style={{ height: 40 }}
      //       placeholder="Type here to translate!"
      //       onChangeText={console.log}
      //     />
      //     <Button
      //       onPress={() => Alert.alert('You clicked me yay!')}
      //       title="Click me!"
      //     />
      //     <TouchableHighlight onPress={() => Alert.alert('I am green')}>
      //       <View>
      //         <Text style={{ color: 'green' }}>Click me!</Text>
      //       </View>
      //     </TouchableHighlight>
      //   </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
