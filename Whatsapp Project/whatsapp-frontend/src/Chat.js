import {
    AddIcCall,
    Duo,
    InsertEmoticon,
    Message,
    MoreHoriz,
    SearchOutlined
} from '@mui/icons-material';
import {Avatar, IconButton} from '@mui/material';
import React, {useState} from 'react';
import "./Chat.css";
import MicIcon from '@mui/icons-material/Mic'
import InputEmoji from 'react-input-emoji'
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from './axios';



const Chat = ({ messages }) => {
    const [input, setInput] = useState("");
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      await axios.post("/messages/new", {
        message: input,
        name: "You",
        timestamp: " Just now",
        received: true,
      });
  
      setInput("");
    };


  
    return (
        <div className='chat'>
        <div className='chat__header'>
            <Avatar src="https://media.istockphoto.com/vectors/people-icon-in-flat-style-group-of-people-symbol-for-your-web-site-vector-id1136653100?k=20&m=1136653100&s=170667a&w=0&h=ExivHgBvO-2xTO10MaXx7gP7mqEBNUpa-ov9hN_nBaY="/>

            <div className='chat__headerInfo'>
          
                <h3>Partyy..</h3>
                <p>Aditi,Bhavya,Priyanka...</p>
            </div>
            <div className='chat_HeaderRight'>
                <IconButton>
                    <SearchOutlined style={{fill: "#83ec52"}}/>

                </IconButton>
                <IconButton>
                    <MoreHoriz style={{fill: "#83ec52"}}/>
                </IconButton>
                <IconButton>
                    <AddIcCall style={{fill: "#83ec52"}}/>
                </IconButton>
                <IconButton>
                    <Duo style={{fill: "#83ec52"}}/>
                </IconButton>

            </div>

        </div>
    
          <div className="chat__body">
          <p className="chat__message ">
                    <span className="chat__name">Bhavya</span>
                 HIIII {'  '}
                    <span className="chat__timestamp">{new Date().toLocaleTimeString('en-US')}</span>
                </p>
                
                <p className="chat__message ">
                    <span className="chat__name">Priyanka</span>
                 Anyone free today?😎{'  '}
                    <span className="chat__timestamp">{new Date().toLocaleTimeString('en-US')}</span>
                </p>
                
                <p className="chat__message">
                    <span className="chat__name">Amditi</span>
                      Sure..{'  '}
                    <span className="chat__timestamp">{new Date().toLocaleTimeString('en-US')}</span>
                </p> 
            {messages.map((message, i) => {
              return (
                <p
                  key={i}
                  className={`chat__message ${
                    message.received && "chat__reciever"
                  }`}
                >
                  <span className="chat__name">{message.name}</span>
                  {message.message+" "}
                  <span className="chat__timestamp">{message.timestamp}</span>
                </p>
              );
            })}
            
          </div>
    
          <div className="chat__footer">
            <InsertEmoticon />
            <form>
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                type="text"
                placeholder="Type a message"
              />
              <button onClick={sendMessage} type="submit">
                Send a message
              </button>
            </form>
            <MicIcon />
          </div>
        </div>
      );
    };
    
    export default  Chat;