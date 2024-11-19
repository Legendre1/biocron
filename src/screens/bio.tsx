
import Header from './../components/biocron/header';
import ProfilePic from '../components/biocron/bio/profile-pic';
import BioBlurb from '../components/biocron/bio/bio-blurb';

function BioScreen() {


  return (
    <>
      <Header />
      <div className='flex place-content-center w-screen mt-20'>
        <ProfilePic />
        <BioBlurb />
      </div>
    </>
  )
}

export default BioScreen
