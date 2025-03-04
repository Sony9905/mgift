import React from 'react'
import "./Maddie_Timeline.css"
import { Chrono } from "react-chrono";
import TypeWriter from "typewriter-effect";
import MA1 from '../images/ma1.jpg'
import MA2 from '../images/m2.jpg'
import MA3 from '../images/m3.jpg'
import MA4 from '../images/m4.jpg'

import Gif from './Gif';
const Maddie_Timeline = () => {
  const items = [
    {
      title: "Start of December 5th: 5:00PM",
      cardTitle: "Start of our journey",
      url: "https://maps.app.goo.gl/vqwtK6KztQSvmVNRA",
      cardDetailedText: "You could say this was the official starting point of our relationship. I wanted to document everything, but for now, it will be based on my point of view. If I asked you for your point of view, it would have spoiled the gift, so I hope you don't mind! I will say this amazing day really started on the wrong foot. I left my house at 4:20 and I had to pick up my flowers which you saw I basically had finessed by the helpful group of pedestrians walking by I remember my head pounding and getting nervous and anxious because I really wanted to be a big day for you so I decided to go to trader joes to somewhat save the moment and get any flower I can.",
      media: {
        name: "Meet up",
        source: {
          url: "https://i.gyazo.com/710b4cacc0a7756ed48d29c6deb016ab.jpg"
        },
        type: "IMAGE"
      }
    },
    {
    title: "7:00 PM",
    cardTitle: "Pier 57",
    url: "https://www.google.com/maps/place/Paris+Baguette/@40.7569109,-73.9920289,15.75z/data=!3m1!5s0x89c259a3913f2615:0x452b1bcd9a3bd47d!4m10!1m2!2m1!1sParis+Baguette!3m6!1s0x89c259da457f669d:0xa6fd6184963ca5fe!8m2!3d40.7548557!4d-73.9864994!15sCg5QYXJpcyBCYWd1ZXR0ZSIDiAEBWhAiDnBhcmlzIGJhZ3VldHRlkgEGYmFrZXJ54AEA!16s%2Fg%2F11hzhf86km?entry=ttu",
    cardDetailedText: "After meeting you at your workplace and explaining the entire ordeal, ( which you have in recording unfortunately), I decided to wait and move on with the entire day, adjusting the plan as needed as it was extremely cold and I was under prepared! I remember not wearing enough layers but still refusing not to hold your hand as we walked to the coldest part of the city at that time, near the water, where we eventually decided to grab some warmth at pier 57!",
    media: {
      name: "Pier 57",
      source: {
        url: "https://i.gyazo.com/72ba338ffa112ceea9e8d70ae0124a39.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "7:50 PM",
    cardTitle: "Little Island Pier 57",
    url: "https://maps.app.goo.gl/EHTQjRdj7ksPSLmp8",
    cardDetailedText: "This park is where my life changed. My life became a whole lot brighter. I was keen on asking you out here, on this little island under the city lights, I was hoping it’d be a bit more secluded if I’m going to be honest, there were some people coming every now and then, but it was still magical. I was holding onto your last gift and couldn’t wait any longer to ask you out. You looked so gorgeous and beautiful, and I was dying to make you mine. Unfortunately, I was shot 57 times right after, when you decided to yell “ WHY ARE YOU RECORDING ME” when the police cop was right there D:. Fun times but was that night magical and funny. I will never forget, Decemember 5th, 2024 7:50PM.",
    media: {
      name: "Ask her out",
      source: {
        url: "https://i.gyazo.com/4657a6eda4c327aba4815ae04b99f3b2.png"
      },
      type: "IMAGE"
    }
  },
  {
    title: "9:30 PM",
    cardTitle: "Space Billiards, End of the night",
    url: "https://maps.app.goo.gl/UTyGCiGn1iWHWBGq5",
    cardDetailedText: "After weeks of waiting, I finally got the chance to formally tell you that I fell in love with you. I still get embarrassed on how fast I fell in love, but at this point, I don't care. I know I made the right decision. We finally got to spend the rest of the day together as an official couple! The look on your face when I asked you out, to me, looked like you were waiting for that moment all day. No more situationship or middle ground bs. I offically got to say, Maddie Donahue is my girlfriend. I was jumping for joy, I never been so happy in my life, and everyday from that moment forward has been a blessing. Soon after I asked you out, we didn't want to end the night so we decided to walk to K-Town, well we took a train after lots of walking but we got to space billards pretty quick. From here, we played pool, won some games, met some few drunk people, got loud (mostly you) and then I Was able to drop you back to the station. Thankfully, I had most of the recordings to go back to for memory!",
    media: {
      name: "MSP",
      source: {
        url: "https://i.gyazo.com/c5cd46c41343eeb691f8a2a38999e442.jpg"
      },
      type: "IMAGE"
    }
  },];
  return (
    <div className='Chrono-Wrapper'> 
      <div style={{ width: '950px', height: '950px' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow slideItemDuration={4500} slideShowType="slide_from_sides" style={{boxShadow: '10px 5px 5px black'}}theme={{
    primary: 'red',
    secondary: '#FF8DA1',
    cardBgColor: '#fff',
    titleColor: 'black',
    titleColorActive: 'black',
  }}/>
      </div>
      <div className='Right-side'>
        <h1 style={{color: '#FF8DA1'}}>
          <TypeWriter options= {{
            autoStart:true,
            loop:true,
            delay:50,
            strings: ["With this, you'll never forget Maddie"]
          }}
          />
        </h1>
        <div className='scene'>
          <div class="card-home">
              <div class="card__face card__face--front">
                <img src={MA1} />
              </div>
              <div class="card__face card__face--back">
                <img src={MA2} />
              </div>
          </div>
          <div class="card-home">
              <div class="card__face card__face--front">
                <img src={MA3} />
              </div>
              <div class="card__face card__face--back">
                <img src={MA4} />
              </div>
          </div>
        </div>
        <p>I hope you enjoy your Gift my love.<br/> <br/>You mentioned you are pretty forgetful, <br/> <br/>So I made this so you never forget one of the best days of my life. <br/><br/> Love you -Sony
        </p>
        <Gif/>
        </div>
      </div>
  )
}

export default Maddie_Timeline