import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform, useScroll } from 'framer-motion';
import pfpImage from '../Dependencies/PFP.jpg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomOut } from 'react-scroll-motion';
import {FaHtml5, FaReact, FaCss3Alt, FaJava, FaPython, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { DiPostgresql } from "react-icons/di";
import NavDropdown from 'react-bootstrap/NavDropdown';

const styles = {
  subheading: {
    marginBottom: '2px',
    textAlign: 'center',
    fontSize: '40px',
    color: 'white',
    textShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  subheadingResponsive: {
    marginBottom: '1rem',
    fontSize: '1.875rem',
  },
  heading: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  headingResponsive: {
    fontSize: '4.5rem',
  },
  container: {
    maxWidth: '80rem',
    margin: 'auto',
    padding: '3rem 1rem 6rem 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '1rem',
  },
  header: {
    gridColumn: 'span 4 / span 4',
    fontSize: '1.875rem',
    fontWeight: 'bold',
  },
  content: {
    gridColumn: 'span 8 / span 8',
  },
  paragraph: {
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#4B5563',
  },
  button: {
    width: '100%',
    padding: '0.75rem 2.25rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#111827',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#4B5563',
  },
  icon: {
    display: 'inline',
  },
  miniIconGoogle: {
    width: '200px',
    height: '200px',
  },
  miniIconBliz: {
    width: '250px',
    height: '200px',
  },
  miniIconUCR: {
    width: '250px',
    height: '250px',
  },
  miniIcon: {
    width: '250px',
    height: '250px',
  },
  miniIconMTG: {
    width: '325px',
    height: '250px',
  },
  hobbyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#111827',
    padding: '2rem',
  },
  hobbySection: {
    margin: '1rem',
    padding: '1rem',
    flex: '1 1 30%',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb',
    transition: 'transform 0.3s',
  },
  hobbyImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  },
  hobbyTitle: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  hobbyDescription: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#4b5563',
  },
}

const projectPageStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

const projects = [
  {
    title: 'Pickle Circuits',
    description: 'An React app created with a couple friends for Pickleball tornament or causal score keeping. ',
    url: 'https://github.com/CaminoPickleCoders/PickleCircuits'
  },
  {
    title: 'Live Active',
    description: 'A workout tracking website build with React. Has an interal database using MongoDB and uses many APIs for workout recommendations.',
    url: 'https://github.com/xTh3Unkn0wnx/CS-180-Live-Active'
  },
  {
    title: 'Hackslash',
    description: 'Fulling functioning complier that complies a language specifically created by us called Hashslash. ',
    url: 'https://github.com/CS152-Fall23/cs152-lab-cs152f23-project-022-hackslash'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Simple Tic-Tac-Toe game created using HTML, CSS, and Javascript.',
    url: ''
  },
  {
    title: 'NY Times API with React',
    description: 'Project fetching popular articles from the New York Times API using Javascript.',
    url: ''
  },
  {
    title: 'Web Server',
    description: 'A functional web server that store and deletes books inputed by the user.',
    url: ''
  },
]

export const TextParrallaxContentMain = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const sentinelRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
  
      if (sentinelRef.current) {
        observer.observe(sentinelRef.current);
      }
  
      return () => {
        if (sentinelRef.current) {
          observer.unobserve(sentinelRef.current);
        }
      };
    }, []);
  
    return (
      <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), ZoomOut(1, 90))}>
              <span style={{ fontSize: "30px" }}> Hi there! My name is Ocean and welcome to my web page!</span>
            </Animator>
          </ScrollPage>
          <ScrollPage> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
              <span style={{ fontSize: "30px" }}> <HeroContContainer /> </span>
            </Animator>
          </ScrollPage>
          <ScrollPage> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 100))}>
              <span style={{ fontSize: "30px" }}> <AboutMeContent /> </span>
            </Animator>
          </ScrollPage>
          <ScrollPage> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 100))}>
              <span style={{ fontSize: "30px" }}> <HobbyContainer /> </span>
            </Animator>
          </ScrollPage>
          <ScrollPage> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(100, 0))}>
              <span style={{ fontSize: "30px" }}> <EducationContainer /> </span>
            </Animator>
          </ScrollPage>
          <ScrollPage> 
            <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 0))}>
              <span style={{ fontSize: "30px" }}> <WorkExperienceCont /> </span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 100))}>
              <h3 style={{ textAlign: 'center', width: '100%', fontSize: '2rem'}}> Projects </h3>
              <p style={{ textAlign: 'center', width: '100%', fontSize: '1.1rem' }}> Click on any of the boxes to check out my repo! </p>
              <div style={projectPageStyles}>
                <ProjectContainer projects={projects} />
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), ZoomOut(1, 100))}>
              <ContactForm />
            </Animator>
          </ScrollPage>
          <div ref={sentinelRef} style={{ height: '1px' }}></div>
          {isFooterVisible && <Footer />}
        </ScrollContainer>
      </div>
    );
  };
  

const IMG_PADDING = 12

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  const containerRef = useRef(null)

  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
        height: '100vh',
      }}
      ref={containerRef}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        <StickyImage imgUrl={imgUrl} containerRef={containerRef} subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  )
}

TextParallaxContent.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node,
}

const StickyImage = ({ imgUrl, containerRef, subheading, heading }) => {
  const { scrollYProgress } = useScroll({ target: containerRef })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        position: 'sticky',
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: '1.5rem',
        scale,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.3)',
          opacity,
        }}
      />
      <OverlayCopy subheading={subheading} heading={heading} opacity={opacity} />
    </motion.div>
  )
}

StickyImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  containerRef: PropTypes.object.isRequired,
  subheading: PropTypes.string,
  heading: PropTypes.string,
}

const OverlayCopy = ({ heading, subheading, opacity }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <motion.p
        style={{ ...styles.subheading, y: translateY, opacity }}
        className="subheading"
        ref={targetRef}
      >
        {subheading}
      </motion.p>
      <motion.p
        style={{ ...styles.heading, y: translateY, opacity }}
        className="heading"
      >
        {heading}
      </motion.p>
      <style>
        {`
          @media (min-width: 768px) {
            .subheading {
              margin-bottom: ${styles.subheadingResponsive.marginBottom};
              font-size: ${styles.subheadingResponsive.fontSize};
            }
            .heading {
              font-size: ${styles.headingResponsive.fontSize};
            }
          }
        `}
      </style>
    </motion.div>
  )
}

OverlayCopy.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  opacity: PropTypes.object.isRequired,
}

const heroContStyles = {
  heroMainCont: {
    width: '100vw', 
    height: '100vh',
    overflow: 'hidden',
    padding: '100px 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  leftContainer: {
    marginRight: '20px',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topRightContainer: {
    marginBottom: '20px',
  },
}

const HeroContContainer = () => {
  return (
    <div style={heroContStyles.heroMainCont}>  
      <div style={heroContStyles.leftContainer}>
        <img
          src={pfpImage}
          style={{
            width: '450px',
            height: '500px',
            borderRadius: '30px',
          }}
        />
      </div>
      <div style={heroContStyles.rightContainer}>
        <div style={heroContStyles.topRightContainer}>
            <p style={fadeStyles.paragraph}>
              Hi there, nice to meet you! My name is Ocean Chen.
            </p>
            <p style={fadeStyles.paragraph}>
              I'm an aspiring Web App developer currently attending the University of California, Riverside for a Bachelors in Computer Science. 
            </p>
        </div>
        <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UC_Riverside_Highlanders_logo.svg/1200px-UC_Riverside_Highlanders_logo.svg.png"
          style={styles.miniIconUCR}
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          style={styles.miniIcon}
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-Logo-1993.png"
          style={styles.miniIconMTG}
        />
        <img 
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww"
          style={{
            width: '20rem',
            height: '15rem'
          }}
        />
        </div>
      </div>
    </div>
  )
}

const fadeStyles = {
  container: {
    maxWidth: '80rem',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '1rem',
  },
  header: {
    gridColumn: 'span 4 / span 4',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    gridColumn: 'span 8 / span 8',
  },
  paragraph: {
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#4B5563',
  },
  button: {
    width: '100%',
    padding: '0.75rem 2.25rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: '#111827',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#4B5563',
  },
  icon: {
    display: 'inline',
  },
}

const AboutMeContent = () => {
  return (
    <div style={fadeStyles.container}>
      <h2 style={fadeStyles.header}>
        A little bit about me...
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
            style={{ ...styles.miniIconGoogle, marginRight: '20px' }}
          />
          <img
            src="https://download.logo.wine/logo/Blizzard_Entertainment/Blizzard_Entertainment-Logo.wine.png"
            style={{ ...styles.miniIconBliz, marginLeft: '20px' }}
          />
        </div>
      </h2>
      <div style={fadeStyles.content}>
        <p style={fadeStyles.paragraph}>
          I started my coding journey in high school where I learned the fundamentals of coding using Java. Ever since I was young, I've always been interested in computers and technology but it wouldn't be until high school where I would gain my first coding experience.
        </p>
        <p style={fadeStyles.paragraph}>
          In college, I found myself extremely interested in working as a full stack developer for web applications, but recently I began to take on an interest in data and data analytics. My goal is to work as a developer for Activision Blizzard or Google.
        </p>
        <a 
          href="https://docs.google.com/document/d/1-M8mQDZPcavVr0MvYRF8iSX5gVwwUj_HxKvpPtB9KWw/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: 'inline-block', width: '10vw', height: '6vh', lineHeight: '6vh', textAlign: 'center', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
        >
          Resume
        </a>
      </div>
    </div>
  )
}

const HobbyContStyles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    padding: '1rem',
    width: '100vw',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  hobbyBox: {
    padding: '1rem',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
  },
  hobbyImage: {
    width: '300px',
    height: '150px',
  },
  hobbyText: {
    fontSize: '2rem',
  },
}

const HobbyContainer = () => {
  return (
    <div style={{ ...HobbyContStyles.container, justifyContent: 'space-between' }}>
      <Animator animation={batch(Fade(), MoveIn(0, -200), MoveOut(0, -200))}>
        <span style={{ fontSize: "30px"}}>
          <div style={HobbyContStyles.hobbyBox}>
            <p style={HobbyContStyles.hobbyText}> I'm a huge fan of video games. My favorite includes the Starcraft series, League of Legends, and Magic the Gathering.</p>
            <img src='https://pngimg.com/d/starcraft_PNG68.png' alt="Starcraft" style={HobbyContStyles.hobbyImage}/>
            <img src='https://www.pngall.com/wp-content/uploads/2016/05/League-of-Legends-PNG-Pic.png' alt="LeagueOfLegends" style={HobbyContStyles.hobbyImage}/>
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(200, 0), MoveOut(200, 0))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> When I was young, I had the opportunity to travel a lot. I love exploring new countries, experiencing the great culture and amazing local delicacies! </p>
            <img src='https://www.celebritycruises.com/blog/content/uploads/2022/01/japan-landmarks-mount-fuji-shimizu-1024x619.jpg' alt="JapanPic" style={HobbyContStyles.hobbyImage}/>
            <img src='https://cdn.enjoytravel.com/img/travel-news/forbidden-city-beijing.jpg' alt="ChinaPic" style={HobbyContStyles.hobbyImage}/>
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(-200, 0))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> I also really enjoy music. I have been playing piano since 8 years old. The highlight of my career was being invited to San Jose Performance Center for a recitle.</p>
            <img src='https://akustiks.com/wp-content/uploads/The-Ordway-Center-Piano-on-Stage-1.jpg' alt="SJPerformanceCenter" style={HobbyContStyles.hobbyImage}/>
            <img src='' alt="SelfPic" style={HobbyContStyles.hobbyImage}/>
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(0, 200), MoveOut(0, 200))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> I love art and always enjoyed drawing as a kid. As a grew older I shifted to painting miniatures. I truly enjoy bringing fictional characters to life and to express my skills and technique!</p>
            <img src='https://assetsio.gnwcdn.com/warhammer-40000-ninth-edition-space-marine-army.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' alt="Starcraft" style={HobbyContStyles.hobbyImage}/>
            <img src='https://i.redd.it/6axng32y3etb1.jpg' alt="LeagueOfLegends" style={HobbyContStyles.hobbyImage}/>
          </div>
        </span>
      </Animator>
    </div>
  )
}

const educationContStyles = {
  eduMainCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  boxesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },
  scrollContLeft: {
    height: '35rem',
    width: '25rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
  },
  scrollContRight: {
    height: '35rem',
    width: '50rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
  },
  skillBox: {
    height: '1rem',
    width: '1rem',
    backgroundColor: 'red',
    display: 'inline-block',
    marginLeft: '0.5rem',
  },
  skillRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  skillLevels: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '15rem',
    marginBottom: '1rem',
    color: 'black'
  },
  gitIcon: {
    height: '5rem',
    width: '5rem',
  },
  skillName: {
    width: '8rem'
  },
  ratingFont: {
    fontSize: '15px',
  },
}

const ProgBarStyle = {
  child: {
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    left: {
      svg: {
        fontSize: '20rem',
        fill: '#e34c26',
      },
    },
    right: {
      width: '50vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: '1rem',
      h1: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
      },
      skillBar: {
        width: '100%',
        height: '33px',
        borderRadius: '20px',
        backgroundColor: '#e6e1dc',
        padding: '0.2rem',
        progress: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,25,25,1) 0%, rgba(223,33,31,1) 4%, rgba(223,231,48,1), rgba(224,9,39,1) 99%',
          borderRadius: '20px',
        },
        span: {
          lineHeight: '20px',
          fontSize: '0.8rem', 
          fontWeight: 'bold',
          color: '#fff', 
          marginBottom: '0.3rem'
        },
      },
    },
  },
}

const SkillItem = ({ skill, percentage }) => {
  const [fillWidth, setFillWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(skill)
      if (element) {
        const rect = element.getBoundingClientRect()
        const viewHeight = window.innerHeight || document.documentElement.clientHeight

        if (rect.top < viewHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0)
          const elementHeight = rect.height
          const visiblePercentage = (visibleHeight / elementHeight) * percentage
          setFillWidth(visiblePercentage > percentage ? percentage : visiblePercentage)
        } else {
          setFillWidth(0)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [percentage, skill])

  const renderIcon = () => {
    switch (skill) {
      case 'HTML5':
        return <FaHtml5 />
      case 'React':
        return <FaReact />
      case 'CSS':
        return <FaCss3Alt />
      case 'Javascript':
        return <FaJava />
      case 'Python':
        return <FaPython />
      case 'SQL':
        return <DiPostgresql />
      default:
        return null
    }
  }

  return (
    <div id={skill} style={ProgBarStyle.child}>
      <div style={ProgBarStyle.child.content}>
        <div style={ProgBarStyle.child.left}>
          {renderIcon()}
        </div>
        <div style={ProgBarStyle.child.right}>
          <h1>{skill}</h1>
          <div style={ProgBarStyle.child.right.skillBar}>
            <div
              style={{
                ...ProgBarStyle.child.right.skillBar.progress,
                width: `${fillWidth}%`,
                transition: 'width 0.5s ease-out',
                backgroundColor: 'blue',
              }}
            >
              <span style={ProgBarStyle.child.right.skillBar.span}>{Math.round(fillWidth)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EducationContainer = () => {
  return (
    <div style={educationContStyles.eduMainCont}>
      <div style={educationContStyles.boxesContainer}>
        <Animator animation={batch(Fade(), MoveIn(-100, 1))}>
          <div style={{ fontSize: '30px' }}>
            <div style={educationContStyles.scrollContLeft}>
              <h2 style={{ color: 'black', textAlign: 'center', marginTop: '1rem' }}>Education</h2>
              <p style={{ fontSize: '1.5rem' }}>
                University of California, Riverside - <b style={{ fontSize: '1.3rem' }}>B.S. in Computer Science</b>
              </p>
              <p style={{ fontSize: '1rem' }}>September 2020 - June 2024</p>
              <br />
              <p style={{ fontSize: '1.5rem' }}>
                Arcadia High School - <b style={{ fontSize: '1.3rem' }}>G.E.D</b>
              </p>
              <p style={{ fontSize: '1rem' }}>August 2016 - June 2020</p>
              <img
                src='https://erp.today/wp-content/uploads/2023/03/news.top25uni.RPoon_-2.jpg'
                style={{ width: '20rem', height: '13rem' }}
              />
            </div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), MoveIn(100, 1))}>
          <div style={{ fontSize: '30px' }}>
            <div style={educationContStyles.scrollContRight}>
              <h2 style={{ color: 'black', textAlign: 'center', marginTop: '1rem' }}>Skills</h2>
              <SkillItem skill='SQL' percentage={80} />
              <SkillItem skill='HTML5' percentage={85} />
              <SkillItem skill='Javascript' percentage={85} />
              <SkillItem skill='React' percentage={90} />
              <SkillItem skill='Python' percentage={60} />
              <SkillItem skill='CSS' percentage={75} />
            </div>
          </div>
        </Animator>
      </div>
    </div>
  )
}

const WorkExperienceStyles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  jobTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  company: {
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: '#555',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
  },
  divider: {
    margin: '20px 0',
    border: '1px solid #ddd'
  }
}

const WorkExperienceCont = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Work Experience</h2>
      <div style={styles.content}>
        <div style={styles.paragraph}>
          <p>
            <strong>Intern at Matrix One Robotics</strong>
            <p style={{fontSize: '1.2rem'}}> Summer 2023 - Present </p>
            Matrix One is a start-up focused on revolutionizing AI and robotics technology. I worked as the main UI engineer by developing the frontend applications. This includes the main webpage interface and controls for the robot.
          </p>
          <hr style={styles.divider} />
          <p>
            <strong>BDC Representative at Mercedes-Benz of West Covina</strong>
            <p style={{fontSize: '1.2rem'}}> Summer 2021 - Present </p>
            Envision Motors is the leading automotive organization of Southern California. I work as a call representative for their Mercedes store in West Covina. My job is to keep customers satisfied and ensure the most excellent of service.
          </p>
          <hr style={styles.divider} />
          <p>
            <strong>Hospitality Volunteer at the Arcadia Methodist Hospital</strong>
            <p style={{fontSize: '1.2rem'}}> Winter 2018 - Spring 2020</p>
            The job of hospitality is to help patients feel more comfortable being in a hospital. This consists of tending to their needs, providing food and beverages, or just talking to them.
          </p>
        </div>
      </div>
    </div>
  )
}

const projectStyles = {
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '1rem',
    maxWidth: '14vw'
  },
  projectHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
  },
  projectList: {
    width: '100%',
    listStyleType: 'none',
    padding: 0,
  },
  projectItem: {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#4b5563',
  },
}

const ProjectContainer = ({ projects }) => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      {projects.map((project, index) => (
        <div 
          key={index} 
          style={{ ...projectStyles.projectContainer, cursor: 'pointer' }} 
          onClick={() => handleClick(project.url)}
        >
          <h2 style={projectStyles.projectHeader}>{project.title}</h2>
          <p style={projectStyles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </>
  )
}

const formStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  icon: {
    margin: '0 10px',
    fontSize: '4em',
    cursor: 'pointer',
  },
  githubIcon: {
    color: 'black',
  },
  linkedinIcon: {
    color: '#0077B5', 
  },
  emailIcon: {
    color: 'white',
    backgroundColor: '#0077B5', 
    borderRadius: '10%',
  },
}

const ContactForm = () => {
  return (
    <div style={formStyles.container}>
      <h2>Feel Free to send me an Email!</h2>
      <h1>oceanchen999@gmail.com</h1>
      
      <div style={formStyles.iconContainer}>
        <a href="https://github.com/oceanchen011" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ ...formStyles.icon, ...formStyles.githubIcon }} />
        </a>
        <a href="https://www.linkedin.com/in/ocean-chen-3940321bb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ ...formStyles.icon, ...formStyles.linkedinIcon }} />
        </a>
        <a 
          href="mailto:oceanchen999@gmail.com?subject=Contacting%20You&body=Hello%20Ocean,%0D%0A%0D%0AI%20wanted%20to%20reach%20out%20to%20you%20because..."
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaEnvelope style={{ ...formStyles.icon, ...formStyles.emailIcon }} />
        </a>
      </div>
    </div>
  )
}

const footerStyles = {
  container: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#111827',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    transition: 'transform 0.5s ease-in-out',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
}

const Footer = () => (
  <div style={footerStyles.container}>
    <p style={footerStyles.text}>© 2024 Ocean Chen. All rights reserved.</p>
  </div>
)

export default TextParrallaxContentMain
