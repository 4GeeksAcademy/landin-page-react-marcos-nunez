import HomePageAlert from "../components/HomePage/HomePageAlert";
import HomePageCards from "../components/HomePage/HomePageCards";
import HomePageFooter from "../components/HomePage/HomePageFooter";
import HomePageHeader from "../components/HomePage/HomePageHeader";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageAlert />
      <HomePageCards />
      <HomePageFooter />
    </>
  );
};

export default HomePage;
