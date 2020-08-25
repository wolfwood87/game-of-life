import React, { useRef, useEffect } from "react"

export default function RunGame(cb, time, tree, cl) {
    const saved = useRef()
    useEffect(() => {
        saved.current = cb
    }, [cb])

    useEffect(() => {
        if (!cl) {
            function next() {
                saved.current()
            }
            let interval = setInterval(next, time);
            return () => clearInterval(interval)
        }
    }, [time, tree, cl])
}