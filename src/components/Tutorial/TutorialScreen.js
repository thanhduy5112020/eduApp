import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Pagination} from 'react-native-snap-carousel';
import {CommonSize, ratioH} from '../../utils/utils';
import CarouselView from './CarouselView';

const widthScreen = Dimensions.get('screen').height * 1.431;

const TutorialScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [width, setWidth] = useState(CommonSize.srcWidthDefault);

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/TutorialScreen/tutorialBGImg1.png')}
        style={{...styles.bgImg, width: width, overflow: 'hidden'}}
        resizeMode="contain"
        onLayout={e => {
          setWidth((e.nativeEvent.layout.height * 1194) / 834);
        }}>
        <View style={styles.topView}>
          {/* <Text style={styles.topText}>
            청능 훈련을 통해 일상생활속의 대화를 연결시켜드려요!
          </Text>
          <Text>매일 새로운 듣기, 말하기, 집중력 훈련 제공</Text> */}
        </View>
        <View style={styles.contentView}>
          <CarouselView
            width={width}
            onSnapToItem={index => setCurrentIndex(index)}
          />
          <Pagination
            dotsLength={3}
            activeDotIndex={currentIndex}
            dotStyle={styles.dotView}
            inactiveDotStyle={styles.inactiveDotView}
            inactiveDotScale={1}
            inactiveDotOpacity={1}
          />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => Alert.alert('Show new screen')}>
            <Image
              source={require('../../../assets/images/TutorialScreen/startButton.png')}
              style={styles.startImgButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TutorialScreen;

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  rootView: {
    flex: 1,
    alignSelf: 'center',
  },
  startButton: {},
  startImgButton: {
    width: widthScreen * 0.25,
    height: widthScreen * 0.25 * 0.21,
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.8,
  },
  contentView: {
    height: ratioH(420),
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 36,
    color: '#002443',
    fontWeight: '700',
  },
  bottomText: {
    fontSize: 24,
    color: '#2D4967',
    fontWeight: '500',
  },
  dotView: {
    width: 32,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
  inactiveDotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
});
