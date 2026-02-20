import React from "react";

function SkillList({ skills, editSkill, deleteSkill }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Skill List</h2>
      {skills.length === 0 && (
        <p className="text-gray-400">No skills added yet.</p>
      )}
      {skills.map((skill) => (
        <div
          key={skill._id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <p className="font-semibold text-gray-800">{skill.name}</p>
            <p className="text-sm text-gray-500">{skill.level}</p>
          </div>
          <div className="space-x-2">
            <button
              className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
              onClick={() => editSkill(skill)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              onClick={() => deleteSkill(skill._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
