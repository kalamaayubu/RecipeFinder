import PropTypes from 'prop-types';

// Card component accepts props for the image, name, description and a link for "view details"
function Card({ image, name, description, detailsUrl }) {

  // Open a new tab for the details
  const handleViewDetails = url => window.open(url, '_blank');

  return (
    <div className="mx-auto min-h-[400px] w-[350px] text-center flex flex-col align-center m-2 space-y-4 hover:cursor-pointer hover:shadow-xl shadow-lg rounded-lg">
      <img 
        src={image} 
        alt="Recipe image" 
        className="max-h-[60%] w-auto mx-auto object-contain"
      />
      <div className="px-2">
        <p className="text-[24px] font-bold text-left">{name}</p>
        <p className="font-semibold text-[18px] text-gray-800">{description}</p>
        <button 
          className="py-2 hover:bg-red-500 hover:shadow-lg border ring-1 ring-red-500 w-40 mx-auto rounded-full"
          onClick={() => {handleViewDetails(detailsUrl)}}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

// Props validation
Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
};

export default Card
