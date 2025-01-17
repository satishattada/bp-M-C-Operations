"use client";
import React from "react";
import { useRouter } from "next/navigation";
import demand from "../../assets/images/demand.jpg";
import team from "../../assets/images/team.jpg";
import finance from "../../assets/images/finance.jpg";
import Image from "next/image";

function Dashboard() {
  const router = useRouter();
  const cards = [
    {
      id: 1,
      path: "demand-management",
      description: "Demand Management",
      image: demand,
    },
    {
      id: 2,
      path: "employeeManagement",
      description: "Employee Management",
      image: team,
    },
    {
      id: 3,
      path: "finance-management",
      description: "Finance Management",
      image: finance,
    },
  ];
  const handleCardClick = (path: string) => {
    router.push(`/${path}`);
  };
  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        {cards.map((card) => (
          <div
            className="card"
            onClick={() => handleCardClick(card.path)}
            key={card.id}
          >
            <Image
              src={card.image}
              className="card-img-top"
              alt="..."
              width={800}
              height={500}
            />
            <div className="card-body">
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
