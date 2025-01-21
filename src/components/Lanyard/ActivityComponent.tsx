import {Discord_Activity} from "../../Types/Lanyard.ts";
import {useTheme} from "../../ThemeContext.tsx";


const ActivityComponent = ({ activity }: { activity: Discord_Activity }) => {
    const {Theme} = useTheme();

    return (
        <div id="parent-activity-component">
            <div
                className={`inline-flex ${Theme === "Dark" ? "text-black" : "text-white"} p-2 rounded-lg`}
            >
                {/*Render Default Asset Image if No Assets found*/}
                {activity.DiscordActivityAssets.LargeImageUrl === "" ? (
                    <div className="relative">
                        <div className={`rounded-b-2xl rounded-t-2xl border-2 ${Theme === "Dark" ? "border-black" : "border-white"} `}>
                        <svg
                            style={{ height: "6rem", width: "6rem" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2.5 -0.4 11 11"
                            className={`w-8 h-8 ${Theme === "Dark" ? "text-neutral-800" : "text-white"} rounded-lg`}
                            fill="currentColor"
                        >
                            <path
                                d="M2 3C2 3.5523 1.5523 4 1 4C0.44772 4 0 3.5523 0 3C0 1.44772 1.4477 0 3 0C4.5523 0 6 1.44772 6 3C6 4.285 5.5004 4.8678 4.4472 5.3944C4.0004 5.6178 4 5.6183 4 6C4 6.5523 3.5523 7 3 7C2.4477 7 2 6.5523 2 6C2 4.715 2.4996 4.1322 3.5528 3.6056C3.9996 3.3822 4 3.3817 4 3C4 2.55228 3.4477 2 3 2C2.5523 2 2 2.55228 2 3zM3 10C2.4477 10 2 9.5523 2 9C2 8.4477 2.4477 8 3 8C3.5523 8 4 8.4477 4 9C4 9.5523 3.5523 10 3 10z"
                            >
                            </path>
                        </svg>
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <img
                            style={{ height: "6rem", width: "6rem" }}
                            src={activity.DiscordActivityAssets.LargeImageUrl}
                            alt="Album Art"
                            className="rounded-lg"
                        />

                        {/* Small Image in Bottom-Right */}
                        {activity.DiscordActivityAssets.SmallImageUrl && (
                            <img
                                src={activity.DiscordActivityAssets.SmallImageUrl}
                                alt="Small Icon"
                                className="absolute bottom-0 right-0 h-6 w-6 rounded-full border border-gray-300 bg-white"
                            />
                        )}
                    </div>
                )}
                    {/* Details */}
                    <div className="flex flex-col ml-4">
                        <div>
                            <span className={` ${Theme === "Dark" ? "text-gray-500" : "text-gray-500"}`}>
                                Playing
                            </span>
                            <span style={{color: "#535bf2"}}> {activity.ActivityName} </span>
                        </div>
                        <div className="flex flex-col justify-center  h-full">
                            {/* Order is reversed if activity is Visual Studio Code */}
                            {activity.ActivityName === "Visual Studio Code" ? (
                                <>
                                    <p>{activity.Details}</p>
                                    <p>{activity.State}</p>
                                </>
                            ) : (
                                <>
                                    <p>{activity.State}</p>
                                    <p>{activity.Details}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ActivityComponent;