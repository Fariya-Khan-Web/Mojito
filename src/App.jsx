import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main 
        // className='min-h-[10000px] bg-indigo-200'
        >
            <Navbar/>
            <Hero/>
            <div className="h-dvh bg-black text-white">meaw</div>
        </main>
    );
};

export default App;