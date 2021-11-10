import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'

import Link from 'next/link'

import { FiSettings, FiBell } from 'react-icons/fi'

// Import libs
import Slider from "react-slick"

// Import slick css styles 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import styles from './styles.module.scss'
import { CarPreview } from '../../components/CarPreview'
import { Title } from '../../components/Title'
import { ActionButton } from '../../components/ActionButton'
import { CarCategory } from '../../components/CarCategory'

const Home = () => {
  const configs = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    // responsive: [
    //   {
    //     breakpoint: 1365,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]

  }

  return (
    <div className={`page`} animationType="leftToRight">
      <Navbar />
      <div className={`${styles.container} flex column`}>
        <div className={`${styles.profileBar} flex spaceBetween crossCenter spacerAfter`}>
          <ProfilePreview />
          <div className={`${styles.profileActions} flex`}>
            <Link href="/settings">
              <a className={`${styles.button} flex mainCenter crossCenter`}>
                <FiSettings size={24} />
              </a>
            </Link>
            <Link href="/notification">
              <a className={`${styles.button} flex mainCenter crossCenter`}>
                <FiBell size={24} />
              </a>
            </Link>
          </div>
        </div>
        <div className={`${styles.actionsListContainer} flex column`}>
          <Title small={true}>
            Sugestões para você
          </Title>

          <Slider {...configs}>
            <ActionButton fipe={true} />
            <ActionButton garage={true} />
          </Slider>
        </div>
        <div className={`${styles.actionsListContainer} flex column`}>
          <Title small={true}>
            Categorias
          </Title>
          <Slider {...configs}>
            <CarCategory category='suv' />
            <CarCategory category='convertible' />
            <CarCategory category='coupe' />
            <CarCategory category='hatch' />
            <CarCategory category='sedan' />
            <CarCategory category='pickup' />
          </Slider>
        </div>
        <div className={`${styles.actionsListContainer} flex column`}>
          <Title small={true}>
            Talvez goste desses carros
          </Title>
          <Slider {...configs}>
            <CarPreview fipe={true} />
            <CarPreview fipe={true} />
            <CarPreview fipe={true} />
            <CarPreview fipe={true} />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Home
