import React from 'react'

const Slider = () => {
    const myslider = [
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw53ca8251/homepage/HeroBanner/unbound-desktop.jpg",
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw01905d70/homepage/HeroBanner/fod-24-desktop.jpg",
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb1b2001d/homepage/HeroBanner/gifting-banner-desktop.jpg",
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1cb2cf12/homepage/HeroBanner/rwj-desktop.jpg",
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw258ad774/homepage/HeroBanner/engagement-rings-desktop.jpg",
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw99a80318/homepage/HeroBanner/sos-desktopen-new.jpg"
    ]
    return (
        <>
            <div className='homepage'>
                <div className='home-slider'>
                    {
                        myslider.map((images, key) =>
                            <div key={key}>
                                <img src={images} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Slider
