import React, { useState } from 'react';
import './chat.scss';

const Chat = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const handleOpenChat = () => {
        setChatOpen(true)
    };

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
                <div className="message" onClick={() => handleOpenChat()}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Anyars Encarta</span>
                    <p>Lorem ipsum dolor, sit amet...</p>
                </div>
            </div>

            {chatOpen ? (
                <div className="chatBox">
                    <div className="chatTop">
                        <div className="chatUser">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            Anyars Encarta
                        </div>
                        <div className="chatClose" onClick={() => setChatOpen(false)}>
                            <img src="/close.png" alt="" />
                        </div>
                    </div>
                    <div className="chatCenter">
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="chatBottom">
                        <textarea name="message" id="message" cols="30" rows="10" />
                        <button>Send</button>
                    </div>
                </div>
            ) : (
                <div className='startChat'>Click on a chat to Start Chatting</div>
            )}
        </div>
    )
}

export default Chat