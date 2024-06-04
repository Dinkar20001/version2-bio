import React from 'react'

const Homeabout = () => {
  return (
    <>
        <section className='bg-gray-100'>
                <div className='max-w-screen-xl grid md:grid-cols-2 grid-cols-1 mx-auto'>

                    <div className='p-6'>
                            <h1 className='font-bold text-3xl'>About BioPlentypeps</h1>

                            <div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Our Company</h1>
                                <p>bioplentypeps Sciences has been working with scientists for over 19 years to provide the life science community with the latest and most innovative research tools available. We understand the need for researchers to trust their research supplies which is why we are committed to supplying our customers with the highest quality product available, so you can publish with confidence. </p>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Perfection. Guidance. Cost-efficiency.</h1>
                                <p>A state of flawless quality or excellence, achieving the highest standards without any defects or shortcomings. It represents the ideal performance and results, striving for absolute precision and completeness in every aspect.</p>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Our Customer</h1>
                                <p>We are proud of our service and cherish every customer relationship. With content customers globally, you can trust in a secure and satisfying shopping experience, offering top-tier research products from Bioplentypeps™. On behalf of everyone at Bioplentypeps™, thank you. Feel free to reach out to us at service@bioplentypeps.com for any inquiries. </p>
                            </div>

                            </div>
                    </div>

                    <div>
                        <img src="https://www.peptidesciences.com/static/version1716974222/frontend/Mtn/bootstrap/en_US/images/s-main-about.webp" alt="about image" />
                    </div>
                </div>    
        </section>        
    </>
  )
}

export default Homeabout