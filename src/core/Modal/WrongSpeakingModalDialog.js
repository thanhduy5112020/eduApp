import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Gif from 'react-native-gif';

const widthScreen = Dimensions.get('screen').height * 1.431;

const WrongSpeakingModalDialog = ({
  modalVisible,
  setModalVisible,
  navigation,
  destination,
  onNext,
  onRetry,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/wrongSpeakingBG.png')}
          style={styles.bgImg}>
          <FastImage
            style={styles.gifImage}
            resizeMode="cover"
            source={require('../../../assets/images/gif/not-correct.gif')}
          />
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.retryButton} onPress={onRetry} />
            <TouchableOpacity style={styles.nextButton} onPress={onNext} />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: (widthScreen * 574) / 1194,
    width: (widthScreen * 894) / 1194,
    backgroundColor: 'red',
  },
  modalView: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  gifImage: {
    alignSelf: 'center',
    height: ((widthScreen * 574) / 1194) * 0.7,
    aspectRatio: 1,
  },
  bgImg: {
    height: (widthScreen * 574) / 1194,
    width: (widthScreen * 894) / 1194,
    justifyContent: 'center',
  },
  retryButton: {
    width: (widthScreen * 331) / 1194,
    height: 70,
  },
  nextButton: {
    width: (widthScreen * 331) / 1194,
    height: 70,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default WrongSpeakingModalDialog;
