import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const properties = JSON.parse(localStorage.getItem("properties")) || [];
  const property = properties.find((property) => property.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="bg-gray-900 p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Property Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Location: {property.location}</h3>
        <p>
          <strong>Type:</strong> {property.type}
        </p>
        <p>
          <strong>Rooms:</strong> {property.rooms || "N/A"}
        </p>
        <p>
          <strong>Bathrooms:</strong> {property.bathrooms || "N/A"}
        </p>
        <p>
          <strong>Asking Price:</strong> ${property.price}
        </p>
      </div>
      <div className="mb-4">
        <img
          src={property.image}
          alt={property.location}
          className="w-full h-auto rounded"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Listings
      </button>
    </div>
  );
};

export default Details;
