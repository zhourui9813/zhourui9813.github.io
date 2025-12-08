export interface Link {
  label: string;
  url: string;
  type: 'email' | 'github' | 'scholar' | 'link';
}

export interface Author {
  name: string;
  url?: string;
  isMe?: boolean;
}

export interface Project {
  title: string;
  authors: Author[];
  venue: string;
  paperUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  imageUrl?: string; // Optional preview image
  abstract?: string; // Optional abstract
}

export interface ExperienceItem {
  date: string;
  title: string;
  institution: string;
  description?: string;
  type: 'education' | 'internship' | 'work';
}

export interface Award {
  date: string;
  title: string;
}

export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  affiliationUrl: string;
  school: string;
  schoolUrl: string;
  bio: string;
  interests: string[];
  links: Link[];
}