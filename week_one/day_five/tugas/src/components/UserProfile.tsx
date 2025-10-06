import React, { useState } from "react";

const UserProfile: React.FC = () => {
  const [name, setName] = useState("Reza");
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>

      {isEditing ? (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-lg text-white w-full mb-2 bg-gray-700"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="p-2 rounded-lg text-white w-full mb-2 bg-gray-700"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Simpan
          </button>
        </>
      ) : (
        <>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg mt-2"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
