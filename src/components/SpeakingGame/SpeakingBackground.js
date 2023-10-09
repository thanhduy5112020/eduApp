import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../../core/Button/BackButton';
import SpeakingConfirmButton from '../../core/Button/SpeakingConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import {CommonSize, Images, ratioH, ratioW} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
const SpeakingBackground = ({
  title,
  question,
  destination,
  leftPosContent = 'auto',
  leftPosTitle = '44.6%',
  children,
  onClickSpeakingButton,
  speakingButtonShown = true,
  indexSelected,
  handleFinishRecording,
}) => {
  const navigation = useNavigation();
  const [width, setWidth] = useState(CommonSize.srcWidthDefault);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/SpeakingGame/SpeakingBackground.png')}
      style={{
        ...styles.imgBG,
        width: width,
      }}
      onLayout={e => {
        setWidth((e.nativeEvent.layout.height * 1194) / 834);
      }}>
      <View style={{height: '100%'}}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={Images.backButton}
              style={{
                ...styles.backButton,
              }}
            />
          </TouchableOpacity>
          <View style={styles.topView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{question}</Text>
          </View>
        </View>
        <View style={styles.contentView}>{children}</View>
        <View style={styles.bottomView}>
          {speakingButtonShown && (
            <SpeakingConfirmButton
              Modal={ListeningModalDialog}
              destination={destination}
              navigation={navigation}
              onPress={onClickSpeakingButton}
              indexSelected={indexSelected}
              handleFinishRecording={handleFinishRecording}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: ratioH(44),
    color: '#002443',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: ratioH(28),
    color: '#002443',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  textTitle: {
    top: '18%',
    zIndex: 3,
    textAlign: 'center',
  },
  quesContent: {
    textAlign: 'center',
    top: '28%',
    zIndex: 3,
  },
  imgBG: {
    width: CommonSize.srcWidthDefault,
    flex: 1,
  },
  backButton: {
    marginTop: CommonSize.srcWidthDefault * 0.05,
    marginLeft: CommonSize.srcWidthDefault * 0.028,
    height: ratioH(56),
    aspectRatio: 1,
  },
  topView: {
    alignSelf: 'center',
    marginTop: ratioH(45),
  },
  confirmButton: {
    position: 'relative',
  },
  contentView: {
    flex: 1,
  },
  bottomView: {
    alignItems: 'center',
    marginBottom: ratioH(65),
  },
});

export default SpeakingBackground;
