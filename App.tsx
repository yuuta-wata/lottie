import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native'
import { useRef } from 'react';

export default function App() {
  const animationProgress = useRef(new Animated.Value(0))
  const anim = useRef<Lottie | null>(null)


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{width: '100%', height: 300}} onPress={() => {
        if (!anim.current) {
          return
        }
        anim.current.play()

        setTimeout(() => { anim.current?.pause()}, 2000)
        console.log('onPress');
        
      }}>

      <Lottie ref={anim} source={require('./animations/TwitterHeart.json')} onAnimationFinish={() => {
        anim.current?.reset()
        // anim.current?.pause()
        // anim.current?.play()
        console.log('onAnimationFinish');
        
      }} progress={animationProgress.current} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
