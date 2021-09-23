import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Devices from "./sections/Devices"
import Chat from "./sections/Chat"
import NewCar from "./sections/NewCar"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Devices />
      <Chat />
      <NewCar />
    </div>
  )
}

export default Landing
