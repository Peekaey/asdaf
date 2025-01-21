import {useEffect, useState} from 'react'
import './App.css'
import './index.css'
import BannerComponent from "./components/BannerComponent.tsx";
import LanyardComponent from "./components/Lanyard/LanyardComponent.tsx";
import SocialsGridComponent from "./components/GridStack/SocialsGridComponent.tsx";
import Modal from "./components/ModalPopup.tsx";
import {FetchLanyard} from "./utilities.ts"
import {Lanyard} from "./Types/Lanyard.ts";
import Reason from "./assets/site/reason.png"
import LiveTimerComponent from "./components/LiveTimerComponent.tsx";
import LanguagesGridComponent from "./components/GridStack/LanguagesGridComponent.tsx";
import FrameworksGridComponent from "./components/GridStack/FrameworksGridComponent.tsx";
import {useTheme} from "./ThemeContext.tsx";

function App() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentModalUrl, setCurrentModalUrl] = useState<string | null>(null);
    const [lanyardData, setLanyardData] = useState<Lanyard | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const {Theme} = useTheme();

    const openModal = (url: string) => {
        setCurrentModalUrl(url);
        setModalVisible(true);
    };
    const closeModal = () => setModalVisible(false);

    useEffect(() => {
        const fetchLanyardData = async () => {
            try {
              const lanyardData = await FetchLanyard();
                setLanyardData(lanyardData);
            } catch (err: any) {

            } finally {
                setLoading(false);
            }
        }
        fetchLanyardData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

  return (
      <>
          <div className="flex justify-center items-center flex-col h-full ">
              <LiveTimerComponent/>
              <div style={{maxWidth: "70%"}} className=" mt-10">
                  <BannerComponent/>
              </div>
              <div className="">
                  <button style={{color: Theme === "Dark" ? "#242424" : "inherit", background: Theme === "Dark" ? "inherit" : "inherit" }} className="mt-10 w-50"
                          onClick={() => openModal(Reason)}>
                      [ Full time shitter ツ ]
                  </button>
              </div>
              <LanyardComponent lanyardData={lanyardData}/>
              <LanguagesGridComponent/>
              <FrameworksGridComponent/>
              <Modal
                  isVisible={isModalVisible}
                  onClose={closeModal}
                  imageUrl={currentModalUrl || ""}
              />
              <SocialsGridComponent/>
          </div>
      </>
  )
}

export default App
