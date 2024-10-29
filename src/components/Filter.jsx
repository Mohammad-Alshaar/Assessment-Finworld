import { useState } from "react";
import CardOfProperty from "./CardOfProperty";

const properties = [
  {
    id: 1,
    location: "Kuala Lumpur",
    price: 780000,
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 2,
    location: "Kuching, Kota Kinabalu",
    price: 230000,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 3,
    location: "Shah Alam",
    price: 770000,
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 4,
    location: "Malacca City",
    price: 320000,
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 5,
    location: "Alor Setar and Miri",
    price: 650000,
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for rent",
  },
  {
    id: 6,
    location: "Johor Bahru",
    price: 990000,
    image:
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 7,
    location: "Subang Jaya",
    price: 12300000,
    image:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 8,
    location: " Iskandar Puteri",
    price: 670000,
    image:
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for rent",
  },
  {
    id: 9,
    location: "while Ipoh",
    price: 330000,
    image:
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for sale",
  },
  {
    id: 10,
    location: "Iskandar Puteri",
    price: 3400000,
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "for rent",
  },
];

const Filter = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = properties.filter((property) => {
    const isLocationMatch = location
      ? property.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const isTypeMatch = type ? property.type === type : true;
    const isPriceMatch =
      (minPrice ? property.price >= minPrice : true) &&
      (maxPrice ? property.price <= maxPrice : true);

    return isLocationMatch && isTypeMatch && isPriceMatch;
  });

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Search Properties</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Type</option>
          <option value="for sale">For Sale</option>
          <option value="for rent">For Rent</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 w-full mb-2"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">Filtered Listings</h3>
      {filteredProperties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProperties.map((property) => (
            <CardOfProperty key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
