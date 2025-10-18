import React from 'react';
import { openingHours, socials } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Footer = () => {

    useGSAP(() => {

        const upTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                scrub: true,
                start: 'top 60%',
                end: 'top 10%'
            }
        })

        const lineSplit = SplitText.create('.up',{
            type: 'lines'
        })

        upTl.
            from(lineSplit.lines, {
                opacity: 0,
                y: 100,
                duration: 1.9,
                ease: 'power1.inOut',
                stagger: 0.9
            })
    }, [])

    return (
        <footer id='contact'>
            <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />
            <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf' />

            <div className="content">
                <h2 className='up'>Where to Find Us</h2>

                <div className='up'>
                    <h3>Visit Our Bar</h3>
                    <p>456, Red Blvd. #404, Los Angeles, CA 91210</p>
                </div>

                <div className='up'>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                </div>

                <div className='up'>
                    <h3>Open Every Day</h3>
                    <ul>
                        {
                            openingHours.map(({ day, time }, idx) => (
                                <li key={idx}><p>{day} : {time}</p></li>
                            ))
                        }
                    </ul>
                </div>

                <div className='up'>
                    <h4>Socials</h4>
                    <div className='flex-center gap-4 my-4'>
                        {
                            socials.map(social => (
                                <a href={social.url} key={social.name}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>

            <img src="/images/footer-drinks.png" alt="drinks" className='drink-img' />
        </footer>
    );
};

export default Footer;