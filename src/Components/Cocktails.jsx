import React from 'react';
import { cocktailLists, mockTailLists } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cocktails = () => {

    useGSAP(() => {

        const paralaxtimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktail',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true
            }
        })

        paralaxtimeline
            .from('#c-left-leaf', {
                x: -100, y: -180
            })
            .from('#c-right-leaf', {
                x: 100, y: 180
            })
    }, [])

    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />

            <div className='list'>
                <div className="popular">
                    <h2>Most Popular Cocktails:</h2>

                    <ul>
                        {
                            cocktailLists.map(cocktail => (
                                <li>
                                    <div className='mr-8'>
                                        <h3>{cocktail.name}</h3>
                                        <p>{cocktail.country}|{cocktail.detail}</p>
                                    </div>
                                    <h2>-{cocktail.price}</h2>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most Loved Mocktails:</h2>

                    <ul>
                        {
                            mockTailLists.map(cocktail => (
                                <li>
                                    <div className='mr-8'>
                                        <h3>{cocktail.name}</h3>
                                        <p>{cocktail.country}|{cocktail.detail}</p>
                                    </div>
                                    <span>-{cocktail.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Cocktails;