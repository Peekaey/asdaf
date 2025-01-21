import {useTheme} from "../ThemeContext.tsx";
import {useEffect, useState} from "react";

const LiveTimerComponent = () => {
    const {Theme} = useTheme();
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3 className={`text-3xl mt-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}>
                {dateTime.toLocaleString("en-AU", {timeZone: "Australia/Sydney"})}
            </h3>
        </div>
    );

}

export default LiveTimerComponent;