import BannerImage from "../assets/Banner.jpg"
import { useTheme} from "../ThemeContext.tsx";

const BannerComponent = () => {
    const {Theme,ToggleTheme} = useTheme();

    return (
        <div className={`banner ${Theme === "Dark" ? "image-light-glow" : "image-dark-glow" } `} onClick={ToggleTheme}>
            <div className="rounded-b-2xl rounded-t-2xl overflow-hidden">
                <img src={BannerImage} alt="BannerComponent" className=""
                />
            </div>
        </div>
    );
};

export default BannerComponent;

