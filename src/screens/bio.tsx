
import Header from './../components/biocron/header';
import ProfilePic from '../components/biocron/bio/profile-pic';
import BioBlurb from '../components/biocron/bio/bio-blurb';
import ExpBlurb from '../components/biocron/bio/exp-blurb';
import QualificationBlurb from '../components/biocron/bio/qualification-blurb';

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
