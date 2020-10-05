
import { InsertEmoticon } from '@material-ui/icons'
import MicIcon from "@material-ui/icons/Mic"
import React from 'react'

function ChatFooter() {
    return (
        <div className="chat__footer">
            <InsertEmoticon />

            <form>

                <input
                    placeholder="Type Your Message"
                    type="text"
                />

                <button
                    onclick={sendMessage}
                    type="submit"
                >
                    Send Your Message
                </button>

                <MicIcon />



            </form>


        </div>
    )
}

export default ChatFooter
