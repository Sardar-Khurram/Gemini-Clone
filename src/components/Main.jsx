import React, { useContext } from 'react'
import '../App.css'
import { assets } from '../assets/assets'
import { Context } from '../context/context'

const Main = () => {
  const { prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    onSent,
    showResult,
    loading,
    resultData,
    input,
    setInput } = useContext(Context);

  console.log("Show Result:", showResult);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="User profile" />
      </div>

      <div className="main-container">

        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hi, Khurram</span></p>
              <p>What would you like to do today?</p>
            </div>

            <div className="cards">
              <div onClick={() => onSent("Suggest a healthy dinner recipe")} className="card">
                <p>Suggest a healthy dinner recipe</p>
                <img src={assets.food_dark} alt="Food Icon" />
              </div>
              <div onClick={() => onSent("Summarize the latest tech news")} className="card">
                <p>Summarize the latest tech news</p>
                <img src={assets.news_dark} alt="News Icon" />
              </div>
              <div onClick={() => onSent("Plan a weekend workout routine")} className="card">
                <p>Plan a weekend workout routine</p>
                <img src={assets.fitness_dark} alt="Fitness Icon" />
              </div>
              <div onClick={() => onSent("Suggest Some cool places for tomorrow trip")} className="card">
                <p>Suggest Some cool places for tomorrow trip</p>
                <img src={assets.trip_dark} alt="Cards Image" />
              </div>
            </div>
          </> :
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_result_icon} alt="" />
              {loading 
              ? 
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
               :
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        {/* <div className="result"></div> */}
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div className="">
              {/* <img src={assets.image_dark} alt="" />
              <img src={assets.mic_dark} alt="" /> */}
              {input ? <img onClick={() => onSent(input)} src={assets.plane_dark} alt="" /> : null}
            </div>
          </div>

          <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main