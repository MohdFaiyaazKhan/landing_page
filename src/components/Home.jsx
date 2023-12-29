import React from 'react'
import vg from "../assets/22.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (

    <>
      <div className='home' id='home'>
        <main>
          <h1>AI</h1>
          <p>Solution to every Problem</p>
        </main>
      </div>

      <div className='home2' >
        <img src={vg} alt='Graphics' />
        <div>
          <p>
          AI, or Artificial Intelligence, refers to the development of computer systems capable of performing tasks that typically require human intelligence. This encompasses various processes such as learning, reasoning, problem-solving, perception, and language understanding. AI systems are designed to analyze data, adapt to new information, and make decisions or take actions, aiming to simulate human cognitive abilities to some extent.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla ullam illum, temporibus, molestias inventore alias harum necessitatibus accusantium excepturi ratione nobis adipisci perspiciatis, sunt nesciunt. Deserunt aliquid a non officia. Natus qui similique adipisci repellat est voluptatem id necessitatibus laboriosam rem unde voluptas itaque culpa blanditiis mollitia, iste dolorem error aperiam quae ex quasi repudiandae dicta delectus placeat. Earum voluptatem voluptates nemo quaerat deserunt, enim in similique maiores velit, maxime ea.
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s", }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s", }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s", }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s", }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>

  )
}

export default Home
