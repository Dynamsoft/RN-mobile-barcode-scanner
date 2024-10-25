import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {imageDataToBase64} from 'dynamsoft-capture-vision-react-native';

export const NormalizedImage = () => {
  const base64Str = imageDataToBase64(global.normalizedImage);

  useEffect(() => {
    return () => {
      global.normalizedImage.release();
    };
  }, []);
  return <Image source={{uri: 'data:image/png;base64,' + base64Str}} style={styles.fullScreen} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  fullScreen: {flex: 1},
});
