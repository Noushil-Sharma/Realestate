import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We are ready to help by providing the best services for you. We believe a good blace
                  to live can make our life better <br /> 
                </span>
                     
                <div className="flexStart contactModes">

                    <div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size = {25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size = {25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    </div>

                    <div>


                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size = {25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>


                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size = {25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call</div>
                        </div>
                    </div>

                    </div>





                </div>
            </div>

            <div className="c-right">
                <div className="image-container">
                    <img src="./contactus.jpeg" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
