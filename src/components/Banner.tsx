import BannerImage from "../assets/Banner.jpg"
import { useTheme} from "../ThemeContext.tsx";

const Banner = () => {
    const {ToggleTheme} = useTheme();


    return (
        <div className="banner" onClick={ToggleTheme}>
            <div className="rounded-b-lg rounded-t-lg overflow-hidden">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className=""
                />
            </div>
        </div>
    );
};

export default Banner

