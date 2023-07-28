import './ProjectLink.css';

const ProjectLink = ({text, path}) => {
  return (
    <a href={path} className='project-link'>
      {text}
      <span>↗</span>
    </a>
  );
};

export default ProjectLink;