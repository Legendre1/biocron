
import Header from './../header'
import FramePanel from '../frame-panel'
import ContactEntry from '../contact/contact-entry'
function ContactScreen() {


  return (
    <>
      <Header />
      <div className='flex flex-row w-screen p-24'>
        <div className='w-2/5'>
          <div className='ml-4 font-label text-xl'>Contact</div>
          <div className='flex flex-row'>
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
          </div>
        </div>
        <div className='w-3/5 bg-blue-700'>
              <FramePanel classes='' children={''}></FramePanel>
        </div>
      </div>
    </>
  )
}

export default ContactScreen
