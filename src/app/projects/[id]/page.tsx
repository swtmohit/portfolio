import { ProjectType } from '@/types/project';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}



export function generateStaticParams(): { id: string }[] {
  return projects.map((project) => ({
    id: project.id,
  }));
}
export function generateMetadata({ params }: Props): Metadata {
  const project: ProjectType | undefined = projects.find(
    (p) => p.id === params.id
  );
  return {
    title: project?.title,
    description: project?.description,
    openGraph: {
      images: project?.image
        ? [
            {
              url: project.image as string,
            },
          ]
        : [],
    }
  };
}
export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
