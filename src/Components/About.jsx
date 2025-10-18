import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';

const About = () => {

    useGSAP(() => {

        const aboutTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 50%',
                end: 'top 0%',
                scrub: true,
            }
        })

        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })
        const paraSplit = SplitText.create('.para', {
            type: 'lines'
        })

        aboutTL
            .from(titleSplit.words, {
                opacity: 0,
                y: 60,
                stagger: 0.1,
                duration: 1.9
            })
            .from(paraSplit.lines, {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1,
                ease: 'expo.out'
            })
            .from('.top-grid',{
                opacity: 0,
                y: 10,
                duration:1,
            })
            .from('.bottom-grid',{
                opacity: 0,
                y: 10,
                duration:1,
            })
    }, [])

    return (
        <section id='about'>
            <div className='mb-16 px-5 md:px-0'>
                <div className="content">
                    {/* title part */}
                    <div className='col-span-8'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>Where every detail matters - from muddle to garnish</h2>
                    </div>

                    {/* detai & profile part */}
                    <div className=' sub-content col-span-8 md:col-span-4'>
                        <p className='w-full para'>Every cocktail we serve is a reflection of our obsession with detail - from the first muddle to last garnish. That care is what turns a simple drink into something truely memorable.</p>

                        <div className='grid md:grid-cols-2 gap-4 '>
                            <div>
                                <p><span>4.5</span>/5</p>
                                <p>More tha +12000 customers</p>
                            </div>

                            <div className='md:border-l-2 border-gray-500 pl-4 '>
                                <div className='grid grid-cols-4 bg-radial-[at_50%_75%] from-gray-700 via-gray-800 to-gray-800 to-90% rounded-4xl p-4'>
                                    <img className='min-w-10' src="/images/profile1.png" alt="" />
                                    <img className='min-w-10 ml-[-12px]' src="/images/profile2.png" alt="" />
                                    <img className='min-w-10 ml-[-24px]' src="/images/profile3.png" alt="" />
                                    <div className='min-w-10 ml-[-36px] bg-indigo-300 border border-white flex-center rounded-full'>+12k</div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <div className="noisy">
                        <img src="/images/abt1.png" alt="grid-img-1" />
                    </div>
                </div>

                <div className='md:col-span-6'>
                    <div className="noisy">
                        <img src="/images/abt2.png" alt="grid-img-2" />
                    </div>
                </div>

                <div className='md:col-span-3'>
                    <div className="noisy">
                        <img src="/images/abt5.png" alt="grid-img-5" />
                    </div>
                </div>

            </div>

            <div className="bottom-grid">
                <div className='md:col-span-8'>
                    <div className="noisy">
                        <img src="/images/abt3.png" alt="grid-img-3" />
                    </div>
                </div>
                <div className='md:col-span-4'>
                    <div className="noisy">
                        <img src="/images/abt4.png" alt="grid-img-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;