import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../logo.jpeg'
import Select from 'react-select'

function AI() {
    const [languages, setLanguages] = useState([]);
    const [selectedLang, setSelectedLang] = useState(null)
    useEffect(() => {
        const getLanguages = () => {
            try {
                const res = axios.get('https://100085.pythonanywhere.com/api/v1/dowell-video-generator/process_text_to_video/?type=get_language_list')
                    .then((res) => setLanguages(res.data.response)
                    )
            }
            catch (error) {
                console.log(error)
            }
        }
        getLanguages();
    }, [])
    const options = languages.map((language) => {
        return ({ value: language._id, label: language.name })

    })
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <img src={logo} alt="" />
                <div style={{ borderBottom: '1px solid gray', width: '100%' }}></div>
                <h1 style={{ textAlign: 'center', color: 'green' }}>Welcome to Fliki AI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione rerum officiis velit, facere obcaecati.</p>
                <Select options={options} value={selectedLang} onChange={(selectedOption) => setSelectedLang(selectedOption)} placeholder="Select a Language" />
            </div>
        </>
    )
}
export default AI;