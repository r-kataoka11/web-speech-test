import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import './App.css'

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition()

  // Web Speech APIをサポートしていないブラウザの場合
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="app">
        <h1>Web Speech API テスト</h1>
        <p>お使いのブラウザーはサポートしていません。</p>
      </div>
    )
  }

  // マイクが許可されていない場合
  if (!isMicrophoneAvailable) {
    return (
      <div className="app">
        <h1>Web Speech API テスト</h1>
        <p>音声認識を使用するには、マイクの使用を許可する必要があります。</p>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Web Speech API テスト</h1>
      <p>マイク：{listening ? 'オン' : 'オフ'}</p>
      <p>
        <button
          onClick={() =>
            SpeechRecognition.startListening({
              language: 'ja',
            })
          }
          disabled={listening}
        >
          スタート
        </button>
        <button
          onClick={() => SpeechRecognition.stopListening()}
          disabled={!listening}
        >
          ストップ
        </button>
        <button onClick={resetTranscript}>リセット</button>
      </p>
      <p>{transcript}</p>
    </div>
  )
}

export default App
