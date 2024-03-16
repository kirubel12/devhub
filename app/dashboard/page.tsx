"use client";
import React, { Suspense } from "react";
import Loading from "./loading";

const Dashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
      </div>
    </Suspense>
  );
};

export default Dashboard;
