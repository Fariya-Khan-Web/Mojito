import React from 'react';
import { featureLists, goodLists } from '../../constants';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const start = isMobile ? 'top 10%' : 'top top'

        const maskTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTL
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: 1.3, 
                maskPosition: 'center', 
                maskSize: '400%', 
                duration: 1, 
                ease: 'power1.inOut'
            })
            .to('.masked-content', {
                duration: 1,
                opacity: 1,
                ease: 'power1.inOut',
            })
    }, [])



    return (
        <section id='art'>
            <div className="container mx-auto h-full pt-10">
                <h2 className="will-fade">The ART</h2>

                <div className="content">

                    <ul className="will-fade space-y-4">
                        {
                            goodLists.map((item, idx) => (
                                <li key={idx} className='flex items-center gap-4'>
                                    <img className='w-4 h-4' src="/images/check.png" alt="check" />
                                    {item}
                                </li>
                            ))
                        }
                    </ul>


                    <div className="cocktail-img max-sm:mt-[-30px]">
                        <img src="/images/under-img.jpg" alt="Man" className='abs-center masked-img size-full object-contain' />
                    </div>


                    <ul className="will-fade space-y-4">
                        {
                            featureLists.map((item, idx) => (
                                <li key={idx} className='flex items-center gap-4'>
                                    <img className='w-4 h-4' src="/images/check.png" alt="check" />
                                    {item}
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>

            <div className="masked-container">
                <h2 className="will-fade">Sip-Worthy Perfection</h2>
                <div className="masked-content">
                    <h3>Made with Craft, Poured with Passion</h3>
                    <p>This isn't just a drink, it's a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </section>
    );
};

export default Art;