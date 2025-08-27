// app/components/TarjetaTailwind.js
import Image from 'next/image';

const TarjetaTailwind = ({ titulo, descripcion, imagen, etiqueta }) => {
  return (
    <div className="flex flex-col w-64 m-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-40 mb-4">
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>
        <p className="mt-2 text-sm text-gray-600">{descripcion}</p>
      </div>
      <div className="mt-4">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full font-semibold">
          {etiqueta}
        </span>
      </div>
    </div>
  );
};

export default TarjetaTailwind;