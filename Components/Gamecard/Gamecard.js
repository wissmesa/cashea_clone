import React, { useEffect, useRef } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Score } from '../Score/Score'
import { Link } from 'expo-router'
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);
export const Gamecard = ({ game }) => {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className='active:opacity-70 border border-black active:border-white/50
       mb-2 bg-gray-500/10 rounded-xl p-4'>
        <View key={game.slug} className="flex-row border-slate-500/10 p-4 rounded-xl gap-4 mb-10">
          <Image source={{ uri: game.image, }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxscore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0, 97)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Gamecard game={game} />
    </Animated.View>
  )

}

const styles = StyleSheet.create({
  card: {
    marginBottom: 100
  },
  image: {
    width: 100,
    height: 147,
    resizeMode: "contain",
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff"
  },
  description: {
    fontSize: 16,
    color: "#eee"
  },
  score: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
    fontWeight: "bold"
  },
});