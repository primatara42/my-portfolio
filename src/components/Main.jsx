import React, { useState } from "react";

const Main = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
    photo: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm({ ...form, photo: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setExperiences(
        experiences.map((exp) => (exp.id === form.id ? { ...form } : exp))
      );
    } else {
      setExperiences([...experiences, { ...form, id: Date.now().toString() }]);
    }
    setForm({ id: "", title: "", photo: "", description: "", date: "" });
  };

  const handleEdit = (id) => {
    const experience = experiences.find((exp) => exp.id === id);
    setForm(experience);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Daftar Portofolio</h2>
      <form onSubmit={handleSubmit} className="mb-4 bg-gray-100 p-4 rounded">
        <label htmlFor="title" className="block mb-2">
          Judul Pengalaman
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul"
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <label htmlFor="photo" className="block mb-2">
          Gambar
        </label>
        <input
          type="file"
          name="photo"
          onChange={handleChange}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        {form.photo && (
          <img src={form.photo} alt="Uploaded" className="mb-4 max-w-xs" />
        )}
        <label htmlFor="description" className="block mb-2">
          Deskripsi Pengalaman
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Deskripsi"
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <label htmlFor="date" className="block mb-2">
          Tanggal
        </label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-[#6096B4] text-white p-2 rounded">
          {form.id ? "Ubah" : "Tambah"} Pengalaman
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Pengalaman Saya</h3>
      <ul>
        {experiences.map((exp) => (
                    <li className="">
                    <div className=" flex justify-between">
                      <div className="content_container flex ">
                        <img src={exp.photo} className="mb-2 max-w-xs w-[100px]" />
                        <div className="text_container mx-5">
                          {" "}
                          <h3 className="font-bold">{exp.title}</h3>
                          <p>{exp.description}</p>
                          <p className="text-[#9d9d9d]">{exp.date}</p>
                        </div>
                      </div>
                      <div className="button_container">
                      <button
                        onClick={() => handleEdit(exp.id)}
                        className="bg-[#F6995C] text-white rounded mr-5 px-5 py-3"
                      >
                        Ubah
                      </button>
                      <button
                        onClick={() => handleDelete(exp.id)}
                        className="bg-[#FF8080] text-white rounded mr-5 px-5 py-3"
                      >
                        Hapus
                      </button>
                    </div>
                    </div>
          
          
                  </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
