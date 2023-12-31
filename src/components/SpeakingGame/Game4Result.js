import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';
import {useNavigation, useRoute, StackActions} from '@react-navigation/native';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import {CommonSize, ratioH} from '../../utils/utils';

const Game4Result = ({audioUrl}) => {
  console.log('audioUrl',audioUrl);
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);

  const onNext = () => {
    navigation.dispatch(StackActions.push('ListeningGame1'));
  };

  const onRetry = () => {
    navigation.goBack();
  };

  const onShowResult = () => {
    if (isCorrect) {
      setCorrectModalShown(true);
    } else {
      setWrongModalShown(true);
    }
  };

  return (
    <SpeakingBackground
      title="비슷한 발음 찾기"
      question="제공된 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어주세요"
      destination="ListeningGame1"
      navigation={navigation}
      speakingButtonShown={false}>
      <View style={styles.contentView}>
        <View style={styles.hint}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game4/hintSmall.png')}
            style={styles.hintImg}
          />
        </View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/SpeakingGame/Game4/allAnswer.png')}
          style={styles.answerButtons}
        />
        <TouchableOpacity
          style={styles.fullText}
          onPress={async () => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game2/audio.png')}
            style={styles.audioImg}
          />
        </TouchableOpacity>
        {/* <Video
          source={require('../../../assets/audio/notCorrect1.m4a')}
          paused={isPauseAudio}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => setPauseAudio(true)}
          style={{height: 0, width: 0}}
        /> */}
        <Video
          source={{uri: audioUrl}}
          paused={isPauseAudio}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => setPauseAudio(true)}
          style={{height: 0, width: 0}}
        />
      </View>
      <View style={styles.bottomView}>
        <SpeakingTwoButton
          destination="SpeakingGame4Result"
          navigation={navigation}
          onShowResult={onShowResult}
        />
      </View>
      <SpeakingModalDialog
        modalVisible={correctModalShown}
        setModalVisible={setCorrectModalShown}
        onNext={onNext}
      />
      <WrongSpeakingModalDialog
        modalVisible={wrongModalShown}
        setModalVisible={WrongSpeakingModalDialog}
        onNext={onNext}
        onRetry={onRetry}
      />
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  hint: {},
  hint2: {},
  fullText: {},
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintImg: {
    height: ratioH(80),
  },
  answerButtons: {
    height: 56,
    marginTop: ratioH(35),
    marginBottom: ratioH(55),
  },
  audioImg: {
    height: ratioH(108),
  },
  bottomView: {},
});

export default Game4Result;
