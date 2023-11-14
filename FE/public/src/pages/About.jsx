import React, { useEffect } from 'react'
import '../style/About.css'
import gbr1 from '../images/express.jpg'
import gbr2 from '../images/node-js.jpg'
import gbr3 from '../images/openai.jpg'
import gbr4 from '../images/react.jpg'
import gbr5 from '../images/vscode.jpg'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const About = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isError } =
        useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    useEffect(() => {
        if (isError) {
            navigate("/")
        }
    }, [isError, navigate])

    return (
        <Layout>
            <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h2 className='text-white font-bold text-3xl text-center my-20'>All 'bout
                    <em>
                        &lt;img /&gt;
                    </em>
                </h2>
                <div className='scroll'>
                    <div className='scrolla'>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                    </div>
                    <div className='scrollb'>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                    </div>
                    <div className='scrollc'>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                    </div>
                    <div className='scrolld'>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                        <div>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>Tailwind</span>
                            <span>Daisy UI</span>
                            <span>Express JS</span>
                            <span>Github</span>
                            <span>API</span>
                            <span>OpenAI</span>
                            <span>DALL E 2</span>
                        </div>
                    </div>
                    <div className="scrolle imgbox">
                        <div>
                            <span><img src={gbr1} alt="img1" /></span>
                            <span><img src={gbr2} alt="img2" /></span>
                            <span><img src={gbr3} alt="img3" /></span>
                            <span><img src={gbr4} alt="img4" /></span>
                            <span><img src={gbr5} alt="img5" /></span>
                            <span><img src={gbr1} alt="img1" /></span>
                            <span><img src={gbr2} alt="img2" /></span>
                            <span><img src={gbr3} alt="img3" /></span>
                            <span><img src={gbr4} alt="img4" /></span>
                            <span><img src={gbr5} alt="img5" /></span>
                        </div>
                        <div>
                            <span><img src={gbr1} alt="img1" /></span>
                            <span><img src={gbr2} alt="img2" /></span>
                            <span><img src={gbr3} alt="img3" /></span>
                            <span><img src={gbr4} alt="img4" /></span>
                            <span><img src={gbr5} alt="img5" /></span>
                            <span><img src={gbr1} alt="img1" /></span>
                            <span><img src={gbr2} alt="img2" /></span>
                            <span><img src={gbr3} alt="img3" /></span>
                            <span><img src={gbr4} alt="img4" /></span>
                            <span><img src={gbr5} alt="img5" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About