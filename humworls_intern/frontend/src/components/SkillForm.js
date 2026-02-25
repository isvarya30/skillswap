import React from "react";

function SkillForm({ name, level, setName, setLevel, handleSubmit, editId }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        {editId ? "Update Skill" : "Add Skill"}
      </h2>

      <input
        className="border border-gray-300 p-3 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Skill Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />

      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        {editId ? "Update Skill" : "Add Skill"}
      </button>
    </div>
  );
}

export default SkillForm;
