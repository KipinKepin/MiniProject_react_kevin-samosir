import React, { useEffect, useState } from 'react'
import ImageView from './ImageView';
import '../style/Generate.css'
import axios from 'axios';

const GenerateList = () => {
    const [images, setImages] = useState([]);
    const [value, setValue] = useState("An enormous 20x20 rubic's cube at the sea");
    const [error, setError] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [openModal, setOpenModal] = useState(false)

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        getHistories();
    }, [])

    const getHistories = async () => {
        const response = await axios.get('http://localhost:5000/generate')
        setHistories(response.data)
        console.log(histories);
    }

    const addHistory = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:5000/generate', {
                command: value
            })
        } catch (error) {
            if (error.response) {
                setError(error.response.data.msg)
            }
        }
    }

    const removeHistory = async (historyId) => {
        await axios.delete(`http://localhost:5000/generate/${historyId}`)
        getHistories()
    }

    const surpriseOptions = [
        'A blue ostrich eating melon',
        'A mattise style shark on the telephone',
        'A pineapple sunbathing on an island'
    ]

    const surpriseMe = () => {
        setImages([])
        const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
        setValue(randomValue)
        console.log(surpriseOptions);
    }

    const getImages = async () => {
        setImages([])
        if (value === null) {
            setError('Error! Must have a search term')
            return
        }
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    message: value
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }
            const response = await fetch('http://localhost:5000/generate/images', options)
            const data = await response.json()
            console.log(data);
            setImages(data)
            getHistories()
        } catch (error) {
            console.error(error);
        }
    }

    const uploadImage = async (e) => {
        console.log(e.target.files[0]);

        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        setOpenModal(true)
        setSelectedImage(e.target.files[0]);
        e.target.value = null

        try {
            const options = {
                method: 'POST',
                body: formData
            }
            const response = await fetch('http://localhost:5000/generate/upload', options);
            const data = await response.json(); // Await the JSON parsing here

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const generateVariations = async () => {
        setImages([])
        if (selectedImage == null) {
            setError('Error! Must have an existing image')
            setOpenModal(false)
            return
        }
        try {
            const options = {
                method: 'POST'
            }
            const response = await fetch('http://localhost:5000/generate/variations', options)
            const data = await response.json()
            console.log(data);
            setImages(data)
            setError(null)
            setOpenModal(false)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='grid justify-items-center'>
            {/* Page content here */}
            <section className="search-section">
                <p className='my-3'>Start with detailed description
                    <span className="surprise" onClick={surpriseMe}>Surprise me</span>
                </p>
                <form onSubmit={addHistory}>
                    <div className="input-container">
                        <p className='text-center'>{error}</p>
                        <input
                            placeholder="An enormous 20x20 rubic's cube at the sea"
                            onChange={(e) => setValue(e.target.value)}
                            value={value} />
                        <button onClick={getImages}>Generate</button>
                    </div>
                </form>
                <p className="extra-info mt-2">Or,
                    <span>
                        <label htmlFor="files">Upload an Image</label>
                        <input id="files" accept="image/*" type="file" onChange={uploadImage} hidden />
                    </span>
                    to edit.
                </p>
                {error && <p>{error}</p>}
                {openModal &&
                    <div className="overlay">
                        <ImageView
                            setOpenModal={setOpenModal}
                            setSelectedImage={setSelectedImage}
                            selectedImage={selectedImage}
                            generateVariations={generateVariations}
                        />
                    </div>
                }
            </section>
            <div className="dropdown dropdown-right dropdown-hover">
                <ul className="menu bg-base-200 w-56 rounded-box mb-5">
                    {histories.map((history, index) => (
                        <li key={history.uuid}>
                            <details>
                                <summary>history ke-{index + 1}</summary>
                                <ul>
                                    <li><a onClick={() => setValue(history.command)}>command: <br />{history.command}</a></li>
                                    <li><a>author: {history.user.name}</a></li>
                                    <li><a>role: {history.user.role}</a></li>
                                    <li onClick={() => removeHistory(history.uuid)}>
                                        <a>action:
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "#f00", width: "10px", height: '100%', cursor: 'pointer' }}>
                                                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            </div>
            {/*  */}
            <section className="image-section">
                {images ? images.map((image, _index) => (
                    <img key={_index} src={image.url} alt={`Generated images of ${value}`} />
                )) : ""
                }
            </section>
        </div>
    )
}

export default GenerateList