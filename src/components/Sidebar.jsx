import { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import '../App.css'
import { Context } from '../context/context'

const Sidebar = () => {

    const [extended, setExtended] = useState(true)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadprompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (

        // Sidebar Container - Side bar will contain menu icon, new chat button and list of recent chats 
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon_dark} width={24} height={24} alt="Menu Icon" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_dark} width={24} height={24} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ? (
                    <div className="recent">
                        <p className='recent-title'>Recent Chats</p>
                        {
                            prevPrompts.map((item, index)=>{
                                return(
                                    <div onClick={() => loadprompt(item)} key={index} className="recent-entry">
                                        <img src={assets.message_dark} width={24} height={24} alt="" />
                                        <p className=''>{item.length > 20 ? item.slice(0, 20) + "..." : item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null}

            </div>
            <div className="bottom">
                <div className="bottom_item recent-entry">
                    <img src={assets.question_dark} width={24} height={24} alt="Question Mark" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom_item recent-entry">
                    <img src={assets.historty_dark} width={24} height={24} alt="History" />
                    {extended ? <p>History</p> : null}
                </div>
                <div className="bottom_item recent-entry">
                    <img src={assets.settings_dark} width={24} height={24} alt="Settings" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar