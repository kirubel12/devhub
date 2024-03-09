"use client";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex space-x-6">
      <Sidebar />
      <div className="">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <p>{user?.fullName}</p>
      </div>
    </div>
  );
};

export default Dashboard;
