import './App.css'
import '@sendbird/uikit-react/dist/index.css'

import React from 'react'

import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'

import { APP_ID, USER_ID, NICKNAME, wsHost, httpHost} from './const'

function App() {
  const [currentChannelUrl, setCurrentChannelUrl] = React.useState('')
  return (
    <div className="App">
      <SendbirdProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME} customApiHost={httpHost} customWebSocketHost={wsHost} >
        <>
          <div className="sendbird-app__channellist-wrap">
            <ChannelList
              onChannelSelect={(channel) => {
                if (channel?.url) {
                  setCurrentChannelUrl(channel.url)
                }
              }}
            />
          </div>
          <div className="sendbird-app__conversation-wrap">
            <Channel
              channelUrl={currentChannelUrl}
            />
          </div>
        </>
      </SendbirdProvider>
    </div>
  )
}

export default App
