import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";

const Statistics = () => {
  const coursesData = useLoaderData();
  const courses = coursesData.data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-40 min-h-[100vh] flex justify-center">
      <ResponsiveContainer width="80%" height={400}>
        <LineChart
          data={courses}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#3abfef"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
