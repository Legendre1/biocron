import Header from './../components/biocron/header'
import Minibio from '../components/biocron/home/minibio'
import Miniportfolio from '../components/biocron/home/miniportfolio'

function HomeScreen() {


  return (
    <>
      <Header />
      <div className='flex place-content-center w-screen'>
        <Minibio />
        <Miniportfolio />
      </div>
      
    </>
  )
}

export default HomeScreen
