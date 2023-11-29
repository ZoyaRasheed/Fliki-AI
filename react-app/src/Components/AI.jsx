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

    const [dialects , setDialects] = useState([]);
    useEffect(() => {
        const getDialects = () => {
            try {
                const res = axios.get('https://100085.pythonanywhere.com/api/v1/dowell-video-generator/process_text_to_video/?type=get_dialect_list')
                    .then((res) => setDialects(res.data.response)
                    )
            }
            catch (error) {
                console.log(error);
            }
        }
        getDialects();
    }, [])

    const dialectOptions = dialects.map((dialect) => {
        return { value: dialect._id, label: dialect.name };
    });
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <img src={logo} alt="" />
                <div style={{ borderBottom: '1px solid gray', width: '100%' }}></div>
                <h1 style={{ textAlign: 'center', color: 'green' }}>Welcome to Fliki AI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione rerum officiis velit, facere obcaecati.</p>
                <div style={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'10px'}}>
                <Select options={options} value={selectedLang} onChange={(selectedOption) => setSelectedLang(selectedOption)} styles={{width:'100%'}} placeholder="Select a Language" />
                <Select options={dialectOptions} styles={{width:'100%'}} placeholder="Select a Dialect" />
                </div>
            </div>
        </>
    )
}
export default AI;