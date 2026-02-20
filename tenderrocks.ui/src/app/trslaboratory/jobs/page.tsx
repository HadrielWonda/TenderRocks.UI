'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SITE } from '@/lib/constants'
import { Briefcase, MapPin, Calendar, Phone, Mail, ExternalLink, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

const job = {
  title: "Customer Facing Role",
  location: "Ikorodu, Lagos",
  type: "Full-time",
  description: "We are looking for a dynamic and qualified individual to join our team in a customer-facing capacity, supporting our molecular diagnostic services.",
  requirements: [
    "Residing in Ikorodu (mandatory)",
    "Age below 25 years (mandatory)",
    "NYSC serving corp member OR have served NYSC (mandatory)",
    "Medical Laboratory Scientist, or any other Medical or Biological Science discipline",
  ],
  responsibilities: [
    "Interact with patients and healthcare providers to explain diagnostic services",
    "Collect samples and ensure proper handling",
    "Provide customer support and follow-up on test results",
    "Assist in laboratory operations as needed",
  ],
  applyLink: "https://forms.gle/YdoDC2Tiq8xSBdkB9",
  contactPhone: "08133686115",
}

export default function JobsPage() {
  const handleDownloadQR = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement
    if (canvas) {
      const url = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = url
      link.download = 'TRS-Lab-Apply-QR.png'
      link.click()
    }
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-lab-primary/20 to-lab-accent/20">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-lab">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Be part of a pioneering molecular diagnostic laboratory in Ikorodu.
          </p>
        </div>
      </section>

      {/* Job Details */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Job Card */}
            <div className="md:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4 text-sm">
                        <span className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-lab-primary" /> {job.location}</span>
                        <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1 text-lab-primary" /> {job.type}</span>
                      </div>
                    </div>
                    <span className="bg-lab-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About the Role</h3>
                    <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mandatory Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Key Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-lab-primary hover:bg-lab-accent flex items-center justify-center"
                    >
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${job.contactPhone}`}
                      className="btn-secondary flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {job.contactPhone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* QR Code & Contact Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Apply with QR</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <QRCodeSVG
                      id="qr-code"
                      value={job.applyLink}
                      size={180}
                      bgColor="#ffffff"
                      fgColor="#06b6d4"
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Scan with your phone to open the application form.
                  </p>
                  <button
                    onClick={handleDownloadQR}
                    className="text-sm text-lab-primary hover:text-lab-accent flex items-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download QR Code
                  </button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-lab-primary mr-2" />
                    <a href={`tel:${job.contactPhone}`} className="text-gray-700 dark:text-gray-300 hover:text-lab-primary">
                      {job.contactPhone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-lab-primary mr-2" />
                    <a href={`mailto:${SITE.email}`} className="text-gray-700 dark:text-gray-300 hover:text-lab-primary">
                      {SITE.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-lab-primary mr-2 mt-1" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {SITE.address}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-4">About TRS Molecular Diagnostic Laboratory</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are an advanced molecular and reproductive diagnostics facility committed to quality, innovation, and capacity development. Join us in making a difference in healthcare.
          </p>
        </div>
      </section>
    </div>
  )
}