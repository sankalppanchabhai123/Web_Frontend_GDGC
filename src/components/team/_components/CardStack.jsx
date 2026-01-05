'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TeamCard from './Card';

const TeamCardStack = ({ initialTeamMembers }) => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setTeamMembers(initialTeamMembers);
  }, [initialTeamMembers]);

  const handleRemoveCard = (id) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (id) => {
    setIsDragging(false);
    setTimeout(() => {
      handleRemoveCard(id);
    }, 0); // Delay ensures `isDragging` state updates before the click event
  };

  const handleCardDoubleClick = (member) => {
    if (!isDragging) {
      setSelectedMember(member);
    }
  };

  return (
    <div className="relative w-72 h-96">
      <AnimatePresence>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.id}
            {...member}
            index={index}
            onDragStart={handleDragStart}
            onDragEnd={() => handleDragEnd(member.id)}
            onDoubleClick={() => handleCardDoubleClick(member)}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={selectedMember.image || '/placeholder.svg'}
                  alt={selectedMember.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedMember.name}</h2>
              <p className="text-purple-600 font-semibold mb-4">{selectedMember.role}</p>
              <p className="text-gray-600">{selectedMember.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamCardStack;
