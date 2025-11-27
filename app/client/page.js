import React from "react";
import ClientList from "./ClientList";
import ClientListItem from "../components/ClientListItem";


const page = () => {
  return (
    <div>
      <ClientList />
      <ClientListItem />
    </div>
  );
};

export default page;
