import React from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { RiChatUploadLine } from "react-icons/ri";
import { MdOutlineChat } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          BRAINWAVE bot
        </div>
      </nav>
      <div className="hero">
        <span id='tag'>
          what can i help with?
        </span>
        <div className="cat">
          <div className="upIMG"><RiChatUploadLine />
          <span>Upload Image</span></div>
          <div className="genIMG"><RiImageAiLine />
          <span>Generate Image</span></div>
          <div className="chat"><MdOutlineChat />
          <span>let's Chat</span></div>
        </div>
      </div>
      <form  className="input-box">
      <button id='add'>
        <IoMdAdd />
      </button>
      <input type="text" placeholder='Type your message here...' />
      <button id='submit'>
<FaArrowUp />
      </button>
      </form>
    </div>
  )
}

export default Home