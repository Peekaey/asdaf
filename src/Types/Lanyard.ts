
export interface Lanyard {
    Activity: Discord_Activity[]
    Spotify: Lanyard_Spotify
    ListeningToSpotify: boolean
}

// Dependent on  "listening_to_spotify" boolean
export interface Lanyard_Spotify {
    Album: string;
    AlbumArt: string;
    Artist: string;
    Song: string;
    TrackId: string;
}

export interface Discord_Activity {
    ActivityName: string;
    State: string; // Playing ....
    Details: string; // In ....
    Timestamp: Date;
    DiscordActivityAssets: Discord_Activity_Assets;
}

export interface Discord_Activity_Assets {
    LargeImageUrl: string;
    LargeImageText: string;
    SmallImageUrl: string;
    SmallImageText: string;
}

export interface LanyardApi {
    data : {
        discord_user: discord_user;
        activities: activites[];
        discord_status: string;
        listening_to_spotify: boolean;
        spotify: spotify;
    };
    success: boolean;
}

// Types for Lanyard API
export interface discord_user {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    avatar_decoration_data: avatar_decoration_data;
}

export interface avatar_decoration_data {
    sku_id: string;
    asset: string;
    bot: boolean;
    global_name: string;
    priamry_guild_id: string;
    display_name: string;
}

export interface activites {
    id: string;
    name: string
    type: number;
    state: string;
    details: string;
    application_id: string;
    assets: assets;
}

export interface assets {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
}

export interface spotify {
    timestamps: timestamps;
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
    track_id: string;
}

export interface timestamps {
    start: bigint;
    end: bigint;
}