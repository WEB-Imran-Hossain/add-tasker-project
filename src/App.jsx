
import HeroSection from "./components/HeroSection";
import Taskboard from "./components/task/TaskBoard";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function App (){
    return (
        <>
        <Header></Header>
        <div className="flex flex-col items-center justify-center">
        <HeroSection></HeroSection>
        <Taskboard></Taskboard>
        </div>
        <Footer></Footer>
        </>
    );
}