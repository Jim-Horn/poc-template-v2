import PageTransition from '../components/PageTransition';
import CenterBlock from '../components/CenterBlock';

const About = () => (
  <PageTransition>
    <CenterBlock>
      <section>
        <h1>About This POC</h1>
        <p>
          This is a demo using React, Vite, TypeScript, Styled Components, and animated page
          transitions via Framer Motion.
        </p>
      </section>
    </CenterBlock>
  </PageTransition>
);

export default About;
