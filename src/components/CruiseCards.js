import React from 'react';

const CruiseCards = () => {
  const cruises = [
    {
      title: 'Caribbean Escape',
      description: 'Sail into paradise with crystal-clear waters, white sandy beaches, and endless sunshine.',
      image: 'https://source.unsplash.com/400x300/?cruise,caribbean'
    },
    {
      title: 'Mediterranean Marvel',
      description: 'Explore the timeless charm of Europe with stops in Italy, Greece, and Spain.',
      image: 'https://source.unsplash.com/400x300/?cruise,mediterranean'
    },
    {
      title: 'Alaskan Adventure',
      description: 'Witness breathtaking glaciers, majestic wildlife, and stunning natural landscapes.',
      image: 'https://source.unsplash.com/400x300/?cruise,alaska'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Our Cruises and Adventures</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cruises.map((cruise, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={cruise.image} alt={cruise.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{cruise.title}</h3>
              <p className="text-gray-600">{cruise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CruiseCards;
