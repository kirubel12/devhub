"use client";
import React, { Suspense } from "react";
import { useAuth } from "@clerk/clerk-react";
import { supabaseClient } from "@/lib/supabaseClient";
import Loading from "./loading";
import { Button } from "@/components/ui/button";
import { useSession } from "@clerk/nextjs";
const Dashboard = () => {
  const { userId } = useAuth();
  const { session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabaseAcessToken = await session?.getToken({
      template: "supabase",
    });

    try {
      const supabase = await supabaseClient(supabaseAcessToken);

      const { data, error } = await supabase
        .from("Projects")
        .select("*")
        .eq("user_id", userId);
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log("No Project Found", error);
      }
    } catch (error) {
      console.log("Not able to fetch projects", error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <Button onClick={handleSubmit}>fetch projects</Button>
      </div>
    </Suspense>
  );
};

export default Dashboard;
