import {Lanyard_Spotify} from "../../Types/Lanyard.ts";
import {useTheme} from "../../ThemeContext.tsx";

const SpotifyComponent = ({spotify}: {spotify: Lanyard_Spotify}) => {
    const {Theme} = useTheme();

    return (
        <div>
            <h3 className={` pt-3 ${Theme === "Dark" ? "text-black" : "text-white"}`} > </h3>
                <div className={`inline-flex ${Theme === "Dark" ? "text-black" : "text-white"} p-2`}>
                    <div className="flex justify-center items-center">
                        <img style={{height: "6rem", width: "6rem"}} src={spotify.AlbumArt} alt="Album Art"
                             className="rounded-lg size-16  "/>
                    </div>
                    <div className="flex flex-col ml-4 ">
                        <div>
                            <span className={` ${Theme === "Dark" ? "text-gray-500" : "text-gray-500"}`} >
                                Currently Listening
                            </span>
                            <a href={`https://open.spotify.com/track/${spotify.TrackId}`}><p>{spotify.Song}</p></a>
                        </div>
                        <div className="flex flex-col justify-center h-full">
                            <p>By {spotify.Artist}</p>
                            <p>On {spotify.Album}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SpotifyComponent;