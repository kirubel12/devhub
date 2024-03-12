"use client";
import React from "react";
import { useAuth } from "@clerk/clerk-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { supabaseClient } from "@/lib/supabaseClient";

const Dashboard = () => {
  // const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = await supabaseClient(
      getToken({
        template: "supabase",
      })
    );
    const { data, error } = await supabase
      .from("projects")
      .insert({ title, link });
    console.log(data);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white">Dashboard</h2>
    </div>
  );
};

export default Dashboard;
