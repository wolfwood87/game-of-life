import React, { useRef, useEffect } from "react"

//helper function to attach a reference to the game so it updates
export default function RunGame(cb, time, tree, cl) {
    const saved = useRef()
    //on playing the game, the ref is attached to the current function rungame
    useEffect(() => {
        saved.current = cb
    }, [cb])

    useEffect(() => {
        //if the game is not currently clickable, the function next calls the current ref saved and is then attached to the interval. The interval is then cleared to set up for the next run 
        if (!cl) {
            function next() {
                saved.current()
            }
            let interval = setInterval(next, time);
            return () => clearInterval(interval)
        }
    }, [time, tree, cl])
}