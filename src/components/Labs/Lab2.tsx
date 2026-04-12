import React from 'react'

import bgMainImg from '../../assets/grid-pattern-removebg-preview.png'

const Portfolio = () => {
  interface Testimonial {
    quote: string
    name: string
    title: string
    image: string
  }

  const testimonials: Testimonial[] = [
    {
      quote:
        "Collaborating with Maksym was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Maksym's enthusiasm for every facet of development truly stands out.",
      name: 'Michael Johnson',
      title: 'Director of AlphaStream',
      image: `${import.meta.env.BASE_URL}face1.jpg`,
    },
    {
      quote:
        'Maksym transformed our vision into reality. His attention to detail and modern design principles resulted in a stunning interface that our users absolutely love. Highly recommended for any complex frontend challenges.',
      name: 'Sarah Williams',
      title: 'CEO at TechFlow',
      image: `${import.meta.env.BASE_URL}face2.jpg`,
    },
    {
      quote:
        "An outstanding developer who consistently delivers high-quality code. Maksym's ability to seamlessly integrate complex animations while maintaining top-notch performance across all devices is truly impressive.",
      name: 'David Chen',
      title: 'Lead Designer at Creativ',
      image: `${import.meta.env.BASE_URL}face3.jpg`,
    },
    {
      quote:
        'Working with Maksym streamlined our entire frontend process. His proactive communication and deep understanding of React ecosystem helped us launch our product two weeks ahead of schedule.',
      name: 'Emily Rodriguez',
      title: 'Product Manager at Innovate',
      image: `${import.meta.env.BASE_URL}face4.jpg`,
    },
  ]

  return (
    <div className=" min-h-screen bg-[#000319] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgMainImg})` }}
      />

      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#000319]/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 flex gap-6 text-sm font-medium">
        <a href="#about" className="hover:text-purple-400 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">
          Projects
        </a>
        <a
          href="#testimonials"
          className="hover:text-purple-400 transition-colors"
        >
          Testimonials
        </a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">
          Contact
        </a>
      </nav>

      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-5 pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

        <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-5 relative z-10">
          Dynamic Web Magic with React
        </p>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight relative z-10">
          Transforming Concepts into Seamless{' '}
          <span className="text-[#cbacf9]">User Experiences</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl relative z-10">
          Hi! I'm Maksym, a Frontend Developer based in Ukraine.
        </p>

        <button className="mt-10 px-8 py-4 bg-[#000319] border border-white/20 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all relative z-10">
          See my work
        </button>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5">
          <div className="md:col-span-2 md:row-span-2 bg-[#0c0e23] border border-white/10 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden md:min-h-[500px]">
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-transparent bg-no-repeat bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url("${import.meta.env.BASE_URL}ABOUT.jpg")`,
              }}
            ></div>
            <h3 className="text-3xl font-bold z-10 max-w-md">
              I prioritize client collaboration, fostering open communication
            </h3>
          </div>

          <div
            className="bg-[#0c0e23] border border-white/10 rounded-3xl bg-no-repeat bg-contain  bg-bottom p-8 relative overflow-hidden"
            style={{
              backgroundImage: `url("${import.meta.env.BASE_URL}ABOUT1.png")`,
            }}
          >
            <h3 className="text-xl font-bold mb-4">
              I'm very flexible with time zone communications
            </h3>
          </div>

          <div
            className="bg-[#0c0e23] border border-white/10 rounded-3xl p-8 bg-no-repeat bg-contain bg-right "
            style={{
              backgroundImage: `url("${import.meta.env.BASE_URL}ABOUT2.png")`,
            }}
          >
            <p className="text-sm text-gray-400 mb-1">
              I constantly try to improve
            </p>
            <h3 className="text-2xl font-bold mb-4">My tech stack</h3>
          </div>

          <div
            className="md:col-span-2 bg-[#0c0e23] border border-white/10 bg-right bg-no-repeat rounded-3xl p-8 flex items-center"
            style={{
              backgroundImage: `url("${import.meta.env.BASE_URL}ABOUT3.png")`,
            }}
          >
            <div>
              <p className="text-sm text-gray-400 mb-1">THE INSIDE SCOOP</p>
              <h3 className="text-3xl font-bold">
                Currently building a JS Animation library
              </h3>
            </div>
          </div>

          <div className=" flex flex-col  gap-5">
            <div className="bg-gradient-to-br from-[#1a1235] to-[#0c0e23] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center ">
              <h3 className="text-2xl font-bold mb-4">
                Tech enthusiast with a passion for development.
              </h3>
            </div>
            <div className="bg-gradient-to-br from-[#1a1235] to-[#0c0e23] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                Do you want to start a project together?
              </h3>
              <button className="px-6 py-3 bg-white/10 rounded-lg flex items-center gap-2 hover:bg-white/20 transition">
                Copy my email address
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          A small selection of{' '}
          <span className="text-[#cbacf9]">recent projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              img: `${import.meta.env.BASE_URL}Card.jpg`,
              title: '3D Solar System Planets to Explore',
              p: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
            },
            {
              img: `${import.meta.env.BASE_URL}Card1.jpg`,
              title: 'Yoom - Video Conferencing App',
              p: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
            },
            {
              img: `${import.meta.env.BASE_URL}Card2.jpg`,
              title: 'AI Image SaaS - Canva Application',
              p: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
            },
            {
              img: `${import.meta.env.BASE_URL}Card3.jpg`,
              title: 'Animated Apple Iphone 3D Website',
              p: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
            },
          ].map((recent, item) => (
            <div
              key={item}
              className="bg-[#0c0e23] border border-white/10 rounded-3xl p-6 flex flex-col"
            >
              <div className="w-full aspect-video bg-[#1a1c30] rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <img src={recent.img} alt="" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{recent.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">{recent.p}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex -space-x-2">
                  {[
                    {
                      img: `${import.meta.env.BASE_URL}React 5.png`,
                    },
                    {
                      img: `${import.meta.env.BASE_URL}Tailwindcss.png`,
                    },
                    {
                      img: `${import.meta.env.BASE_URL}ts.png`,
                    },
                    {
                      img: `${import.meta.env.BASE_URL}Threejs-logo 2.png`,
                    },
                  ].map((img, icon) => (
                    <div
                      key={icon}
                      className="w-10 h-10 rounded-full border border-white/20 bg-[#000319] flex items-center justify-center text-xs"
                    >
                      <img src={img.img} alt="" />
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-[#cbacf9] font-medium flex items-center gap-1 hover:underline"
                >
                  Check Live Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="max-w-8xl mx-auto px-5 py-20 overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Kind words from
          <span className="text-[#cbacf9]">satisfied clients</span>
        </h2>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-8 animate-infinite-scroll py-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[450px] shrink-0 bg-[#0c0e23] border border-white/10 rounded-3xl p-8 flex flex-col gap-8 transition-colors hover:bg-white/[0.02]"
              >
                <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {/* Аватарка */}
                  <img
                    src={item.image}
                    alt="#"
                    className="w-12 h-12 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-xl shrink-0"
                  />

                  <div>
                    <h4 className="text-white font-bold text-lg leading-none mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-20 opacity-70">
          {[
            {
              img: `${import.meta.env.BASE_URL}Testimonsals.png`,
            },
            {
              img: `${import.meta.env.BASE_URL}Testimonsals1.png`,
            },
            {
              img: `${import.meta.env.BASE_URL}Testimonsals2.png`,
            },
            {
              img: `${import.meta.env.BASE_URL}Testimonsals3.png`,
            },
            {
              img: `${import.meta.env.BASE_URL}Testimonsals4.png`,
            },
          ].map((img, id) => (
            <div
              key={id}
              className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-100 transition-opacity cursor-pointer"
            >
              <img
                src={img.img}
                alt="Company "
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#cbacf9]">work experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              img: `${import.meta.env.BASE_URL}_Group_.png`,
              title: 'Frontend Engineer Intern',
              desc: 'Assisted in the development of a web-based platform using React.js.',
            },
            {
              img: `${import.meta.env.BASE_URL}_Group1_.png`,
              title: 'Mobile App Dev',
              desc: 'Designed and developed mobile app for iOS & Android platforms.',
            },
            {
              img: `${import.meta.env.BASE_URL}_Groupe2_.png`,
              title: 'Freelance App Dev',
              desc: 'Led the dev of a mobile app for a client, from concept to deployment.',
            },
            {
              img: `${import.meta.env.BASE_URL}_Group3_.png`,
              title: 'Lead Frontend Developer',
              desc: 'Developed and maintained user-facing features using modern tech.',
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="bg-[#0c0e23] border border-white/10 rounded-3xl p-8 flex items-center gap-6 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <img
                src={job.img}
                alt=""
                className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-3xl shrink-0"
              ></img>
              <div>
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#cbacf9]">approach</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { phase: 'Phase 1', title: 'Planning & Strategy' },
            { phase: 'Phase 2', title: 'Development & Progress Update' },
            { phase: 'Phase 3', title: 'Testing & Launch' },
          ].map((phase, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0c0e23] border border-white/10 rounded-3xl h-[400px] flex flex-col items-center justify-center p-8 text-center hover:bg-[#1a1c30] transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-white/20">+</div>
              <div className="absolute top-4 right-4 text-white/20">+</div>
              <div className="absolute bottom-4 left-4 text-white/20">+</div>
              <div className="absolute bottom-4 right-4 text-white/20">+</div>

              <button className="px-5 py-2 bg-purple-900/50 text-purple-200 rounded-full font-semibold border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform">
                {phase.phase}
              </button>

              <h3 className="text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
                {phase.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="w-full pt-20 pb-10 px-5 text-center relative"
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10  bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${bgMainImg})` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight relative z-10">
          Ready to take <span className="text-[#cbacf9]">your</span> digital
          presence to the next level?
        </h2>
        <p className="mt-6 text-gray-400 mb-10 relative z-10">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>

        <button className="px-8 py-4 bg-[#000319] border border-white/20 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all mx-auto relative z-10">
          Contact Me Now ↗
        </button>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto border-t border-white/10 pt-8 relative z-10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright ©2026 Maksym
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#0c0e23] flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <img src={`${import.meta.env.BASE_URL}footer.png`} alt="" />
            </div>
            <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#0c0e23] flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <img src={`${import.meta.env.BASE_URL}footer1.png`} alt="" />
            </div>
            <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#0c0e23] flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <img src={`${import.meta.env.BASE_URL}footer2.png`} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
