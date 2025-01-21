import {useTheme} from "../../ThemeContext.tsx";
import discordIcon from "../../assets/site/discord-logo.svg"

const SocialsGridComponent = () => {
    const {Theme} = useTheme();

    return (
        <div>
            <h3 style={{paddingTop: "2em"}} className={`${Theme === "Dark" ? "text-black" : "text-white"}`}>Links: </h3>
            <div
                className={`inline-flex justify-center items-center rounded-b-2xl rounded-t-2xl  p-2 ${Theme === "Dark" ? "border-black" : "border-white"} space-x-2`}>
                <a href="https://discord.com/users/181661376584876032">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 127.14 96.36"
                        className={`w-8 h-9 ${Theme === "Dark" ? "text-neutral-800" : "text-white"} rounded-lg`}
                        fill="currentColor"
                    >
                        <path
                            d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                    </svg>
                </a>
                <a href="https://github.com/Peekaey">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className={`w-8 h-8 ${Theme === "Dark" ? "text-black" : "text-white"} rounded-lg`}
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                            transform="scale(64)"
                        />
                    </svg>
                </a>
                <a href="https://stats.fm/peekaey">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 508.896 508.896"
                        className={`w-7 h-7 ${Theme === "Dark" ? "text-black" : "text-white"} `}
                        fill="currentColor"
                    >
                        <path
                            d="M77.7698 151.964H31.8607C14.3745 151.964 0.199219 166.169 0.199219 183.691V477.17C0.199219 494.691 14.3745 508.896 31.8607 508.896H77.7698C95.256 508.896 109.431 494.691 109.431 477.17V183.691C109.431 166.169 95.256 151.964 77.7698 151.964Z"></path>
                        <path
                            d="M277.239 0.72998H231.33C213.843 0.72998 199.668 14.9348 199.668 32.4574V477.17C199.668 494.691 213.843 508.896 231.33 508.896H277.239C294.726 508.896 308.9 494.691 308.9 477.17V32.4574C308.9 14.9348 294.726 0.72998 277.239 0.72998Z"></path>
                        <path
                            d="M476.702 291.035H430.794C413.306 291.035 399.133 305.24 399.133 322.761V477.168C399.133 494.691 413.306 508.896 430.794 508.896H476.702C494.19 508.896 508.363 494.691 508.363 477.168V322.761C508.363 305.24 494.19 291.035 476.702 291.035Z"></path>
                    </svg>
                </a>
                <a
                    href="https://steamcommunity.com/id/Peekaey/"
                    className="flex justify-center items-center w-8 h-8 rounded-lg bg-transparent"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1450 1500"
                        className={`${Theme === "Dark" ? "text-black" : "text-white"} w-full h-full`}
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 23c6.075 0 11 -4.925 11 -11S18.075 1 12 1C6.248 1 1.527 5.415 1.041 11.042l5.92 2.494a3.235 3.235 0 0 1 1.892 -0.534l2.409 -3.433a4.25 4.25 0 1 1 4.127 3.93l-3.406 2.414a3.25 3.25 0 0 1 -6.447 0.82l-4.123 -1.737C2.718 19.616 6.963 23 12 23Zm-3.25 -4.371a2.38 2.38 0 0 1 -2.198 -1.467l1.36 0.572A1.75 1.75 0 0 0 9.27 14.51l-1.246 -0.525a2.379 2.379 0 1 1 0.726 4.645Zm6.904 -11.127a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0 -3.5Zm-2.75 1.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1 -5.5 0Z"
                            transform="scale(64)"
                        />
                    </svg>
                </a>
                <a
                    href="https://anilist.co/user/Peekaey/"
                    className="flex justify-center items-center w-8 h-8 rounded-lg bg-transparent"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`${Theme === "Dark" ? "text-black" : "text-white"} w-full h-full`}
                        fill="currentColor"
                        role="img"
                    >
                        <path
                            d="M6.361 2.943 0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948 1.688 5.018H7.144z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SocialsGridComponent;