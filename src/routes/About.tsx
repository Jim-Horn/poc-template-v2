import PageTransition from '../components/PageTransition';

const About = () => (
  <PageTransition>
    <section style={{ textAlign: 'center' }}>
      <h1>About This POC</h1>
      <p>
        This is a demo using React, Vite, TypeScript, Styled Components, and animated page
        transitions via Framer Motion.
      </p>
    </section>
  </PageTransition>
);

export default About;
