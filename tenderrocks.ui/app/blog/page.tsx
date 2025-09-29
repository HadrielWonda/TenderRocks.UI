import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Advancements in Cellular Research',
    excerpt: 'Exploring the latest breakthroughs in cell biology and their implications for medical science.',
    author: 'Dr. Adetokunbo Soyeye',
    date: 'December 15, 2023',
    category: 'Cell Biology',
  },
  {
    id: 2,
    title: 'Environmental Impact Studies',
    excerpt: 'New methodologies for assessing environmental changes and their effects on cellular organisms.',
    author: 'Research Team',
    date: 'December 10, 2023',
    category: 'Environmental Science',
  },
  {
    id: 3,
    title: 'The Future of Sustainable Research',
    excerpt: 'How modern laboratories are adopting eco-friendly practices without compromising research quality.',
    author: 'Tenderrocks Team',
    date: 'December 5, 2023',
    category: 'Sustainability',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Research Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Stay updated with the latest research findings, insights, and developments from our team.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col items-start">
                  <div className="w-full">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-600 dark:text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-primary-light dark:bg-primary-dark/20 px-3 py-1.5 font-medium text-primary-dark dark:text-primary-light">
                        {post.category}
                      </span>
                    </div>
                    <div className="relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="flex items-center text-sm font-semibold text-primary-dark dark:text-primary-light hover:text-primary-dark/80 dark:hover:text-primary-light/80"
                      >
                        Read more <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mx-auto mt-24 max-w-2xl text-center">
              <div className="bg-blue-50 dark:bg-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  More Content Coming Soon
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Our research team is continuously working on new findings and insights. 
                  Check back regularly for updates on our latest publications and research papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}