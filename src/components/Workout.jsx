import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBodyParts } from '../workoutService';
import workoutImages from '../workoutImages';

const Workout = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBodyParts = async () => {
      try {
        const data = await fetchBodyParts();
        setBodyParts(data);
        // console.log(data);
         //API returns an array of body parts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBodyParts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-red-500 text-black py-20 flex flex-col items-center text-center ">
        <h1 className="text-4xl font-bold mb-4">Get Fit with Our Workouts</h1>
        <p className="text-lg mb-8">Choose a workout category below</p>
      </div>

      {/* Body Parts Section */}
      <div className='bg-black'>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Workout Body Parts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bodyParts.map((part, index) =>{

          const workoutImage = workoutImages.find(img => img.name.toLowerCase() === part.toLowerCase());
            return(
              <Link to={`/workout/${part}`} key={index} className="bg-white p-5 rounded-lg hover:shadow-white hover:shadow-lg transition">
                <h3 className="font-semibold text-lg">{part.toUpperCase()}</h3>
                <img
                  src={workoutImage ? workoutImage.img : "No image found"}
                  alt={part}
                  className="w-full h-40 object-cover rounded-lg mt-4"
                />
              </Link>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Workout;
