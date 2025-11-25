import React from "react";

function Card({ username, age, role }) {
  return (
    <div className="bg-white w-80 p-6 rounded-2xl shadow-md text-center">
      <img
        src="https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.webp"
        alt="profile"
        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-xl font-semibold">{username}</h2>

      <p className="text-gray-600">{age}</p>

      <p className="text-gray-500 mt-1">{role}</p>
    </div>
  );
}

export default Card;
