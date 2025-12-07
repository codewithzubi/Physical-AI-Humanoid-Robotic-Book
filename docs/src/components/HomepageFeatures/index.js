import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Physical AI Foundations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Delve into the core principles of Embodied Intelligence. Understand how AI transcends virtual limits,
        interacts with the physical world, and lays the groundwork for truly autonomous humanoid robots.
        Explore concepts from beginner to advanced levels.
      </>
    ),
  },
  {
    title: 'ROS 2 & VLA Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master the Robot Operating System 2 (ROS 2) for robust control and perception. Discover how
        Vision-Language Models (VLA) and Large Language Models (LLMs) empower robots with advanced
        reasoning and natural language interaction, driving the next generation of humanoid capabilities.
      </>
    ),
  },
  {
    title: 'Isaac Sim & Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Utilize NVIDIA Isaac Sim for high-fidelity simulation and rapid prototyping of humanoid robots.
        Learn to design, test, and deploy complex AI behaviors in virtual environments before seamless
        integration into physical hardware. Accelerate your journey from concept to deployment.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
