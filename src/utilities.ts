import {Discord_Activity, Lanyard, Lanyard_Spotify, LanyardApi} from "./Types/Lanyard.ts";

const DISCORD_ID = "181661376584876032";
const LANYARD_API_BASE_URL = "https://api.lanyard.rest/v1/users";


export const FetchLanyard = async (): Promise<Lanyard> => {
    console.log("Fetching Lanyard data...");
        const responseJson = await FetchData(`${LANYARD_API_BASE_URL}/${DISCORD_ID}`);
        return ParseLanyardData(responseJson as LanyardApi);
};

const FetchData = async (url: string): Promise<object> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};

const ParseLanyardData = (responseJson: LanyardApi): Lanyard => {
    try {
        const lanyardData: Lanyard = {
            Activity: responseJson.data.activities.map(activity => ({
                ActivityName: activity.name || '',
                State: activity.state || '',
                Details: activity.details || '',
                Timestamp: new Date(),
                DiscordActivityAssets: {
                    LargeImageUrl: ParseActivityImage(activity.assets?.large_image, activity.application_id, activity.assets?.large_image),
                    LargeImageText: activity.assets?.large_text || '',
                    SmallImageUrl: ParseActivityImage(activity.assets?.small_image, activity.application_id, activity.assets?.small_image),
                    SmallImageText: activity.assets?.small_text || ''
                }
            })) as Discord_Activity[],
            Spotify: {
                Album: responseJson.data.spotify?.album || '',
                AlbumArt: responseJson.data.spotify?.album_art_url || '',
                Artist: responseJson.data.spotify?.artist || '',
                Song: responseJson.data.spotify?.song || '',
                TrackId: responseJson.data.spotify?.track_id || ''
            },
            ListeningToSpotify: responseJson.data.listening_to_spotify,
        };
        return lanyardData;
    } catch (error) {
        console.error("Failed to parse Lanyard data:", error);
        return {
            Activity: [],
            Spotify: {
                Album: '',
                AlbumArt: '',
                Artist: '',
                Song: '',
                TrackId: ''
            },
            ListeningToSpotify: false,
        };
    }
};

const ParseActivityImage = (imageURL: string | null, applicationId: string | null, assetId: string | null) => {

    if (imageURL === null || imageURL === undefined || imageURL === "") {
        return "";
    }

    if (imageURL.includes("mp:")) {
        return imageURL.replace("mp:", "https://media.discordapp.net/");
    } else {
        return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetId}.png`;
    }
}