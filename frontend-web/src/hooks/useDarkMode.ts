import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme', true)

    useEffect(() => {
        const className = 'dark'
        const bodyClass = window.document.body.classList;
        enabled ? bodyClass.add(className) : bodyClass.remove(className)

    }, [enabled])

    return [enabled, setEnabled]
}