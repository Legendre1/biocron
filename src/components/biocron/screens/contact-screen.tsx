
import Header from './../header';
import FramePanel from '../frame-panel';
import ContactEntry from '../contact/contact-entry';
import Profiles from '../home/profiles';

function ContactScreen() {


  return (
    <>
      <Header />
      <div className='flex flex-row w-screen mt-12 p-4 md:p-12 lg:p-24 '>
        <div className='w-min'>
          <div className='lg:ml-4 font-label text-xl'>Contact</div>
          <div className='flex flex-col'>
            <ContactEntry icon='email' title='Mail' children={
              <>
                <a href="mailto:jonlgolden@gmail.com">JonLGolden@gmail.com</a>
                <a href="mailto:aureus.studio@gmail.com">Aureus.Studio@gmail.com</a> 
              </>
            }></ContactEntry>
            <ContactEntry icon='phone' title='Contact' children={
              <>
              <a className='font-body' href="https://calendly.com/jonlgolden/30min">Schedule a meeting</a>
            </>
            }></ContactEntry>
            <ContactEntry icon='location' title='Location' children={
              <>
              <div>Denver, CO, USA</div>
            </>
            }></ContactEntry>
          </div>
          <div className='h-10'></div>
          <Profiles />
        </div>
        
        <div className='w-3/5'>
              <FramePanel isButton={false} onClick={() => {}} classes='' children={''}></FramePanel>
        </div>
      </div>
    </>
  )
}

export default ContactScreen
