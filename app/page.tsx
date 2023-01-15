import ExellentFeatures from "../components/ExellentFeatures/ExellentFeatures";
import Header from "../components/Header/Header";
import Intro from "../components/Intro";


export default async function Home() {
  return (
    <div>
      <div className="bg-[#FFF8F2] min-h-[70vh] xl:min-h-[90vh] ">
        <div className="px-6 mx-auto max-w-[1230px]">
          <Header />
          <Intro />
        </div>
      </div>
      <ExellentFeatures />
    </div>
  );
}
