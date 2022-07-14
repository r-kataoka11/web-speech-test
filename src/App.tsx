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
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="app">
        <h1>Web Speech API テスト</h1>
        <p>お使いのブラウザーはサポートしていません。</p>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Web Speech API テスト</h1>
      <p>マイク：{listening ? 'オン' : 'オフ'}</p>
      <p>
        <button
          onClick={() => SpeechRecognition.startListening()}
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
