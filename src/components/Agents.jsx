import { useState, useEffect } from "react";

const Agents = () => {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    location: "",
    price: "",
    image: "",
    rooms: "",
    bathrooms: "",
  });

  const defaultProperties = [
    {
      id: 1,
      location: "Kuala Lumpur",
      price: 780000,
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      location: "Kuching, Kota Kinabalu",
      price: 230000,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      location: "Shah Alam",
      price: 770000,
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      location: "Malacca City",
      price: 320000,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      location: "Alor Setar and Miri",
      price: 650000,
      image:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      location: "Johor Bahru",
      price: 990000,
      image:
        "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      location: "Subang Jaya",
      price: 12300000,
      image:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      location: "Iskandar Puteri",
      price: 670000,
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      location: "while Ipoh",
      price: 330000,
      image:
        "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      location: "Iskandar Puteri",
      price: 3400000,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  useEffect(() => {
    const storedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    if (storedProperties.length === 0) {
      localStorage.setItem("properties", JSON.stringify(defaultProperties));
      setProperties(defaultProperties);
    } else {
      setProperties(storedProperties);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      const updatedProperties = properties.map((property) =>
        property.id === formData.id ? { ...formData } : property
      );
      setProperties(updatedProperties);
    } else {
      const newProperty = { ...formData, id: Date.now() };
      setProperties((prev) => [...prev, newProperty]);
    }
    localStorage.setItem("properties", JSON.stringify(properties));
    resetForm();
  };

  const handleEdit = (property) => {
    setFormData(property);
  };

  const handleDelete = (id) => {
    const updatedProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const resetForm = () => {
    setFormData({
      id: null,
      location: "",
      price: "",
      image: "",
      rooms: "",
      bathrooms: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Agent Listing</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="rooms"
          placeholder="Number of Rooms"
          value={formData.rooms}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Number of Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {formData.id ? "Update Property" : "Add Property"}
        </button>
      </form>

      <h3 className="text-xl font-semibold text-black mb-2">Your Listings</h3>
      {properties.length === 0 ? (
        <p className="text-black">No properties listed.</p>
      ) : (
        <ul className="list-disc pl-5">
          {properties.map((property) => (
            <li
              key={property.id}
              className="flex justify-between items-center mb-2"
            >
              <span className="text-black">
                {property.location} - ${property.price}
              </span>
              <div>
                <button
                  onClick={() => handleEdit(property)}
                  className="text-blue-500 mx-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Agents;
