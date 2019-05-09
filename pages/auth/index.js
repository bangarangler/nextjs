import React from "react";

import User from "../../components/User.js";

const authIndexPage = props => {
  return (
    <div>
      <h1>The Auth Index Page - {props.appName}</h1>
      <User name="Jon" age={31} />
    </div>
  );
};

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "SuperApp (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
