import Header from './../components/biocron/header'
import Minibio from '../components/biocron/home/minibio'
import Miniportfolio from '../components/biocron/home/miniportfolio'
import Profiles from '../components/biocron/home/profiles'

function HomeScreen() {


  return (
    <>
      <Header />
      <div className='flex place-content-center w-screen mt-20'>
        <Minibio />
        <Miniportfolio />
      </div>
      <div className='flex place-content-center w-screen mt-20'>
        <Profiles />
      </div>
    </>
  )
}

export default HomeScreen
