import './index.scss'
import LogoJ from '../../../assets/images/logo-j1.png'
import React, { useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    // React.useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline()
    //     to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1
    //     })
    // }, [])

    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt="J" />
            <svg
                width="901pt"
                height="2280pt"
                version="1.0"
                viewBox="0 0 1280 3"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(0 457) scale(.1 -.1)"
                fill="none"
                >
                <path
                    ref={outlineLogoRef}
                    d="M4645 12780 l-830 -5 -3 -1519 c-2 -1209 0 -1521 10 -1528 7 -4 232
                    -8 499 -8 l487 0 6 -31 c3 -17 6 -1421 6 -3119 l0 -3087 -34 -45 c-19 -25 -81
                    -88 -138 -141 l-103 -97 -391 0 -390 0 -90 88 c-49 48 -111 108 -139 132 l-50
                    45 -2 943 c-1 519 -4 950 -7 958 -5 12 -254 14 -1738 12 l-1733 -3 -3 -1618
                    -2 -1619 377 -392 c438 -454 1118 -1167 1313 -1375 74 -80 176 -188 226 -240
                    l92 -96 2141 0 2142 0 82 85 c45 47 123 128 172 180 50 52 279 292 510 534
                    231 241 488 509 570 596 83 86 270 282 417 434 l268 277 2 3787 3 3787 332 5
                    c182 3 335 9 340 13 10 11 4 3029 -7 3041 -9 9 -3046 14 -4335 6z m4007 -467
                    c6 -125 -1 -2192 -7 -2210 -3 -10 -85 -13 -345 -15 l-340 -3 0 -3881 0 -3881
                    -29 -39 c-16 -21 -177 -195 -358 -385 -180 -191 -440 -465 -577 -610 -333
                    -352 -606 -639 -738 -776 l-108 -112 -1992 -3 c-1096 -2 -1998 -1 -2005 0 -18
                    5 -775 797 -1565 1639 -125 133 -230 252 -233 265 -3 13 -4 626 -3 1363 l3
                    1340 1385 0 1385 0 5 -835 c4 -688 7 -839 19 -860 21 -37 421 -439 456 -457
                    25 -14 97 -16 553 -14 288 0 529 4 535 9 7 4 117 113 244 243 l233 236 0 3376
                    c0 3061 -2 3375 -16 3381 -9 3 -233 6 -499 6 -431 0 -484 2 -489 16 -3 9 -6
                    526 -6 1149 0 1017 2 1135 16 1149 14 14 231 16 2243 16 l2228 0 5 -107z "
                />
                </g>
            </svg>
        </div>
    )
}

export default Logo