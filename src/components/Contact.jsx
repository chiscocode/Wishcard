import React from 'react'
import Header from './Header'

const Contact = () => {
  return (
    <>
    
    <Header/>
        <div className="container">
            
                <div className="row text-center">
                        <div className="col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                        </svg> 08167000077
                        </div>
                        <div className="col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg> wish@gmail.com
                        </div>
                        <div className="col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg> Lagos, Nigeria
                        </div>
                    </div>

                    <div className="container">
            
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <h3 className='mt-5' style={{color:'#2c234d'}}>Send Us a Message</h3>
                        {/* <!-- Wrapper container --> */}
                            <div className="py-4">

                    {/* <!-- Bootstrap 5 starter form --> */}
                    <form id="contactForm" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                        {/* <!-- Name input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                        </div>

                        {/* <!-- Email address input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="emailAddress">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>

                        {/* <!-- Subject input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="subject">Subject</label>
                        <input className="form-control" id="subject" type="text" placeholder="Subject" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="message">Message</label>
                        <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}}/>
                        </div>

                        {/* <!-- Form submit button --> */}
                        <div class="d-grid">
                        <button class="btn btn-primary btn-md" type="submit">Submit</button>
                        </div>
                            
                        </form>
                    </div>

                </div>
                <div className="col-md-4"></div>

                
            </div>
        </div>
        </div>
    </>
  )
}

export default Contact