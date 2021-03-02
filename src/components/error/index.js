import React from "react";
import notFound from "../../images/notFound.png";

const Error = () => {
  return (
    <div className="flex flex-grow">
      <div className="m-auto">
        <img
          className="w-3/6 mx-auto"
          src={notFound}
          alt="404 ressource not found"
        />
        <p className="text-cyan-500 font-bold text-3xl text-center">
          Oopsie, la page que vous recherchez n'éxiste pas !
        </p>
      </div>
    </div>
  );
};

export default Error;
