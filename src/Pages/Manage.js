import React from "react";
import useServices from "./Hooks/useServices";

const Manage = () => {
  const { services, setServices } = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure yoy want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((data) => {
        console.log(data);

        const remainning = services.filter((service) => service._id !== id);
        setServices(remainning);
      });
    }
  };
  return (
    <div>
      <h2>Manage Your Services</h2>
      {services.map((service) => (
        <div className="w-50 mx-auto">
          <h4>
            {service.name}
            <button onClick={() => handleDelete(service._id)}> -</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Manage;
