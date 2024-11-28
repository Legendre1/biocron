
import Header from './../header';
import ProfilePic from './../bio/profile-pic';
import BioBlurb from './../bio/bio-blurb';
import ExpBlurb from './../bio/exp-blurb';
import QualificationBlurb from './../bio/qualification-blurb';

function BioScreen() {


  return (
    <div>
      <Header />
      <div className='flex place-content-center items-center w-screen mt-32 flex-col md:flex-row'> 
        <ProfilePic />
        <BioBlurb />
      </div>
      <div className='flex place-content-center items-center w-screen mt-6 flex-col md:flex-row'>
        <ExpBlurb />
        <QualificationBlurb />
      </div>
    </div>
  )
}

export default BioScreen
