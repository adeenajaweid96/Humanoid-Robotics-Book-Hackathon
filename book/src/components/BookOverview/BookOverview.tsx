import React from 'react';
import clsx from 'clsx';
import styles from './BookOverview.module.css';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  Brain,
  Cpu,
  Zap,
  Globe,
  Code,
  Settings,
  Play,
  Layers,
  Gamepad2,
  Eye
} from 'lucide-react';

type BookFeature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: BookFeature[] = [
  {
    id: 1,
    title: 'Foundations of Physical AI',
    description: 'Sensors, actuators, control systems, and embodiment fundamentals.',
    icon: <Brain className={styles.featureIcon} size={24} />,
  },
  {
    id: 2,
    title: 'Humanoid Robotics Architecture',
    description: 'Hardware stacks, perception pipelines, and motion systems.',
    icon: <Cpu className={styles.featureIcon} size={24} />,
  },
  {
    id: 3,
    title: 'Learning & Control',
    description: 'Reinforcement learning, imitation learning, and hybrid control.',
    icon: <Zap className={styles.featureIcon} size={24} />,
  },
  {
    id: 4,
    title: 'Simulation → Reality',
    description: 'Sim2Real transfer, physics engines, and benchmarking.',
    icon: <Globe className={styles.featureIcon} size={24} />,
  },
  {
    id: 5,
    title: 'Embodied Intelligence',
    description: 'How intelligence emerges from interaction with the physical world.',
    icon: <Brain className={styles.featureIcon} size={24} />,
  },
  {
    id: 6,
    title: 'Modern Tooling & Stacks',
    description: 'ROS, simulators, datasets, and real-world deployment workflows.',
    icon: <Code className={styles.featureIcon} size={24} />,
  },
  {
    id: 7,
    title: 'Motion Planning',
    description: 'Path planning algorithms, collision detection, and navigation systems.',
    icon: <Play className={styles.featureIcon} size={24} />,
  },
  {
    id: 8,
    title: 'System Integration',
    description: 'Hardware-software integration, real-time systems, and debugging techniques.',
    icon: <Settings className={styles.featureIcon} size={24} />,
  },
];

export default function BookOverview(): JSX.Element {
  return (
    <section className={styles.bookOverviewSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>BOOK OVERVIEW</span>
          <h2 className={styles.title}>What This Book Contains</h2>
          <p className={styles.subtitle}>
            A structured, AI-native guide to Physical AI, humanoid robotics, and embodied intelligence.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.cardIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col col--12 text--center padding-vert--lg">
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Start Learning Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}