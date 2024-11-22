
import Header from './../components/biocron/header';
import ProfilePic from '../components/biocron/bio/profile-pic';
import BioBlurb from '../components/biocron/bio/bio-blurb';
import ExpBlurb from '../components/biocron/bio/exp-blurb';

function BioScreen() {


  return (
    <div>
      <Header />
      <div className='flex place-content-center w-screen mt-32'> 
        <ProfilePic />
        <BioBlurb />
      </div>
      <div className='flex place-content-center w-screen mt-10'>
        <ExpBlurb />
      </div>
    </div>
  )
}

export default BioScreen
