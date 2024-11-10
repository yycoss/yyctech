import AboutCardType1 from '@/components/AboutCard/AboutCardType1'
import AboutCardType2 from '@/components/AboutCard/AboutCardType2'

const About = () => {
  return (
    <section className="flex justify-center py-48">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-14">
        <AboutCardType1
          title="Who are we?"
          text="We are a community-driven platform dedicated to connecting tech
              enthusiasts, professionals, and newcomers in Calgary. Our goal is
              to showcase the tech scene in the city, bringing together people
              passionate about technology, innovation, and collaboration."
          image="/assets/images/aboutUs1.jpeg"
          cardId="card-1"
        />
        <AboutCardType2
          title="What we do?"
          text="We curate and highlight the best tech events happening in Calgary,
              from meetups and workshops to conferences and hackathons. By
              providing a one-stop platform, we make it easy for Calgarians to
              stay informed, connect with others, and be part of the city’s
              growing tech ecosystem."
          image="/assets/images/about-4.jpg"
          cardId="card-2"
        />
        <AboutCardType1
          title=" How we do it?"
          text="We work closely with local event organizers, tech communities, and
              industry leaders to ensure that every event is up-to-date and
              accessible. Our platform offers communities and event listings and
              schedules to help you plan and get the most out of Calgary’s tech
              events."
          image="/assets/images/aboutUs.jpeg"
          cardId="card-3"
        />
        <AboutCardType2
          title="Why we do it?"
          text="We believe that a strong tech community is essential for Calgary’s
              growth and innovation. By connecting people and creating
              opportunities for learning and networking, we’re building a
              tech-friendly city that fosters talent, collaboration, and
              forward-thinking solutions."
          image="/assets/images/card4.jpg"
          cardId="card-4"
        />
      </div>
    </section>
  )
}

export default About
