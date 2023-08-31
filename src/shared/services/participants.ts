import { api } from "./api";

interface IParticipant {
  username: string;
  email: string;
  address: string;
}

export const participantsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllParticipants: builder.query<any, void>({
      query: () => ({
        url: "/data?page=1&perPage=50",
        method: "GET",
      }),
    }),
    getParticipantById: builder.query<IParticipant, string>({
      query: (id) => ({
        url: `/data/id/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllParticipantsQuery, useGetParticipantByIdQuery } =
  participantsApi;

export const {
  endpoints: { getAllParticipants, getParticipantById },
} = participantsApi;
