import Image from "next/image"
import Slider from "react-slick"

// Import slick css styles 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import styles file
import styles from './styles.module.scss'

// Import images
import suv from "../../../../../public/suv.png"
import hatch from "../../../../../public/hatch.png"
import minivan from "../../../../../public/minivan.png"
import sedan from "../../../../../public/sedan.png"
import coupe from "../../../../../public/coupe.png"





const Cars = () => {
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
    autoplaySpeed: 3000
  }

  return (
    <div className={`${styles.cars} flex mainCenter crossCenter`}>
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
      <Slider className={styles.carousel} {...configs}>
        {
          carsImages.map((carImage) => {
            return (
              <Image src={carImage} />
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Cars
