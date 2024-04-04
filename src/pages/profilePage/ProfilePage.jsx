import React from 'react';
import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';

const ProfilePage = () => {
    return (
        <div className='profilePage'>
            <div className="userDetails">
                <div className="wrapper">
                    <div className="userTitle">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="userInfo">
                        <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" /></span>
                        <span>Username: <b>Anyars Encarta</b></span>
                        <span>E-mail: <b>anyarsencarta@gmail.com</b></span>
                    </div>
                    <div className="userTitle">
                        <h1>My List</h1>
                        <button>Add New Post</button>
                    </div>
                    <List />
                    <div className="userTitle">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>

            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage