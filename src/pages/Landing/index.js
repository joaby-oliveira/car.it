// Import components
import { Navbar } from "../../components/Navbar"

// Import sections
import { Hero } from "./sections/Hero"
import { Devices } from "./sections/Devices"
import { Chat } from "./sections/Chat"
import { NewCar } from "./sections/NewCar"
import { Cars } from "./sections/Cars"
import { Footer } from "./sections/Footer"

const Landing = () => {
  return (
    <div animationType="rightToLeft">
      <Navbar />
      <Hero />
      <Devices />
      <Chat />
      <NewCar />
      <Cars />
      <Footer />
    </div>
  )
}

export default Landing
