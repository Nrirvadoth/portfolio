import Header from '../../components/Header';
import MyTimeline from '../../components/Timeline';
import SkillList from '../../components/Skilllist';
import Projects from '../../components/Project-slider';

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            faucibus metus eros, at eleifend felis vulputate sit amet. Etiam sed
            quam urna. Sed venenatis, risus quis rhoncus lacinia, turpis elit
            condimentum est, sit amet cursus est nulla a lectus. Praesent
            aliquet tincidunt erat, at tempor lectus tempus a. Etiam scelerisque
            eros a ex suscipit laoreet. Sed et sollicitudin velit, quis
            dignissim nunc. Sed sed aliquam urna. Etiam vel ultrices felis. Ut
            egestas ipsum sit amet interdum sagittis. Nullam mattis aliquet
            urna, quis ultricies felis sodales non. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
            feugiat ut nunc at sollicitudin. Ut felis ex, scelerisque non
            porttitor at, dapibus eu elit. Mauris ornare eget nibh nec
            dignissim. Praesent sed auctor nisi. Quisque eget tempus sapien.
            Nulla suscipit vitae metus quis laoreet. Donec facilisis, metus vel
            posuere mollis, sapien mauris consectetur urna, non hendrerit ante
            purus a massa. Donec posuere sem quis fringilla cursus. Mauris leo
            quam, euismod blandit tincidunt quis, tempor ullamcorper elit.
            Aenean ligula justo, dictum ut hendrerit at, dapibus vel nisi.
            Maecenas hendrerit tortor sit amet gravida bibendum. Nunc posuere
            neque orci, id dapibus ligula pellentesque ac. Donec fermentum
            aliquet lorem a placerat. Suspendisse ullamcorper nunc lacus, nec
            congue urna finibus in. Aliquam nec placerat ligula. Curabitur vitae
            libero ut diam pulvinar pharetra eget ac nisi. Suspendisse velit
            justo, auctor at malesuada eget, varius non tellus. Donec vel lectus
            vitae risus pharetra cursus facilisis sit amet ex. Nullam tincidunt
            diam non augue congue vestibulum. Mauris et ante hendrerit,
            ullamcorper elit eget, tincidunt nulla. Aenean iaculis eget ipsum
            vel laoreet. Suspendisse ac euismod quam. Ut ultrices, purus et
            consequat ornare, elit turpis lacinia urna, sed pellentesque ligula
            eros sit amet odio. In interdum ex erat, at pharetra metus congue
            non. Praesent id metus pellentesque, convallis nulla in, feugiat
            enim. Nunc ornare dui eu lorem efficitur iaculis. Vivamus a libero
            in dui vehicula convallis vel ac ipsum. Mauris viverra nisl ipsum,
            in fermentum quam commodo vitae. Morbi interdum dolor in augue
            lobortis dignissim. Etiam tempor est sed ipsum placerat auctor.
            Quisque at vestibulum augue, in sagittis leo. Sed in massa lobortis,
            pharetra dui non, rutrum sem. Praesent varius, sem ac ornare
            laoreet, justo nisl lacinia enim, sit amet porttitor enim eros sit
            amet metus. Ut vitae posuere libero. Aliquam in ligula vitae libero
            ultrices blandit. Curabitur sed nibh sed nisl tempor volutpat nec in
            ex. Maecenas gravida orci condimentum malesuada iaculis. In interdum
            mauris nibh, eget tempor turpis auctor auctor. Nunc mollis hendrerit
            porta. Pellentesque sed nunc eget ante mollis vulputate. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum
            nulla venenatis, rhoncus mi vitae, mollis justo. Maecenas imperdiet,
            metus nec mollis viverra, nulla turpis scelerisque ex, sed pharetra
            arcu elit ut erat. Pellentesque ullamcorper maximus lorem quis
            sagittis. Cras in mi et neque tincidunt mattis. Proin commodo urna
            ac ex mattis viverra. Aliquam vel finibus eros, in sodales nisl.
            Cras vitae pharetra ex. Suspendisse eget malesuada erat. Proin
            tempus nulla id mauris ornare consequat. Curabitur feugiat velit
            risus, nec ullamcorper elit eleifend et. Proin at orci dolor.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
