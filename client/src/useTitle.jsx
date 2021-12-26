import {useEffect} from "react";

export function useTitle(title, excludeApplicationName = false) {
    const originalTitle = document.title;
    useEffect(() => {
        let newTitle = title;
        if (!excludeApplicationName) {
            newTitle += " | Kristiania Library";
        }
        document.title = newTitle;
        return () => {
            document.title = originalTitle;
        }
    }, []);
}
