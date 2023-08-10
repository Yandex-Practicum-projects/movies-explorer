import './ProjectLink.css';

const ProjectLink = ({ text, path }) => {
  return (
    <li className='project-link'>
      <a href={path} className='project-link__link' target='_blank' rel='noopener noreferrer'>
        {text}
        <span>↗</span>
      </a>
    </li>
  );
};

export default ProjectLink;