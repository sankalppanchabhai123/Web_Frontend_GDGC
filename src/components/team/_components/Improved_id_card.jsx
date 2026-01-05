"use client"
import { ImageWithFallback } from "./Image_Process"
const ImprovedIdCard = ({ member }) => {
  // Handle names with more than two parts
  const nameParts = member.name.split(" ")
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(" ")

  return (
    <div
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      id="TeamPage"
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full bg-gray-50 relative">
        {/* Left content */}
        <div className="flex-1 p-4 md:p-6 relative flex flex-col justify-center">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center md:items-start">
            {/* Logo image */}
            <div className="mb-4 relative flex justify-center md:justify-start w-full">
              {/* Top yellow part */}
              <div
                className="absolute w-[100px] h-[27px] bg-[#F4B400F0] rounded-full mx-auto hidden md:block"
                style={{
                  marginTop: "17px",
                  marginLeft: "130px",
                  transform: "scale(1.2)",
                  transformOrigin: "center bottom",
                }}
              />

              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg flex items-center justify-center">
                <img src="/GDGC_Icon.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="mb-4 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">{firstName.toUpperCase()}</h2>
              {lastName && (
                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  {lastName.toUpperCase()}
                </h2>
              )}
            </div>

            <div className="space-y-2 text-center md:text-left">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{member.role}</h3>
                <div className="absolute top-0 left-0 w-full z-[2] hidden md:block" style={{ left: "-150px" }}>
                  {/* Green part at the bottom */}
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

        {/* Right side image */}
        <div className="w-full md:w-1/2 relative mt-4 md:mt-0">
          {/* Red Shape */}
          <div
            className="absolute w-[120px] h-[35px] bg-[#EA4335] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "10px",
              marginLeft: "170px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Blue Shape */}
          <div
            className="absolute w-[180px] h-[35px] bg-[#4286F5] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "101px",
              marginLeft: "80px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Image container with fixed aspect ratio */}
          <div className="aspect-[3/4] w-full relative">
            <ImageWithFallback
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fallbackSrc="/SundarBOI.png"
              className="absolute inset-0 w-full h-full object-cover object-center z-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImprovedIdCard