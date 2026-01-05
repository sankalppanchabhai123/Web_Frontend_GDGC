'use client';

import { motion } from 'framer-motion';
import { Code, Users, Palette, PresentationIcon as PresentationChart, Megaphone } from 'lucide-react';

const categories = [
  { name: 'Technical', icon: Code },
  { name: 'Management', icon: Users },
  { name: 'Design', icon: Palette },
  { name: 'PR', icon: Megaphone },
  { name: 'Media', icon: PresentationChart },
];

const IconFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="  mt-20 flex justify-center space-x-4 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.name}
          className={`p-3 rounded-full ${
            activeCategory === category.name
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              : 'bg-white text-gray-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.name)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: activeCategory === category.name ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <category.icon size={24} />
          </motion.div>
        </motion.button>
      ))}
    </div>
  );
};

export default IconFilter;
