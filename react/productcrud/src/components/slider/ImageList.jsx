import React from 'react'

const ImageList = ({ sliderimg, imgstyle }) => {
    return (
        <>
            {
                sliderimg.map(img =>
                    <div key={img}>
                        <img src={img} alt="" style={imgstyle} />
                    </div>
                )
            }
        </>
    )
}

export default ImageList
