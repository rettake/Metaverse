import React from "react";
import { useParams } from "react-router";
import { useGetParticipantByIdQuery } from "../../app/services/participants";
import Layout from "../../components/Layout/Layout";
import PersonalData from "../../components/PersonalData/PersonalData";
import Typography from "../../components/UI/Typography/Typography";

const PersonalInfo = () => {
  const param = useParams();
  const { data, isLoading } = useGetParticipantByIdQuery(param?.id || "");

  return (
    <main>
      <Layout>
        {isLoading ? (
          <Typography
            type="p"
            color="#fff"
            style={{ textAlign: "center", fontSize: "50px" }}
          >
            Loading...
          </Typography>
        ) : (
          <PersonalData
            name={data?.username}
            email={data?.email}
            wallet={data?.address}
          />
        )}
      </Layout>
    </main>
  );
};

export default PersonalInfo;
