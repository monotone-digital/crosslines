export type Project = {
  slug: string;
  city: string;
  product: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  year: number;
  summary: string;
  image: string;
  published: boolean;
};

// Replace these entries with approved project details and real Crosslines photography.
// Unpublished entries render as honest placeholders and never claim generated work as completed work.
export const projects: Project[] = Array.from({ length: 9 }, (_, index) => ({
  slug: `project-${String(index + 1).padStart(2, '0')}`,
  city: '',
  product: '',
  tier: 'Tier 2',
  year: new Date().getFullYear(),
  summary: '',
  image: '',
  published: false,
}));
