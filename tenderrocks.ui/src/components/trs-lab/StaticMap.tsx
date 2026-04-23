'use client'

interface StaticMapProps {
  address: string
  zoom?: number
  width?: number
  height?: number
}

export default function StaticMap({ 
  address, 
  zoom = 16, 
  width = 600, 
  height = 400 
}: StaticMapProps) {
  // Use the exact Google Maps embed URL from your share link
  // You can get this by clicking "Share" → "Embed a map" on Google Maps
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4567!2d3.4889!3d6.6155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e8c1fb7b1f%3A0x8f1b2b9b3d0b4b7!2sPLOT%2028%20AP%20STREET!5e0!3m2!1sen!2sng!4v1234567890!5m2!1sen!2sng"
  
  // If you have a more accurate embed code, replace the above URL

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-medium">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
        title={`Map showing ${address}`}
      />
      <a
        href="https://maps.app.goo.gl/TtkJp7BNBatUxAgG9"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        View larger map
      </a>
    </div>
  )
}