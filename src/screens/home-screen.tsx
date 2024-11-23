import Header from './../components/biocron/header'
import Minibio from '../components/biocron/home/minibio'
import Miniportfolio from '../components/biocron/home/miniportfolio'
import Profiles from '../components/biocron/home/profiles'
import Skills from '../components/biocron/home/skills'

function HomeScreen() {


  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row place-content-center items-center w-screen mt-32'>
        <div className='flex flex-col place-content-center items-center -mx-2'>
          <Minibio />
          <Skills />
        </div>
        <div className='flex flex-col place-content-center items-center -mx-2'>
          <Miniportfolio />
          <Profiles />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
