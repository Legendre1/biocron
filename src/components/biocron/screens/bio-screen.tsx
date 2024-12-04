
import Header from './../header';
import ProfilePic from './../bio/profile-pic';
import BioBlurb from './../bio/bio-blurb';

function BioScreen() {


  return (
    <div>
      <Header />
      <div className='flex place-content-center items-center w-screen mt-32 flex-col md:flex-row'> 
        <ProfilePic />
        <BioBlurb />
      </div>
    </div>
  )
}

export default BioScreen
