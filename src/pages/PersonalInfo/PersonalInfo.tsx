import React from "react";
import { useParams } from "react-router";
import { useGetParticipantByIdQuery } from "../../shared/services/participants";
import Layout from "../../widgets/Layout/Layout";
import PersonalData from "../../entities/PersonalData/PersonalData";
import Typography from "../../shared/UI/Typography/Typography";

const PersonalInfo = () => {
  const param = useParams();
  const { data, isLoading } = useGetParticipantByIdQuery(param?.id || "");

  return (
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
  );
};

export default PersonalInfo;
