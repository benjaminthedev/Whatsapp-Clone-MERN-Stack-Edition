import React from 'react'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
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

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Benjamin</span>

                        This is the message

                        <span className="chat__timeStamp">
                        TimeStamp
                        </span>
                </p>
            </div>


        </div>
    )
}

export default Chat
