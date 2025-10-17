import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className='text-3xl flex-center bg-black h-[100vh]'>
            App
        </div>
    );
};

export default App;