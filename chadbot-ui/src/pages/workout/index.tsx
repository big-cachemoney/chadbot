import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { WorkoutActivity } from '@/models/workoutActivity';
import { client } from '@/utils/axiosInstance';
import { withAuthGuard } from '@/hooks/useAuthContext';
const sampleExercises: WorkoutActivity[] = [
    {
      name: 'Cardio',
      time: 3600, // 1 hour in seconds
      weight: 0,
      set: 1,
      rep: 0
    },
    {
      name: 'Bicep curls',
      time: 0,
      weight: 5,
      set: 3,
      rep: 10
    },
    {
      name: 'Pull up',
      time: 0,
      weight: 10,
      set: 3,
      rep: 10
    },
    {
      name: 'Row',
      time: 0,
      weight: 20,
      set: 3,
      rep: 10
    },
    {
      name: 'Squats',
      time: 0,
      weight: 15,
      set: 4,
      rep: 12
    },
    {
      name: 'Push ups',
      time: 0,
      weight: 0,
      set: 3,
      rep: 15
    },
    {
      name: 'Running',
      time: 1800, // 30 minutes in seconds
      weight: 0,
      set: 1,
      rep: 0
    }
  ];
const WorkoutPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [exercises, setExercises] = useState<WorkoutActivity[]>([]);

  const fetchWorkoutData = async () => {
    try {
      // TODO: implement API
    //   const response = await client.get('/workout');
    //   setExercises(response.data.exercises || response.data || []);
    setExercises(sampleExercises)
    } catch (error) {
      console.error('Error fetching workout data:', error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setIsInitialLoading(true);
      await fetchWorkoutData();
      setIsInitialLoading(false);
    };
    
    loadInitialData();
  }, []);

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
    // TODO: implement API
      const response = await client.post('/workout', {
        exercises: exercises
      });
      console.log('Workout saved successfully:', response.data);
      alert('Workout saved successfully!');
    } catch (error) {
      console.error('Error saving workout:', error);
      alert('Failed to save workout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">Chadbot</h1>
        <div className="border-t border-gray-600 mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Next workout</h2>
          <button 
            onClick={fetchWorkoutData}
            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
            title="Refresh workout"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Scrollable Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
          {isInitialLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-400">Loading workout...</div>
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gray-700 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Exercise</th>
                    <th className="px-4 py-3 text-left font-semibold">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold">Weight</th>
                    <th className="px-4 py-3 text-left font-semibold">Sets x Reps</th>
                    <th className="px-4 py-3 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                        No exercises found. Click refresh to load workout data.
                      </td>
                    </tr>
                  ) : (
                    exercises.map((exercise, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-750">
                        <td className="px-4 py-3">{exercise.name}</td>
                        <td className="px-4 py-3">
                          {exercise.time > 0 ? `${Math.floor(exercise.time / 60)} min` : ''}
                        </td>
                        <td className="px-4 py-3">
                          {exercise.weight > 0 ? `${exercise.weight}kg` : ''}
                        </td>
                        <td className="px-4 py-3">
                          {exercise.set > 0 && exercise.rep > 0 
                            ? `${exercise.set} x ${exercise.rep}` 
                            : ''
                          }
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => removeExercise(index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                            title="Remove exercise"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className={`${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold py-3 px-8 rounded-lg transition-colors`}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </div>

        {/* Menu Icon */}
        <div className="fixed bottom-6 left-6">
          <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuthGuard(WorkoutPage);