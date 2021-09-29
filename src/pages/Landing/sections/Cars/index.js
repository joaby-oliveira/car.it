// Import Next.js components
import Image from "next/image"

// Import libs
import Slider from "react-slick"

// Import slick css styles 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import styles
import styles from './styles.module.scss'

// Import images
import suv from "../../../../../public/suv.png"
import hatch from "../../../../../public/hatch.png"
import minivan from "../../../../../public/minivan.png"
import sedan from "../../../../../public/sedan.png"
import coupe from "../../../../../public/coupe.png"

export const Cars = () => {
  function PrevArrow({ onClick }) {
    return (
      <svg className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick} width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 2L2 25L25 48" stroke="white" stroke-width="4" stroke-linejoin="round" />
      </svg>
    )
  }
  function NextArrow({ onClick }) {
    return (
      <svg className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick} width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L25 25L2 48" stroke="white" stroke-width="4" stroke-linejoin="round" />
      </svg>

    )
  }
  const carsImages = [
    suv,
    hatch,
    minivan,
    sedan,
    coupe
  ]
  const configs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  return (
    <section className={`${styles.cars} flex mainCenter crossCenter`}>
      <div className={styles.carsCategories}>
        <div className={`${styles.leftCategories} flex column mainAround crossCenter`}>
          <p>HATCHES</p>
          <span className={styles.spacerCircle}></span>
          <p>WAGONS</p>
          <span className={styles.spacerCircle}></span>
          <p>SEDANS</p>
        </div>
        <div className={`${styles.rightCategories} flex column mainAround crossCenter`}>
          <p>SUVs</p>
          <span className={styles.spacerCircle}></span>
          <p>MINIVÃS</p>
          <span className={styles.spacerCircle}></span>
          <p>MOTOS</p>
        </div>
      </div>
      <Slider className={`${styles.carousel}`} {...configs}>
        {
          carsImages.map((carImage) => {
            return (
              <Image src={carImage} />
            )
          })
        }
      </Slider>
    </section>
  )
}