import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardOfProperty = ({ property }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={property.image}
        alt={property.location}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl text-black mb-2">
          {property.location}
        </h2>
        <p className="text-gray-700 text-base">Price: ${property.price}</p>
        <Link
          to={`/properties/${property.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
CardOfProperty.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardOfProperty;
