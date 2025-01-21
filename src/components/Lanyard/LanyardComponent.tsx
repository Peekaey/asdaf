
import {FetchLanyard} from "../../utilities.ts";
import {useEffect, useState} from "react";
import SpotifyComponent from "./SpotifyComponent.tsx";
import {Lanyard} from "../../Types/Lanyard.ts";
import ActivityComponent from "./ActivityComponent.tsx";
import {useTheme} from "../../ThemeContext.tsx";


const LanyardComponent = ({ lanyardData }: { lanyardData: Lanyard | null }) => {
    const { Theme } = useTheme();
    if (!lanyardData) {
        return null;
    }

    const filteredActivities = lanyardData.Activity
        ? lanyardData.Activity.filter((activity) => activity.ActivityName !== "Spotify")
        : [];

    return (
        <div>
            {lanyardData.Activity && lanyardData.Activity.length > 0 ? (
                <div className={`grid gap-4 ${getGridClasses(filteredActivities.length)}`}>
                    {filteredActivities.map((activity, index) => (
                        <ActivityComponent key={index} activity={activity} />
                    ))}
                </div>
            ) : (
                <p
                    className={`mt-5 loading ${
                        Theme === "Dark" ? "text-black" : "text-white"
                    }`}
                >
                    Not currently up to much
                </p>
            )}

            {lanyardData.Spotify &&
                (lanyardData.ListeningToSpotify ? (
                    <SpotifyComponent spotify={lanyardData.Spotify} />
                ) : (
                    <p
                        className={`mt-5 loading ${
                            Theme === "Dark" ? "text-black" : "text-white"
                        }`}
                    >
                        Not currently listening to anything
                    </p>
                ))}
        </div>
    );
};

export default LanyardComponent;

const getGridClasses = (activityCount: number) => {
    if (activityCount === 1) {
        return "grid-cols-1";
    } else if (activityCount === 2) {
        return "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2";
    } else if (activityCount === 3) {
        return "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3";
    } else if (activityCount >= 4) {
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4";
    }
    return "grid-cols-1";
};