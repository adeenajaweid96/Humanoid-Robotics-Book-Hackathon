import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  Brain,
  Cpu,
  Gamepad2,
  Eye,
  Robot,
  BrainCircuit,
  Trophy,
  Wrench
} from 'lucide-react';

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name for mapping to Lucide icons
  path: string;
  delay?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  id,
  title,
  description,
  icon,
  path,
  delay = 0
}) => {
  // Map icon names to Lucide React components
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 40, className: 'module-card-icon' };

    switch (iconName.toLowerCase()) {
      case 'foundations of physical ai':
        return <Brain {...iconProps} />;
      case 'ros 2 - the robotic nervous system':
        return <Cpu {...iconProps} />;
      case 'simulation & digital twins':
        return <Gamepad2 {...iconProps} />;
      case 'nvidia isaac platform':
        return <Eye {...iconProps} />;
      case 'humanoid robotics development':
        return <Cpu {...iconProps} />; // Using Cpu icon as Robot is not available
      case 'vision-language-action systems':
        return <BrainCircuit {...iconProps} />;
      case 'capstone: autonomous humanoid':
        return <Trophy {...iconProps} />;
      case 'hardware & development infrastructure':
        return <Wrench {...iconProps} />;
      default:
        return <Brain {...iconProps} />; // Default icon
    }
  };

  return (
    <div
      className="col col--3 margin-bottom--lg fade-in-card"
      style={{ height: '100%', opacity: 0 }}
      role="listitem"
    >
      <Link
        to={path}
        className="card card--full-height module-card-link"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <div className="card__header text--center padding-horiz--md">
          <div className="margin-bottom--sm">
            <div
              className="text--center module-card-icon"
              style={{
                fontSize: '2.5rem',
                display: 'block',
                margin: '0 auto 1rem'
              }}
            >
              {getIconComponent(title)}
            </div>
            <Heading as="h3" className="text--center module-card-title">
              {title}
            </Heading>
          </div>
        </div>
        <div className="card__body text--center">
          <p className="module-card-description">
            {description}
          </p>
        </div>
        <div className="card__footer text--center">
          <span
            className="button button--outline button--block module-card-button"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', // Blue gradient
              color: 'white',
              border: 'none',
              fontWeight: 'bold',
              padding: '0.5rem 1rem'
            }}
          >
            Explore Module
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ModuleCard;