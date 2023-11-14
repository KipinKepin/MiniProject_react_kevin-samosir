import React from 'react'

const ImageView = ({ setOpenModal, selectedImage, setSelectedImage, generateVariations }) => {
    const generateVar = () => {
        generateVariations()
    }
    console.log("selected : ", selectedImage);

    const closeModal = () => {
        setOpenModal(false)
        setSelectedImage(null)
    }

    return (
        <div className='imgview'>
            <div onClick={closeModal} className='close'>Close &#10754;</div>
            <div className="img-container">
                {selectedImage &&
                    <img src={URL.createObjectURL(selectedImage)} alt='uploaded content' />
                }
            </div>
            <button onClick={generateVar}>Generate</button>
        </div>
    )
}

export default ImageView