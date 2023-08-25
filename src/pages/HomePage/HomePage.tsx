import BetaRegistration from "../../components/BetaRegistration/BetaRegistration";
import Layout from "../../components/Layout/Layout";
import PlanetSection from "../../components/PlanetSection/PlanetSection";

interface IProps {

}

const HomePage = () => {
  return (
    <main>
      <Layout>
        <PlanetSection />
        <BetaRegistration />
      </Layout>
    </main>
  )
}

export default HomePage;