export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  email?: string
  phone?: string
  education?: string
  expertise: string[]
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  content?: string
}