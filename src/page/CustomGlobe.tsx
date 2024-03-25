import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";

function CustomGlobe() {
  // const N = 20;
  // const arcsData1 = [...Array(N).keys()].map(() => ({
  //   startLat: (Math.random() - 0.5) * 180,
  //   startLng: (Math.random() - 0.5) * 100,
  //   endLat: (Math.random() - 0.5) * 180,
  //   endLng: (Math.random() - 0.5) * 500,
  //   color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  // }));
  // const arcsData = [...Array(1).keys()].map(() => ({
  //   startLat: 1000,
  //   startLng: 0,
  //   endLat: 0,
  //   endLng: 0,
  //   color: "red",
  // }));
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <h1 className="text-white font-semibold font-[yg-jalnan] absolute top-5 left-[40%] z-[10]">
        판다를 클릭하세요!
      </h1>
      <Globe
        globeImageUrl="../panda2.webp"
        backgroundImageUrl="../Bamboo.png"
        // arcColor={"color"}
        // labelText="duddududu"
        onGlobeClick={() => navigate("login")}
      />
    </div>
  );
}

export default CustomGlobe;
