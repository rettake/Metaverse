import React from "react";
import { useParams } from "react-router";
import { useGetParticipantByIdQuery } from "../../app/services/participants";
import Layout from "../../components/Layout/Layout";
import PersonalData from "../../components/PersonalData/PersonalData";

const PersonalInfo = () => {
  const param = useParams();
  const { data, isLoading } = useGetParticipantByIdQuery(param?.id || "");

  return (
    <main>
      <Layout>
        {isLoading ? (
          <h1
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Loading...
          </h1>
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
