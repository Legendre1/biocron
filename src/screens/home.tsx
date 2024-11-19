import Header from './../components/biocron/header'
import Minibio from '../components/biocron/home/minibio'
import Miniportfolio from '../components/biocron/home/miniportfolio'
import Profiles from '../components/biocron/home/profiles'
import Skills from '../components/biocron/home/skills'

function HomeScreen() {


  return (
    <>
      <Header />
      <div className='flex place-content-center items-center  w-screen mt-32'>
        <Minibio />
        <Miniportfolio />
      </div>
      <div className='flex place-content-center items-center w-screen mt-10'>
        <Skills />
        <Profiles />
      </div>
    </>
  )
}

export default HomeScreen
