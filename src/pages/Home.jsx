import { useEffect, useState } from 'react';
import stashLogo from '../assets/logo-the-stash.png';
import recordArm from '../assets/record-arm.png';
import recordBase from '../assets/record-base.png';
import './Home.css';

export default function Home(){
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlayToggle(){
        setIsPlaying(true);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPlaying(true);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main>
            <h1>Welcome to The Stash!</h1>
            <div className="record-player">
                <img className="record base" src={recordBase} alt="Record player base"/>
                <img className={`logo ${isPlaying ? 'play' : ''}`} src={stashLogo} alt="The Stash logo"/>
                <img className={`record arm ${isPlaying ? 'play' : ''}`} src={recordArm} alt="Record player tonearm"/>
            </div>
            <p>Drop the needle and press play — you’ve just tuned into The Stash, my creative portfolio blog where every piece tells its own story, like a track on a well-loved vinyl.</p>
            <p>This is my personal creative jukebox, where I spin:</p>
            <ul className='record-list'>
                <li>🖌️Digital <b>fashion illustrations</b> with attitude and edge</li>
                <li>🪡 Digital <b>embroidery designs</b> threaded with imagination</li>
                <li>🧶 <b>Crochet creations</b> that groove with texture and style</li>
            </ul>
            <p>Each post is a new track in my artistic setlist. So whether you’re here to browse, be inspired, or just vibe with the visuals — welcome to the playlist.</p>
        </main>
    );
}