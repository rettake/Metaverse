import { useGetAllParticipantsQuery } from "../../app/services/participants";
import BetaRegistration from "../../components/BetaRegistration/BetaRegistration";
import Layout from "../../components/Layout/Layout";
import PlanetSection from "../../components/PlanetSection/PlanetSection";

const HomePage = () => {
  const { data, isLoading } = useGetAllParticipantsQuery();

  return (
    <Layout>
      <PlanetSection />
      <BetaRegistration items={data?.items} isLoading={isLoading} />
    </Layout>
  );
};

export default HomePage;
