import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='container-fluid-xl'>
                <div className='footerfull'>
                    <div className='textpart'>
                        <h1>My BookingApp</h1>
                        <p>The Best App to Book Movies all over the world.<br></br>Book Your Favourite in near Theathers with the App</p>
                    </div>
                </div>
                <div className='footersecond'>
                    <div className='footerlist'>   
                    <p className='footeradress'>India  |</p>
                    <p className='footeradress'>America  |</p>
                    <p className='footeradress'> Australia</p>
                    </div>
                    {/* <div className='footerlistsecond'> */}
                        {/* <p className='footerlistsecond'>Adress Details</p> */}
                        <p className='footerlistsecond pb-3'>@ MybookingApp</p>

                    {/* </div> */}
                </div>
            </div>
    </>
  )
}

export default Footer