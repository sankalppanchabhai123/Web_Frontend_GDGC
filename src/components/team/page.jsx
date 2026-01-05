"use client";

import React from 'react';
import { Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const teamMembersLead = [
  {
    id: "GDSC-AJ20231",
    name: "Prajwal Sanap",
    role: "GDSC LEAD",
    image: "/Lead/Prajwal.png",
    badgeColor: "bg-yellow-400"
  },
  {
    id: "GDSC-SL20232",
    name: "Sarvesh Varadkar",
    role: "AI/ML Lead",
    image: "/Lead/Sarvesh.png",
    badgeColor: "bg-blue-400"
  },
  {
    id: "GDSC-JS20233",
    name: "Digvijay Mangaokar",
    role: "Web Lead",
    image: "/Lead/Digvijay.png",
    badgeColor: "bg-green-400"
  },
  {
    id: "GDSC-TB20234",
    name: "Aniket Bhor",
    role: "ML LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-purple-400"
  },
  {
    id: "GDSC-JP20235",
    name: "Piyush Patil",
    role: "CP/DSA Lead",
    image: "/Lead/Piyush.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20236",
    name: "Rahul Wagh",
    role: "Cybersecurity Lead",
    image: "/Lead/Rahul.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20237",
    name: "Tejas Ellansandry",
    role: "Android Lead",
    image: "/Lead/Tejas.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20238",
    name: "Shantanu Pokale",
    role: "Documentation/Management Lead",
    image: "/Lead/Shantanu.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20239",
    name: "Sachita Hangloo",
    role: "Documentation/Management Lead",
    image: "/Lead/Sachita.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023510",
    name: "Charvi Humane",
    role: "Documentation/Management Lead",
    image: "Lead/",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023511",
    name: "Samiksha Borude",
    role: "Documentation/Management Lead",
    image: "/Lead/Samiksha.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023512",
    name: "Atharva Wani",
    role: "Design Lead",
    image: "/Lead/Atharva.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023513",
    name: "Sanika Kalaskar",
    role: "Design Lead",
    image: "/Lead/Sanika.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023514",
    name: "Shrirang Vaidya",
    role: "Media Lead",
    image: "/Lead/Shrirang.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023515",
    name: "Tanya Singh",
    role: "PR Lead",
    image: "/Lead/Tanya.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023516",
    name: "Arya Marawar",
    role: "PR Lead",
    image: "/Lead/Arya.png",
    badgeColor: "bg-red-400"
  },
];


const teamMembersCoordinators = [
  {
    id: "GDSC-JS20231",
    name: "Tanmay Joshi",
    role: "Web Coordinator",
    image: "/Coordinators.png",
    badgeColor: "bg-green-400"
  },
  {
    id: "GDSC-TB20232",
    name: "Om Salunke",
    role: "Web Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-purple-400"
  },
  {
    id: "GDSC-JP20233",
    name: "Shipra Bhanja",
    role: "AIML Coordinator",
    image: "Coordinators/Shipra.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20234",
    name: "Ghanesh Dhadke",
    role: "Cloud Coordinator",
    image: "/Coordinators/Ganesh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20235",
    name: "Dhanesh Shingade",
    role: "Cloud Coordinator",
    image: "/Coordinators/Dhanesh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20236",
    name: "Varun Nagote",
    role: "CP/DSA Coordinator",
    image: "Coordinators/Varun.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20237",
    name: "Vishwambhar Wazarkar",
    role: "CP/DSA Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20238",
    name: "Dilip Chaudhary",
    role: "CyberSecurity Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20239",
    name: "Abhishek Kumavat",
    role: "CyberSecurity Coordinator",
    image: "/Coordinators/Abhishekh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202310",
    name: "Atharva Jagtap",
    role: "Android Coordinator",
    image: "/Coordinators/Atharva.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202311",
    name: "Kaushal Abjowar",
    role: "Design Coordinator",
    image: "/Coordinators/Kaushal.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202312",
    name: "Maithili Mahesh",
    role: "Design Coordinator",
    image: "/Coordinators/Maithili.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202313",
    name: "Sanjana Gupta",
    role: "Management Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202314",
    name: "Ausin Loyd",
    role: "Management Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202315",
    name: "Manas Mishra",
    role: "PR Coordinator",
    image: "/Coordinators/Manas.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202316",
    name: "Ankita Awatade",
    role: "PR Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202317",
    name: "Janvahi Ghanghav",
    role: "Documentation Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202318",
    name: "Sujal Patil",
    role: "Media Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202319",
    name: "Pranav Gaikwad",
    role: "Media Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  }
];




const IdCard = ({ member }) => {
  return (
    <div 
      style={{ maxWidth: '478.36px', width: '100%', height: 'auto' }} 
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 md:mt-0 mt-4" id='TeamPage'
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full bg-gray-50 relative">
        {/* Left content - reduced top margin on mobile */}
        <div className="flex-1 p-4 md:p-6 relative mt-1 md:mt-0">      
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center md:items-start">
            {/* Logo image */}
            <div className="mb-2 md:mb-4 relative flex justify-center md:justify-start w-full">
              {/* Top yellow part - Hidden on mobile, visible on md and up */}
              <div
                className="absolute w-[100px] h-[27px] bg-[#F4B400F0] rounded-full mx-auto hidden md:block"
                style={{
                  marginTop: "17px",
                  marginLeft: "130px",
                  transform: "scale(1.2)",
                  transformOrigin: "center bottom",
                }}
              />

              <div className="w-10 md:w-14 h-10 md:h-14 rounded-lg flex items-center justify-center">
                <img 
                  src="/GDGC_Icon.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mb-2 md:mb-4 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[0].toUpperCase()}
              </h2>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[1] ? member.name.split(' ')[1].toUpperCase() : ''}
              </h2>
            </div>
            
            <div className="space-y-1 md:space-y-2 text-center md:text-left">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{member.role}</h3>
                {/* Green part - hidden on mobile */}
                <div className="absolute top-0 left-0 w-full z-[2] hidden md:block" style={{ left: "-150px" }}>
                  <div
                    className="w-[250px] h-[35px] bg-[#30A953] rounded-full mx-auto"
                    style={{
                      marginTop: "190px",
                      transform: "scale(1.2)",
                      transformOrigin: "center bottom",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image - reduced top margin and bottom margin on mobile */}
        <div className="w-full md:w-1/2 h-60 md:h-full overflow-hidden relative mt-1 md:mt-0 mb-1 md:mb-0">
          {/* Red Shape - hidden on mobile */}
          <div
            className="absolute w-[120px] h-[35px] bg-[#EA4335] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "10px",
              marginLeft: "170px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Blue Shape - hidden on mobile */}
          <div
            className="absolute w-[180px] h-[35px] bg-[#4286F5] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "101px",
              marginLeft: "80px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Image container with better mobile handling */}
          <div className="relative w-full h-full">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover z-10"
              style={{ objectPosition: 'center 10%' }} // Adjusted to show more of the top part of the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Meet Our Team ⚡
        </h2>

        {/* Leads Section */}
        <div className="flex justify-center mb-6 md:mb-10">
          <div className="w-48 md:w-64 px-6 md:px-10 py-3 md:py-4 bg-white rounded-full shadow-md border border-gray-300 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-black">Leads</h1>
          </div>
        </div>

        {/* Swiper for Leads - Improved for mobile */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={20} // Increased spacing for better mobile view
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30, // Reduced rotation for better image visibility
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, // Single view on small mobile
            480: { slidesPerView: 1.1, spaceBetween: 20 }, // Better spacing for mobile
            640: { slidesPerView: 1.5, spaceBetween: 30 }, // Better spacing for tablets
            1024: { slidesPerView: 2.5, spaceBetween: 40 }, // Better desktop view
          }}
        >
          {teamMembersLead.map((member) => (
            <SwiperSlide key={member.id} className="py-6 px-4"> {/* Increased padding for better spacing */}
              <IdCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Coordinators Section */}
        <div className="flex justify-center mt-12 md:mt-16 mb-6 md:mb-10">
          <div className="w-48 md:w-64 px-6 md:px-10 py-3 md:py-4 bg-white rounded-full shadow-md border border-gray-300 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-black">Coordinators</h1>
          </div>
        </div>

        {/* Swiper for Coordinators - Improved for mobile */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={20} // Increased spacing for better mobile view
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30, // Reduced rotation for better image visibility
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, // Single view on small mobile
            480: { slidesPerView: 1.1, spaceBetween: 20 }, // Better spacing for mobile
            640: { slidesPerView: 1.5, spaceBetween: 30 }, // Better spacing for tablets
            1024: { slidesPerView: 2.5, spaceBetween: 40 }, // Better desktop view
          }}
        >
          {teamMembersCoordinators.map((member) => (
            <SwiperSlide key={member.id} className="py-6 px-4"> {/* Increased padding for better spacing */}
              <IdCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Add custom styles for better mobile experience */}
      <style jsx global>{`
        .swiper-slide {
          display: flex;
          justify-content: center;
          transform-style: preserve-3d;
        }
        
        @media (max-width: 768px) {
          .swiper-pagination {
            position: relative;
            margin-top: 30px;
            bottom: 0 !important;
          }
          
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }
          
          /* Fix for coverflow effect cutting off images */
          .swiper-slide-active {
            z-index: 2;
          }
          
          /* Ensure the container has enough height */
          .mySwiper {
            padding-top: 10px;
            padding-bottom: 50px;
            min-height: 400px; /* Slightly reduced height for mobile */
          }
          
          /* Added margin for container only on mobile */
          #TeamPage {
            margin-top: 12px !important;
          }
          
          /* Additional styles to reduce gap between info and image on mobile */
          #TeamPage .flex-col > div:first-child {
            padding-bottom: 0; /* Reduce bottom padding on info section */
          }
          
          #TeamPage .flex-col > div:last-child {
            padding-top: 0; /* Reduce top padding on image section */
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;