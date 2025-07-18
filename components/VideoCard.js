// components/VideoCard.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function VideoCard({ video, isActive }) {
  const [isMuted, setIsMuted] = useState(false); // 🔊 Default sound ON
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleDoubleTap = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes > 0 ? likes - 1 : 0);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      <View style={styles.container}>
        <Video
          source={{ uri: video.url }}
          rate={1.0}
          volume={1.0}
          isMuted={isMuted}
          resizeMode="cover"
          shouldPlay={isActive}
          isLooping
          style={styles.video}
        />

        {/* Bottom-left username & caption */}
        <View style={styles.textOverlay}>
          <Text style={styles.username}>@{video.username}</Text>
          <Text style={styles.caption}>{video.caption}</Text>
        </View>

        {/* Right-side controls like Reels */}
        <View style={styles.rightControls}>
          <TouchableOpacity onPress={handleDoubleTap}>
            <FontAwesome
              name={liked ? 'heart' : 'heart-o'}
              size={32}
              color={liked ? 'red' : 'white'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>{likes}</Text>

          <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
            <FontAwesome
              name={isMuted ? 'volume-off' : 'volume-up'}
              size={28}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#000',
  },
  video: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 80,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
  },
  rightControls: {
    position: 'absolute',
    right: 15,
    bottom: 120,
    alignItems: 'center',
  },
  icon: {
    marginVertical: 10,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 14,
  },
});
