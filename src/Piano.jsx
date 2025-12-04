import PianoKey from './PianoKey';
import './Piano.css';
import SheetMusic from './SheetMusic';
import './SheetMusicForm.css';
import './Row.css';
import './FancyBorder.css'
export default function Piano(){
    return (
        <>
        <div className="fancyborder">
            <div>
                <h1 style={{textDecoration:"underline" }}>Piano App</h1>
            </div>

            <div class="row">
                <div className="piano">
                    <PianoKey />
                </div>
                <div className="SheetMusicForm">
                    <SheetMusic />
                </div>
            </div>
        </div>

        </>

    )
}