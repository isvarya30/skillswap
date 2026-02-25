import React, { useState, useEffect } from "react";
import { getSkills, addSkill, updateSkill, deleteSkill } from "../api";
import SkillForm from "../components/SkillForm";
import SkillList from "../components/SkillList";

const Dashboard = () => {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (err) {
        setMessage("Failed to load skills");
      }
    };
    fetchSkills();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editId) {
        const updated = await updateSkill(editId, name, level);
        setSkills(skills.map((s) => (s._id === editId ? updated : s)));
        setEditId(null);
      } else {
        const newSkill = await addSkill(name, level);
        setSkills([...skills, newSkill]);
      }
      setName("");
      setLevel("");
      setMessage("");
    } catch (err) {
      setMessage("Failed to save skill");
    }
  };

  const editSkill = (skill) => {
    setName(skill.name);
    setLevel(skill.level);
    setEditId(skill._id);
  };

  const removeSkill = async (id) => {
    try {
      await deleteSkill(id);
      setSkills(skills.filter((s) => s._id !== id));
    } catch (err) {
      setMessage("Failed to delete skill");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 p-10">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Dashboard
      </h1>

      {message && (
        <p className="text-center text-red-200 font-semibold mb-4">{message}</p>
      )}

      <SkillForm
        name={name}
        level={level}
        setName={setName}
        setLevel={setLevel}
        handleSubmit={handleSubmit}
        editId={editId}
      />

      <SkillList
        skills={skills}
        editSkill={editSkill}
        deleteSkill={removeSkill}
      />
    </div>
  );
};

export default Dashboard;
