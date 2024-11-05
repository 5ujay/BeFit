import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWorkoutsByBodyPart } from "../api/workoutservice";
import { Link } from "react-router-dom";

const WorkoutDetail = () => {
  const { id } = useParams();
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const data = await fetchWorkoutsByBodyPart(id);
        setWorkouts(data);
        // console.log(data);       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWorkouts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        {id.charAt(0).toUpperCase() + id.slice(1)} Workouts
      </h1>
      {workouts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {workouts.map((workout) => (
            <Link to={`/workout/${workout.id}/info`} key={workout.id}>
            <div className="bg-white p-4 md:h-72 rounded-lg hover:shadow-white  hover:shadow-lg transition transform hover:scale-105">
              <h2 className="font-semibold text-lg text-center mb-4">
                {workout.name}
              </h2>
              {workout.gifUrl && (
                <img
                  src={workout.gifUrl}
                  alt={workout.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
            </div>
          </Link>
          
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No workouts available.</div>
      )}
    </div>
    </div>
  );
};

export default WorkoutDetail;


// /\s+/g is a regular expression (regex) that finds whitespace characters (\s).
// \s matches any whitespace character (e.g., space, tab).
// + means "one or more," so it matches groups of whitespace.
// g (global flag) ensures that it replaces all occurrences, not just the first.
