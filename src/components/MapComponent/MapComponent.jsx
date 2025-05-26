import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import React from 'react';

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%'
};

const STADIUM_COORDINATES = {
  lat: 53.4831,
  lng: -2.2002
};

export const MapComponent = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      className="relative h-full w-full"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Map Container */}
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl h-full w-full"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.02 }
        }}
      >
        <div className="aspect-[4/3] relative">
          <LoadScript 
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            loadingElement={<div className="h-full w-full bg-gray-100 animate-pulse" />}
          >
            <motion.div
              className="absolute inset-0"
              variants={{
                rest: { height: '50%', y: '50%' },
                hover: { height: '100%', y: 0 }
              }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <GoogleMap
                mapContainerStyle={MAP_CONTAINER_STYLE}
                center={STADIUM_COORDINATES}
                zoom={15}
                options={{
                  disableDefaultUI: true,
                  styles: [
                    {
                      featureType: "poi",
                      elementType: "labels",
                      stylers: [{ visibility: "off" }]
                    },
                    {
                      featureType: "transit",
                      elementType: "labels",
                      stylers: [{ visibility: "off" }]
                    }
                  ]
                }}
              >
                <Marker 
                  position={STADIUM_COORDINATES} 
                  icon={{
                    url: '/map-pin.png',
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                />
              </GoogleMap>
            </motion.div>
          </LoadScript>

          {/* Location Card */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 z-10"
            variants={{
              rest: { opacity: 1, y: 0 },
              hover: { opacity: 0.8, y: -20 }
            }}
          >
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 mx-auto"
              >
                <MapPin className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Etihad Stadium</h3>
              <p className="text-gray-600 text-sm">Manchester, England</p>
            </div>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-2xl shadow-lg"
        animate={{
          y: [0, -15, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-400 rounded-2xl shadow-lg"
        animate={{
          y: [0, 15, 0],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};
