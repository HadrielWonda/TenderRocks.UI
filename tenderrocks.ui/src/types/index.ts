export interface Service {
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  name: string
  title: string
  expertise: string
  image?: string
}

export interface LabService {
  category: string
  services: string[]
}

export interface Partnership {
  name: string
  type: 'academic' | 'government' | 'private' | 'health'
  description: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
}