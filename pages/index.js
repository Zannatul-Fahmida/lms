import Head from "next/head";
import Navbar from "../components/Shared/Navbar";
import Banner from "../components/Home/Banner";
import CareerGoal from "../components/Home/CareerGoal";
import TopCourses from "../components/Home/TopCourses";
import PopularCourses from "../components/Home/PopularCourses";
import PlatformStats from "../components/Home/PlatformStats";
import Footer from "../components/Shared/Footer";
import About from "../components/Home/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online Learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <About />
        <CareerGoal />
        <TopCourses />
        <PopularCourses />
        <PlatformStats />
        <Footer />
      </main>
    </>
  );
}