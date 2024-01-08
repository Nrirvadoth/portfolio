import Header from '../../components/Header';
import MyTimeline from '../../components/Timeline';
import SkillList from '../../components/Skilllist';
import Projects from '../../components/Project-slider';
import ContactForm from '../../components/Contact';

function Home() {
  return (
    <div className="container">
      <Header />
      <main className="content fade">
        <section id="about">
          <h2>Parcours</h2>
          <p>
            Autodidacte et autonome, je travaille depuis plus de 10 ans dans le
            domaine digital. J’ai dû m’adapter face aux différents métiers,
            besoins et attentes des clients ainsi qu'à la variété des tâches qui
            m’étaient confiées.
          </p>
          <MyTimeline />
        </section>
        <section id="skills">
          <h2>Compétences</h2>
          <SkillList />
        </section>
        <section id="projects">
          <h2>Projets</h2>
          <Projects />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Home;
