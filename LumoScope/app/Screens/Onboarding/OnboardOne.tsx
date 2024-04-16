import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Text, } from '../../../components'
import { CarouselPaths } from './Data/OnboardArray';
import colors from '../../../constants/Colors';




export default function OnboardOne() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % [CarouselPaths].length);
  };


  return (
    <Container>
      <View>

        <FlatList
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={currentIndex} // Set initial index (optional)
          data={CarouselPaths}
          renderItem={({ item }) => (
            <ImageBackground
              resizeMode='contain'
              source={item.image}
              style={styles.image} // Adjust the width and height as needed
            />
          )}
          keyExtractor={(item, index) => index.toString()} // Use index as the key extractor
        />
        <TouchableOpacity onPress={handleNext}>
          <Text>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </Container >
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 100,


  }
})