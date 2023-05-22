// Importer les composants nécessaires
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// Constante pour l'URL de l'image
const IMAGE_URL = 'https://w0.peakpx.com/wallpaper/10/315/HD-wallpaper-recep-tayyip-erdogan-ak-parti-baskan-cumhurbaskani-islamic-leader-lider-ottoman-president-reis-turk-turkish-leader.jpg';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground 
      source={{uri: IMAGE_URL}} 
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={[styles.title, { textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10 }]}>
        Bienvenue sur le Quiz Politique
      </Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#ff0000' }]} // Modifier la couleur de fond du bouton en rouge (ou toute autre couleur vive)
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Commencer le Quiz</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 29,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 50,
    marginBottom: 290,
    borderWidth: 1, 
    borderColor: 'white',
    padding:  15, 
    borderRadius: 10, 
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default HomeScreen;
