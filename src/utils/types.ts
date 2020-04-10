import { SetStateAction, Dispatch } from 'react';

export interface Project {
  name: string;
  description: string;
  image?: string;
  url?: string;
  highlights?: string;
  role?: string;
}

export interface ProjectProps {
  isActive: boolean;
  isHidden: boolean | null | '';
  project: Project;
  setActive: Dispatch<SetStateAction<string | null>>;
  fullView: boolean;
}

export interface NavItem {
  display: string;
  icon: string;
  url: string;
}

export interface ToggleProps {
  darkMode: string;
  onChange: Dispatch<SetStateAction<string>>;
  className: string;
}
