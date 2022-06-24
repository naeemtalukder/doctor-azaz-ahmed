import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/doctor1.jpg';
import banner2 from '../../../../images/doctor2.jpg';
import banner3 from '../../../../images/doctor3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='color mb-3'>Hi! I am Dr. Azaz Ahmed</h2>
                        <h5 className='text-dark my-3' >I am Psychiatrists, Psychologists and Psychotherapists
                            in London, the UK & Online…</h5>
                        <p className='text-dark my-3'>We offer face to face and online counselling in London the UK and Worldwide to help
                            you with whatever you may be experiencing and assist you in achieving your particular
                            therapy goal. The Psychotherapy we provide is based on research proven strategies.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='color mb-3'>Hi! I am Dr. Azaz Ahmed</h2>
                        <h5 className='text-dark my-3' >I am Psychiatrists, Psychologists and Psychotherapists
                            in London, the UK & Online…</h5>
                        <p className='text-dark my-3'>We offer face to face and online counselling in London the UK and Worldwide to help
                            you with whatever you may be experiencing and assist you in achieving your particular
                            therapy goal. The Psychotherapy we provide is based on research proven strategies.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='color mb-3'>Hi! I am Dr. Azaz Ahmed</h2>
                        <h5 className='text-dark my-3' >I am Psychiatrists, Psychologists and Psychotherapists
                            in London, the UK & Online…</h5>
                        <p className='text-dark my-3'>We offer face to face and online counselling in London the UK and Worldwide to help
                            you with whatever you may be experiencing and assist you in achieving your particular
                            therapy goal. The Psychotherapy we provide is based on research proven strategies.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;