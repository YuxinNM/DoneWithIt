import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback,Image, 
    SafeAreaView, TouchableOpacity, TouchableHighlight,
    Button, Alert } from 'react-native';

export default function App() {
    // console.log("executed");
 const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hey! There! haha</Text>
      <Image source={require('./assets/favicon.png')}/>
      
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image 
        //   blurRadius= {0.5}
            source={{
                width:200,
                height:200,
                uri: "https://picsum.photos/200/200"
            }}
        />
      </TouchableOpacity>


      <Button title ="Click Me" 
            //   onPress={() => Alert.alert("Button Title", "You tapped the button", [
            //     {text: "Yes", onPress: () => console.log("Yes")},
            //     {text: "No", onPress: () => console.log("No")},
            //   ]
            //   )}
            onPress={() => Alert.prompt("Button Tapped", "Enter something", text => console.log(text))}
      />
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
