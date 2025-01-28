import React from 'react'
import ImageList from './ImageList'

const Slider = () => {
    let imgs = [
        "https://wallpapers.com/images/hd/cosmetic-beauty-products-makeup-kit-2sn3a8d1w0uxarjw.jpg",
        "https://www.avikalp.com/cdn/shop/products/MWZ3643_wallpaper2.jpg?v=1654843693",
        "https://wallpaperaccess.com/full/1190427.jpg"
    ]
    let imgcss = {
        width: "100%",
        height: "600px",
        objectFit: "cover",
        filter: "brightness(50%)"
    }
    return (
        <>
            <section>
                <div className="bxslider">
                    <ImageList sliderimg={imgs} imgstyle={imgcss} />
                </div>
            </section>
        </>
    )
}

export default Slider
