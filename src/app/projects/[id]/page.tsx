import { ProjectType } from '@/types/project';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}