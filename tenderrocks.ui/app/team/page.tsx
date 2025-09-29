import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, GraduationCap, Award } from 'lucide-react'

const team = {
  leader: {
    name: 'Dr. Adetokunbo Soyeye',
    role: 'Lead Researcher & Director',
    image: '/images/dr-soyeye.jpg',
    bio: 'Dr. Soyeye is a renowned expert in cell biology with over 15 years of research experience. She holds a PhD in Molecular Cell Biology and has published numerous papers in prestigious scientific journals.',
    email: 'a.soyeye@tenderrocks.com',
    phone: '+1 (555) 123-4567',
    education: 'PhD in Molecular Cell Biology, University of Cambridge',
    expertise: ['Cell Signaling Pathways', 'Environmental Toxicology', 'Molecular Biology'],
  },
  members: [
    {
      name: 'Team Member 1',
      role: 'Senior Research Scientist',
      image: '/images/member1.jpg',
      bio: 'Details to be added...',
      expertise: ['Cell Biology', 'Research Methodology'],
    },
    {
      name: 'Team Member 2',
      role: 'Environmental Analyst',
      image: '/images/member2.jpg',
      bio: 'Details to be added...',
      expertise: ['Environmental Science', 'Data Analysis'],
    },
    {
      name: 'Team Member 3',
      role: 'Laboratory Manager',
      image: '/images/member3.jpg',
      bio: 'Details to be added...',
      expertise: ['Laboratory Management', 'Quality Control'],
    },
    {
      name: 'Team Member 4',
      role: 'Research Associate',
      image: '/images/member4.jpg',
      bio: 'Details to be added...',
      expertise: ['Cell Culture', 'Experimental Design'],
    },
    {
      name: 'Team Member 5',
      role: 'Data Scientist',
      image: '/images/member5.jpg',
      bio: 'Details to be added...',
      expertise: ['Bioinformatics', 'Statistical Analysis'],
    },
  ],
}

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Our Team
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Meet the dedicated researchers and scientists driving innovation at Tenderrocks.
              </p>
            </div>

            {/* Team Leader */}
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div>
                  <div className="aspect-square w-full rounded-2xl bg-gray-100 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <span>Dr. Soyeye Photo</span>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-primary-dark dark:text-primary-light" />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      {team.leader.name}
                    </h2>
                  </div>
                  <p className="mt-4 text-xl font-semibold text-primary-dark dark:text-primary-light">
                    {team.leader.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {team.leader.bio}
                  </p>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">{team.leader.education}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.leader.expertise.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-md bg-primary-light dark:bg-primary-dark/20 px-2 py-1 text-xs font-medium text-primary-dark dark:text-primary-light ring-1 ring-inset ring-primary-dark/10 dark:ring-primary-light/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        <a href={`mailto:${team.leader.email}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light">
                          {team.leader.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        <a href={`tel:${team.leader.phone}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light">
                          {team.leader.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="mx-auto mt-24 max-w-2xl lg:max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-4xl mb-16">
                Research Team
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.members.map((member, index) => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="aspect-square w-48 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden mb-6">
                      <div className="h-full w-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
                        <span>Photo {index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary-dark dark:text-primary-light font-medium mt-2">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}