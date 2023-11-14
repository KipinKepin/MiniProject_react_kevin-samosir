import React from 'react'
import { useSelector } from 'react-redux'
import cat from '../images/cat.jpg'
import paper from '../images/mask.jpg'

const Welcome = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <div className='grid justify-items-center'>
            <h2 className="subtitle absolute z-10 mt-10 text-2xl grid">Welcome back, <strong>{user && user.name}</strong> </h2>
            <section
                style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '90vh',
                }}
            >
                <img alt='gambar' src={cat} className="bg"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%)'
                    }}
                />
                <img alt='gambar' src={paper} className="paper"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'darken',
                        // filter: 'brightness(1.1)'
                    }}
                />
            </section>
        </div>
    )
}

export default Welcome