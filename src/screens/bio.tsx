
import Header from './../components/biocron/header';
import ProfilePic from '../components/biocron/bio/profile-pic';

function BioScreen() {


  return (
    <>
      <Header />
      <div className='flex place-content-center w-screen mt-20'>
        <ProfilePic />
      </div>
    </>
  )
}

export default BioScreen
