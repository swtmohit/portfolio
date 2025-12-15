import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5500";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
    },
  ];

  const projectRoutes =
    projects?.map((project) => ({
      url: `${BASE_URL}/projects/${project.id}`,
      lastModified: now,
    })) || [];

  return [...staticRoutes, ...projectRoutes];
}