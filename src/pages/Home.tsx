import { div } from "motion/react-client";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Carousel from "@/utils/Carousel";

const Home = () => {
  return (
    <div className="w-full h-auto ">
      <Header />
      <Tasks />
      <Footer />
    </div>
  );
};

export default Home;

const Tasks = () => {
  return (
    <div className="w-full md:w-[70%] h-auto mx-auto py-5">
      <Carousel />
    </div>
  );
};

const Task = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};
