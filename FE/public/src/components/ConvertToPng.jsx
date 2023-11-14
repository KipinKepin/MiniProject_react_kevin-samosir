import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const ConvertToPng = () => {
    const imageRef = useRef(null);
    const fileInputRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // Display the uploaded image
                imageRef.current.src = e.target.result;
                setImageLoaded(true); // Set imageLoaded to true
            };

            reader.readAsDataURL(file);
        }
    };

    const convertToPNG = () => {
        if (imageRef.current) {
            html2canvas(imageRef.current).then((canvas) => {
                // Convert the canvas to a PNG image
                const convertedImage = canvas.toDataURL('image/png');

                // Generate a random name for the download
                const randomName = `image_${Date.now()}_${Math.floor(
                    Math.random() * 1000
                )}.png`;

                // Create a temporary download link with the generated name
                const downloadLink = document.createElement('a');
                downloadLink.href = convertedImage;
                downloadLink.download = randomName;
                downloadLink.click();
            });
        }
    };

    return (
        <div className='grid justify-items-center'>
            <input
                type="file"
                className="file-input file-input-bordered file-input-accent file-input-sm w-full max-w-xs"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
            // style={{ position: 'relative', transform: "translate(0, 100%)" }}
            />
            <br />
            <div style={{ maxWidth: '100%', maxHeight: '400px', position: 'relative', textAlign: 'center' }}>
                <img
                    ref={imageRef}
                    src=""
                    alt="Uploaded Content"
                    style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: "10px" }}
                />
                {imageLoaded && (
                    <button
                        onClick={convertToPNG}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translate(-50%, 0%)',
                            zIndex: 1,
                        }}
                        className='btn btn-md btn-accent mt-6'
                    >
                        Download
                    </button>
                )}
            </div>
        </div>
    );
};

export default ConvertToPng;
