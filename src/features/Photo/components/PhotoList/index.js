import React from 'react'
import { useSelector } from 'react-redux'

const PhotoList = () => {
    const photoList = useSelector(state => state.photos)

    return (
        <div className="photo-list">
            {photoList.map(photo => {
                return (
                  <div className="photo-item">
                    <img src={photo.photo} alt={photo.title} />
                  </div>
                );
            })}
        </div>
    )
}

export default PhotoList
