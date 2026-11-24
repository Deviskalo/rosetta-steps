import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Gallery | Life at Rosetta Steps Education Center, Liberia",
  description: "Browse photographs of classroom activities, sports, graduation, reading programmes, community outreach and school events at Rosetta Steps Education Center in Caldwell, Liberia.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/gallery` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Gallery | Life at Rosetta Steps Education Center, Liberia",
    description: "Browse photographs of classroom activities, sports, graduation, reading programmes, community outreach and school events at Rosetta Steps Education Center in Caldwell, Liberia.",
    url: `${BASE_PATH}/gallery`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Life at Rosetta Steps Education Center, Liberia",
    description: "Browse photographs of classroom activities, sports, graduation, reading programmes, community outreach and school events at Rosetta Steps Education Center in Caldwell, Liberia.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Gallery"}
        title={<>Moments from our <span className="text-accent">school family</span></>}
        crumbs={[
          { label: "Gallery" },
        ]}
      >
        <p>Real classrooms, real Saturdays, real children — a look at life at Rosetta Steps Education Center in Caldwell.</p>
      </PageHero>
        <section className="section section--white" data-filter-scope>
          <div className="container">
            <div className="filter-bar" data-reveal>
              <button className="chip" type="button" data-filter="all" aria-pressed="true">All moments</button><button className="chip" type="button" data-filter="classroom" aria-pressed="false">Classroom Activities</button><button className="chip" type="button" data-filter="sports" aria-pressed="false">Sports</button><button className="chip" type="button" data-filter="graduation" aria-pressed="false">Graduation</button><button className="chip" type="button" data-filter="reading" aria-pressed="false">Reading Programs</button><button className="chip" type="button" data-filter="community" aria-pressed="false">Community Outreach</button><button className="chip" type="button" data-filter="events" aria-pressed="false">School Events</button>
            </div>
            <div className="masonry">
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Our whole school family, hands up" aria-label="Open larger image: Our whole school family, hands up">
                <span className="gallery-visual"><img src={asset("assets/img/banner-about.jpg")} alt="Our whole school family, hands up" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Our whole school family, hands up</span>
              </button>
              <button className="gallery-item" type="button" data-category="reading" data-caption="A young reader in our reading room" aria-label="Open larger image: A young reader in our reading room">
                <span className="gallery-visual"><img src={asset("assets/img/hero.jpg")} alt="A young reader in our reading room" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">A young reader in our reading room</span>
              </button>
              <button className="gallery-item" type="button" data-category="reading" data-caption="One-to-one reading coaching" aria-label="Open larger image: One-to-one reading coaching">
                <span className="gallery-visual"><img src={asset("assets/img/reading.jpg")} alt="One-to-one reading coaching" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">One-to-one reading coaching</span>
              </button>
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Ready for the lesson" aria-label="Open larger image: Ready for the lesson">
                <span className="gallery-visual"><img src={asset("assets/img/about-students.jpg")} alt="Ready for the lesson" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Ready for the lesson</span>
              </button>
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Answering a question in class" aria-label="Open larger image: Answering a question in class">
                <span className="gallery-visual"><img src={asset("assets/img/welcome.jpg")} alt="Answering a question in class" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Answering a question in class</span>
              </button>
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Grade school learners at work" aria-label="Open larger image: Grade school learners at work">
                <span className="gallery-visual"><img src={asset("assets/img/grade-school.jpg")} alt="Grade school learners at work" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Grade school learners at work</span>
              </button>
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Inside our preschool room" aria-label="Open larger image: Inside our preschool room">
                <span className="gallery-visual"><img src={asset("assets/img/preschool.jpg")} alt="Inside our preschool room" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Inside our preschool room</span>
              </button>
              <button className="gallery-item" type="button" data-category="classroom" data-caption="Kindergarten letters and sounds" aria-label="Open larger image: Kindergarten letters and sounds">
                <span className="gallery-visual"><img src={asset("assets/img/kindergarten.jpg")} alt="Kindergarten letters and sounds" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Kindergarten letters and sounds</span>
              </button>
              <button className="gallery-item" type="button" data-category="community" data-caption="Adult learners at Learn to Earn" aria-label="Open larger image: Adult learners at Learn to Earn">
                <span className="gallery-visual"><img src={asset("assets/img/adult.jpg")} alt="Adult learners at Learn to Earn" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Adult learners at Learn to Earn</span>
              </button>
              <button className="gallery-item" type="button" data-category="community" data-caption="Learn to Earn: skills for earning" aria-label="Open larger image: Learn to Earn: skills for earning">
                <span className="gallery-visual"><img src={asset("assets/img/banner-programs.jpg")} alt="Learn to Earn: skills for earning" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Learn to Earn: skills for earning</span>
              </button>
              <button className="gallery-item" type="button" data-category="events" data-caption="Saturday play club high-fives" aria-label="Open larger image: Saturday play club high-fives">
                <span className="gallery-visual"><img src={asset("assets/img/play.jpg")} alt="Saturday play club high-fives" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Saturday play club high-fives</span>
              </button>
              <button className="gallery-item" type="button" data-category="events" data-caption="Ama Harris, our founder" aria-label="Open larger image: Ama Harris, our founder">
                <span className="gallery-visual"><img src={asset("assets/img/founder.jpg")} alt="Ama Harris, our founder" loading="lazy" decoding="async" /></span>
                <span className="gallery-caption">Ama Harris, our founder</span>
              </button>
              <button className="gallery-item" type="button" data-category="sports" data-caption="Sports and games on the school field" aria-label="Open larger image: Sports and games on the school field">
                <span className="gallery-visual gallery-art media-art media-art--pink" role="img" aria-label="Sports and games on the school field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21v-7" /><path d="M12 14c0-4 3-7 7.2-7 0 4-3 7-7.2 7Z" /><path d="M12 16.5c0-3.1-2.5-5.6-5.7-5.6 0 3.1 2.5 5.6 5.7 5.6Z" /></svg></span>
                <span className="gallery-caption">Sports and games on the school field</span>
              </button>
              <button className="gallery-item" type="button" data-category="graduation" data-caption="Graduation and scholarship day" aria-label="Open larger image: Graduation and scholarship day">
                <span className="gallery-visual gallery-art media-art media-art--pink" role="img" aria-label="Graduation and scholarship day"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 9.4 12 4 2 9.4l10 5.4 10-5.4Z" /><path d="M6 11.7V17c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-5.3" /><path d="M22 9.4v5" /></svg></span>
                <span className="gallery-caption">Graduation and scholarship day</span>
              </button>
            </div>
            <p className="note" style={{marginTop: 28, textAlign: 'center'}}>Photographs are shared with the permission of our families. Select any image to view it larger.</p>
          </div>
        </section>
      <CtaStrip
        title={"Want to see it in person?"}
        lede={"Our gates are open on weekday mornings. Come for a tour, stay for a reading lesson."}
        actions={[
          { href: "/admissions", label: "Book a school visit", variant: "light", arrow: true },
          { href: "/contact", label: "Contact the office", variant: "outline-light" },
        ]}
      />
    </>
  );
}
