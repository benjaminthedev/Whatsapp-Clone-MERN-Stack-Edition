import React from 'react'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import ChatMessage from './ChatMessage/ChatMessage'
import ChatFooter from './ChatFooter/ChatFooter'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />


                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen At ....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>


            <ChatMessage />


            <ChatFooter />




        </div>
    )
}

export default Chat
