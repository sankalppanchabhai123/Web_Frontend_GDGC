"use client"

import React, { useEffect, useState } from "react"

export const ImageWithFallback = ({ src, alt, fallbackSrc, className }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [aspectRatio, setAspectRatio] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setIsLoaded(false)
  }, [src])

  const onError = () => {
    setImgSrc(fallbackSrc)
  }

  const onLoad = (e) => {
    const img = e.currentTarget
    setAspectRatio(img.naturalWidth / img.naturalHeight)
    setIsLoaded(true)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
        </div>
      )}
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onError={onError}
        onLoad={onLoad}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      />
    </div>
  )
}