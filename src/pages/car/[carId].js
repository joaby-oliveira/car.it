import { FiPhone, FiMessageSquare } from 'react-icons/fi'

import { useRouter } from "next/dist/client/router"
import Image from 'next/image'

import styles from './styles.module.scss'

// Import libs
import Slider from "react-slick"

// Import slick css styles 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { FiCheck } from "react-icons/fi"

// Import images
import suv from "../../../public/suv.png"
import hatch from "../../../public/hatch.png"
import minivan from "../../../public/minivan.png"
import sedan from "../../../public/sedan.png"
import coupe from "../../../public/coupe.png"

import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { Navbar } from '../../components/Navbar'

const carId = () => {
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


  const carImages = [
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
    appendDots: dots => (
      <div>
        <ul className={styles.dotsContainer} style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  }

  const router = useRouter()
  const { carId } = router.query

  return (
    <main className={`flex`}>
      <Navbar />
      <div className={`${styles.container}`}>
        <Slider className={`${styles.carousel} flex mainCenter crossCenter`} {...configs}>
          {
            carImages.map((carImage) => {
              return (
                <Image src={carImage} />
              )
            })
          }
        </Slider>
        <div className={`${styles.rightSide} flex column`}>
          <h2 className={`${styles.carName}`}>Chevrolet Onix ASD Onix Supra</h2>
          <h2 className={`${styles.price}`}>R$42.400</h2>
          <Text>2014 | 67.542 km</Text>
          <div className={`${styles.actionButtonContainer} flex`}>
            <span className={`${styles.actionButton} ${styles.phone} flex mainCenter crossCenter `}><FiPhone size={24} /></span>
            <span className={`${styles.actionButton} ${styles.chat} flex mainCenter crossCenter `}><FiMessageSquare size={24} /></span>
          </div>
        </div>

        <div className={styles.description}>
          <Title small={true}>
            Descrição
          </Title>
          <Text>Sem detalhes, 700 de doc, documento em branco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus id purus pellentesque viverra vitae quis nisi. Morbi egestas hendrerit erat eu consectetur. Phasellus auctor sit amet magna in elementum. Vivamus consequat venenatis ligula, vitae scelerisque odio sodales id.</Text>
        </div>

        <div className={styles.specifications}>
          <Title small={true}>
            Especificações
          </Title>
          <table>
            <tr>
              <th>KM</th>
              <td>67.542</td>
            </tr>
            <tr>
              <th>Ano</th>
              <td>2014</td>
            </tr>
            <tr>
              <th>Estado</th>
              <td>Seminovo</td>
            </tr>
            <tr>
              <th>Direção</th>
              <td>Hidráulica</td>
            </tr>
            <tr>
              <th>Transmissão</th>
              <td>Automática</td>
            </tr>
            <tr>
              <th>Portas</th>
              <td>4</td>
            </tr>
            <tr>
              <th>Combustível</th>
              <td>Flex</td>
            </tr>
          </table>
        </div>

        <div className={`${styles.additionals} flex column`}>
          <Title small={true}>
            Adicionais
          </Title>
          <div className={`flex`}>
            <span className={`${styles.additionalItem} flex mainCenter crossCenter`}>Ar condicionado <FiCheck /></span>
            <span className={`${styles.additionalItem} flex mainCenter crossCenter`}>Vidro elétrico <FiCheck /></span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default carId