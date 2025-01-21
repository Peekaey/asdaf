import {useTheme} from "../../ThemeContext.tsx";
import { FaAws, FaDocker, FaNodeJs , FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiAwslambda} from "react-icons/si";
import { BiLogoPostgresql} from "react-icons/bi";
import {DiMsqlServer} from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const FrameworksGridComponent = () => {
    const {Theme} = useTheme();

    return (
        <div>
            <h3 style={{paddingTop: "2em"}}
                className={`${Theme === "Dark" ? "text-black" : "text-white"} bl-2`}>Frameworks & Technologies </h3>
            <div
                className={`inline-flex justify-center items-center rounded-b-2xl rounded-t-2xl  p-2 ${Theme === "Dark" ? "border-black" : "border-white"} space-x-2`}>

                <a href="https://dotnet.microsoft.com/en-us/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`w-12 h-12 ${Theme === "Dark" ? "fill-black" : "fill-white"}`}>
                        <path
                            d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.docker.com/">
                    <FaDocker className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://aws.amazon.com/">
                    <FaAws className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://aws.amazon.com/lambda/">
                    <SiAwslambda className={`h-8 w-8 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://www.microsoft.com/en-au/sql-server/sql-server-downloads">
                    <DiMsqlServer className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://www.postgresql.org/">
                    <BiLogoPostgresql className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://nodejs.org/en">
                    <FaNodeJs className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://react.dev/">
                    <FaReact className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://reactnative.dev/">
                    <TbBrandReactNative className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>
                <a href="https://tailwindcss.com/">
                    <RiTailwindCssFill className={`h-10 w-10 ${Theme === "Dark" ? "text-black" : "text-white"}`}/>
                </a>

            </div>
        </div>
    )
}

export default FrameworksGridComponent;