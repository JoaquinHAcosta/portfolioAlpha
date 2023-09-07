import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import { Loader } from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [ letterClass, setLetterClass ] = React.useState('text-animate')
    const refForm = React.useRef()

    React.useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_asrux2i',
                refForm.current,
                
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                    I'm excited about the opportunity to collaborate with you on exciting and challenging web projects. If you're looking for a passionate and dedicated web developer to bring your online vision to life, please don't hesitate to contact me. I'm here to listen to your ideas, bring my expertise to the table, and work together to create exceptional web solutions. I look forward to meeting you and getting started on your next project!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync"/>
        </>
    )
}

export default Contact