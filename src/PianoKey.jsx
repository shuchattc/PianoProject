import { useState, useEffect, useRef } from "react";
import './keys.css'
import { v4 as uuid } from "uuid";
export default function PianoKey(){
    const audio = useRef([
                new Audio('./A.mp3'),
        new Audio('./Ab.mp3'),
        new Audio('./B.mp3'),
        new Audio('./Bb.mp3'),
        new Audio('./C.mp3'),
        new Audio('./D.mp3'),
        new Audio('./Db.mp3'),
        new Audio('./E.mp3'),
        new Audio('./Eb.mp3'),
        new Audio('./F.mp3'),
        new Audio('./G.mp3'),
        new Audio('./Gb.mp3'),

    ]);
    
    const [pianoKey, setPianoKey] = useState([
                {id: uuid(), keyType: "A", key: "a"},
        {id: uuid(), keyType: "Ab", key: "w", flat: true},
        {id: uuid(), keyType: "B", key: "s"},
        {id: uuid(), keyType: "Bb", key: "e", flat: true},
        {id: uuid(), keyType: "C", key: "f"},
        {id: uuid(), keyType: "D", key: "g"},
        {id: uuid(), keyType: "Db", key: "y", flat: true},
        {id: uuid(), keyType: "E", key: "h"},
        {id: uuid(), keyType: "Eb", key: "u", flat: true},
        {id: uuid(), keyType: "F", key: "j"},
        {id: uuid(), keyType: "G", key: "k"},
        {id: uuid(), keyType: "Gb", key: "o", flat: true},

    ]);

    const [pressedKey, setPressedKey] = useState(false)

    useEffect(() => {
        function handleKeyDown(e) {
            const index = pianoKey.findIndex(k => k.key === e.key);
            if(index !== -1){
                const sound = audio.current[index];
                console.log(audio.current[index]);
                sound.currentTime = 0;
                setPressedKey(e.key);
                sound.play();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };  
    }, []);

    return (
        <>
            {pianoKey.map((i) => (
                <div key={i.id}  >
                    <div  style={{backgroundColor: pressedKey === i.key ?  "#7992a5ff" : "white"}} className="keys" id={i.keyType}>Keyboard {i.key.toUpperCase()} : {i.keyType} </div>
                </div>
            ))}
        </>
    )
}