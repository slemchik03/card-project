import Header from "../components/Header/Header";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF8F2] min-h-screen ">
        <div className="px-6 mx-auto max-w-[1230px]">
          <Header />
          <Intro />
        </div>
      </div>
    </div>
  );
}
