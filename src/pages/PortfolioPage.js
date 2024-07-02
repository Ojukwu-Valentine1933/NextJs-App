// pages/index.js

import ProjectCard from '../components/pageComponent';
import portfolioimages from '@/images/portfolioImage';


const HomePage = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <div className="project-list">
      {portfolioimages.map(project => (
        <ProjectCard key={project.id} title={project.title} imageUrl={project.imageUrl} />
      ))}
    </div>
  </div>
);

export default HomePage;
