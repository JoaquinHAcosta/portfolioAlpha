import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {

    const [ letterClass, setLetterClass ] = React.useState('text-animate')

    React.useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Fullstack Developer with experience in technologies such as ReactJs, PostgreSQL, NodeJs,
                        Firebase, among others. I have knowledge in GIT, Gitflow, datastructures, and CSS and JS
                        frameworks. As a team member, I have been an active participant in decision-making and
                        problem-solving. My English level is C2(Competent)
                    </p>
                    <p>
                        Strengths I consider noteworthy in myself:

                        📚 Hunger for knowledge: I always seek to learn and improve, staying up-to-date with technologies and trends.
                        🤝 Team adaptability: My versatility enables me to collaborate effectively with different personalities and roles.
                        💪 Determination and ambition: My commitment and loyalty to the goals I set drive my potential.
                    </p>
                    <p>
                        Driven by an insatiable thirst for knowledge and challenges. My versatility, commitment, and
                        constant pursuit of quality define my approach to my work.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#2884D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync"/>
        </>
    )
} 

export default About