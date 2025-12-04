import { useState } from "react";
import "./sheetMusic.css"
export default function SheetMusic(){
    let musicMap = new Map;
    musicMap = {littleLamb: "mary-had-a-little-lamb.jpg", hbd: "happyBirthday.png", twinkle: "twinkle-twinkle-little-star-beginner.png"}
    const [musicSheet, setMusicSheet] = useState("mary-had-a-little-lamb.jpg");
    return (
        <>
            <div >
                <form action="">
                    <label htmlFor="music">Select Sheet Music: </label>
                    <select onChange={(e) => setMusicSheet(musicMap[e.target.value])} name="music" id="music">
                        <option value="littleLamb">Mary Had a Little Lamb</option>
                        <option value="hbd">Happy Birthday</option>
                        <option value="twinkle">Twinkle Twinkle Little Star</option>
                    </select>
                </form>
                {musicSheet && (
                    <img style={{minWidth:"300px", maxWidth: "300px", minHeight: "600px", maxHeight: "600px", marginTop:"20px"}} src={`/${musicSheet}`} alt="Sheet music" />
                )}

            </div>
        </>
    )
}