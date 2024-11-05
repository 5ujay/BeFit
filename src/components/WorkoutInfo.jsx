import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWorkoutById } from "../api/workoutservice";

const WorkoutInfo = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWorkout = async () => {
      try {
        const data = await fetchWorkoutById(id);
        setWorkout(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWorkout();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-black p-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg lg:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          {workout.name}
        </h1>
        <div className="flex items-center justify-center">
          <img
            src={workout.gifUrl}
            alt={workout.name}
            className="w-60 h-72 object-cover rounded-lg mb-8"
          />
        </div>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            <strong>Target:</strong> {workout.target}
          </p>
          <p>
            <strong>Equipment:</strong> {workout.equipment}
          </p>
          <p>
            <strong>Secondary Muscles:</strong>
            {workout?.secondaryMuscles?.map((muscle, index) => (
              <li key={index}>{muscle}</li>
            ))}
          </p>
          <p className="font-semibold">Instructions:</p>
          <ol className="list-decimal pl-6 space-y-2">
            {workout?.instructions?.slice(0, 5).map((step, index) => (
              <li key={index} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInfo;
