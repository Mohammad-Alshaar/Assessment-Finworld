import CardOfProperty from "./CardOfProperty";
import { Link } from "react-router-dom";

const properties = [
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
    location: " Iskandar Puteri",
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

const CardList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Latest Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <CardOfProperty key={property.id} property={property} />
        ))}
      </div>
      <Link to="/agents" className="bg-blue-500 text-white px-4   py-2 rounded">
        Go to Agents
      </Link>
      <Link to="/filter" className="bg-blue-500 text-white px-4  py-2 rounded">
        Go to Filter
      </Link>
    </div>
  );
};

export default CardList;
