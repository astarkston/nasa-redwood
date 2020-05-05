export const schema = gql`
  type APOD {
    date: String
    explanation: String
    media_type: String
    service_version: String
    title: String
    url: String
  }

  type Query {
    getAPOD: APOD
  }
`;
