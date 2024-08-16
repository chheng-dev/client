import React from 'react'
import "./About.css"
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
          <div className='col-xs-12 col-md-12 col-lg-5  col-xl-4 about-img'>
            <img src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/309629125_1329359241206402_1997100209926285080_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKW5XDO9KBpy6IDGzRi9QsvAeLeUiGV-68B4t5SIZX7tT9mfa4lB7LiOWakYNFG5C44kdlTuWZ0iOTYiRRXbZD&_nc_ohc=13f3WYemsn4Q7kNvgEFchSt&_nc_ht=scontent.fpnh19-1.fna&oh=00_AYDNAtt28a-rPfPA0BlFLNBZ331vXeGgg5G1SsNkZr_e8w&oe=66BF42F7' alt='profile pic' />
          </div>
          <div className='col-xs-12 col-md-12 col-lg-7 col-xl-8 about-content'>
            <h1>About me</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </div>
      </div>
    </Jump>
  )
}

export default About
