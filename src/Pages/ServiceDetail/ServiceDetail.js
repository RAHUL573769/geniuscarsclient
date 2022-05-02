import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  });
  return (
    <div>
      <h2>You Are To Book: {user.name}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
