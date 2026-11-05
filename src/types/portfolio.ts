export type ProjectCategory =
  | 'research'
  | 'hackathon'
  | 'web-project'
  | 'coursework'

export interface PublicProject {
  id: string
  name: string
  category: ProjectCategory
  description: string | null
  technologies: string[]
  contributions: string[]
  repositoryUrl: string | null
  liveUrl: string | null
  youtubeUrl?: string | null
}

export interface InternalProjectRecord {
  project: PublicProject
  notes: string[]
  verificationNotes: string[]
}

export interface Skill {
  id: string
  name: string
  description: string
  relatedProjectIds: string[]
}

export interface FieldNote {
  id: string
  title: string
  body: string
  date: string
  relatedProjectIds: string[]
}
