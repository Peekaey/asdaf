import {useTheme} from "../../ThemeContext.tsx";
import {SiHtml5, SiCss3, SiJavascript, SiTypescript} from "react-icons/si";

const LanguagesGridComponent = () => {
    const {Theme} = useTheme();

    return (
        <div>
            <h3 style={{paddingTop: "2em"}} className={`${Theme === "Dark" ? "text-black" : "text-white"} bl-2`}>Languages </h3>
            <div
                className={`inline-flex justify-center items-center rounded-b-2xl rounded-t-2xl  p-2 ${Theme === "Dark" ? "border-black" : "border-white"} space-x-2`}>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"

                        className={`w-10 h-10 ${Theme === "Dark" ? "fill-black" : "fill-white"}`}>
                        <path
                            d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.rust-lang.org/">
                    <svg
                        version="1.1"
                        height="106"
                        width="106"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 106 106"
                        className={`w-10 h-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}
                        fill="currentColor"
                        stroke="currentColor">
                        <g id="logo" transform="translate(53, 53)">
                            <path
                                id="r"
                                transform="translate(0.5, 0.5)"
                                strokeWidth="1"
                                strokeLinejoin="round"
                                d="M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40 V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35 V -15 H -25 V 11 H -40 Z"/>
                            <g id="gear" mask="url(#holes)">
                                <circle
                                    r="43"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="9"/>
                                <g id="cogs">
                                    <polygon
                                        id="cog"
                                        strokeWidth="3"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="46,3 51,0 46,-3"/>
                                    <use xlinkHref="#cog" transform="rotate(11.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(22.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(33.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(45.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(56.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(67.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(78.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(90.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(101.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(112.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(123.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(135.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(146.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(157.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(168.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(180.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(191.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(202.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(213.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(225.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(236.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(247.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(258.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(270.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(281.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(292.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(303.75)"/>
                                    <use xlinkHref="#cog" transform="rotate(315.00)"/>
                                    <use xlinkHref="#cog" transform="rotate(326.25)"/>
                                    <use xlinkHref="#cog" transform="rotate(337.50)"/>
                                    <use xlinkHref="#cog" transform="rotate(348.75)"/>
                                </g>
                                <g id="mounts">
                                    <polygon
                                        id="mount"
                                        strokeWidth="6"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="-7,-42 0,-35 7,-42"/>
                                    <use xlinkHref="#mount" transform="rotate(72)"/>
                                    <use xlinkHref="#mount" transform="rotate(144)"/>
                                    <use xlinkHref="#mount" transform="rotate(216)"/>
                                    <use xlinkHref="#mount" transform="rotate(288)"/>
                                </g>
                            </g>
                            <mask id="holes">
                                <rect x="-60" y="-60" width="120" height="120" fill="white"/>
                                <circle id="hole" cy="-40" r="3"/>
                                <use xlinkHref="#hole" transform="rotate(72)"/>
                                <use xlinkHref="#hole" transform="rotate(144)"/>
                                <use xlinkHref="#hole" transform="rotate(216)"/>
                                <use xlinkHref="#hole" transform="rotate(288)"/>
                            </mask>
                        </g>
                    </svg>
                </a>
                <a href="https://www.typescriptlang.org/">
                    <SiTypescript className={`w-10 h-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://www.javascript.com/">
                    <SiJavascript className={`w-10 h-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    <SiCss3 className={`w-10 h-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    <SiHtml5 className={`w-10 h-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
            </div>
        </div>
    )
}

export default LanguagesGridComponent