import React, { useEffect, useState } from 'react'
import './TeamPopup.scss'
import { BiLinkExternal } from 'react-icons/bi'
// import { IoMdClose } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import Loading from '../Loading/Loading'

function TeamPopup(props) {
    const CODE_SOURCE_URL = 'https://github.com/ziarparvaiz/kodluyoruz-pomodor-app/'
    const API_URL = 'https://api.github.com/repos/ziarparvaiz/kodluyoruz-pomodor-app/contributors'
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(response => setUsers(response))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false))
    }, [])

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <h2>Team Member</h2>
                    <button className='close-btn' onClick = {() => props.setTrigger(false)}><IoCloseSharp /></button>
                </div>
                <div className="popup-content">
                    { isLoading && <Loading /> }
                    {users.map(user => {
                        return (
                            <div className='team-members'>
                                <div className='member'>
                                    <div className='member-info'>
                                        <div className='member-img'>
                                            <img src={user.avatar_url} alt={user.id} />
                                        </div>
                                        <a className='member-name' href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
                                    </div>
                                    <a className='member-follower' href={user.html_url} target="_blank" rel="noreferrer">
                                        <BiLinkExternal />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                    <a className='sourcs-btn' href={CODE_SOURCE_URL} target="_blank" rel="noreferrer">Code Source</a>
                    { props.children }
                </div>
            </div>
        </div>
    ) : null;
}

export default TeamPopup