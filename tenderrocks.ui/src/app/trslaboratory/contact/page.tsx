'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function LabContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', institution: '', message: '' })
    }, 1500)
  }

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-4xl font-bold mb-6 gradient-text-lab text-center">Contact TRS Molecular Diagnostic Laboratory</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          For inquiries about diagnostic services, partnerships, or training opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Laboratory Contact</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-lab-primary mt-0.5 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href={`mailto:${SITE.email}`} className="text-gray-600 dark:text-gray-400 hover:text-lab-primary">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-lab-primary mt-0.5 mr-3" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href={`tel:${SITE.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-lab-primary">
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-lab-primary mt-0.5 mr-3" />
                  <div>
                    <div className="font-medium">Address</div>
                    <p className="text-gray-600 dark:text-gray-400">{SITE.address}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Quality Assurance</h2>
              <p className="text-gray-600 dark:text-gray-400">
                HEFMA registration underway. All tests follow validated protocols and standard operating procedures.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Request Information</h2>
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Thank you! We'll respond shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lab-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lab-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lab-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lab-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full bg-lab-primary hover:bg-lab-accent"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}