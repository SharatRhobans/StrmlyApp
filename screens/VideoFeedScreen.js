import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { videos } from '../components/sampleVideos';
import VideoCard from '../components/VideoCard';
import { useIsFocused } from '@react-navigation/native';

const { height } = Dimensions.get('window');

export default function VideoFeedScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  const isFocused = useIsFocused(); 

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <VideoCard
            video={item}
            isActive={index === currentIndex && isFocused} 
          />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
}
