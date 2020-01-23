import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CONCERTS = gql`
  {
    categories {
      id
    }
  }
`;

export const Concert = () => {
  const { loading, error, data } = useQuery(CONCERTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // return data.rates.map(({ currency, rate }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));

  return <></>;
};
