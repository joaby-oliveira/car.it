import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Devices from "./sections/Devices"
import Chat from "./sections/Chat"
import NewCar from "./sections/NewCar"
import Cars from "./sections/Cars"
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Devices />
      <Chat />
      <NewCar />
      <Cars />
    </div>
  )
}

export default Landing
