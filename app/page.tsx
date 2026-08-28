'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  Terminal,
  X,
} from 'lucide-react'

const skills = {
  Programming: ['C++', 'JavaScript'],
  Frontend: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  Database: ['SQL'],
  Tools: ['Git', 'GitHub', 'VS Code'],
  Core: ['Data Structures & Algorithms', 'Problem Solving'],
}

const projects = [
  {
    number: '01', name: 'Split Spend', type: 'Personal Expense Tracker',
    description: 'A personal expense-management application designed to help users record, organize, search, and review their day-to-day spending.',
    features: ['Add Expense', 'View Expenses', 'Search Expense', 'Delete Expense', 'Monthly Total', 'Category Total', 'Highest Expense', 'Personal Expense Tracking'],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '02', name: 'EduTrack', type: 'Student Academic Management',
    description: 'A student-focused academic management application designed to organize important academic information and student utilities in one place.',
    features: ['Subject Management', 'Marks', 'Grades', 'Credits', 'TGPA Calculator', 'Notes', 'Attendance Manager', 'Academic Tracking'],
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
  },
]

const profiles = [
  { name: 'GitHub', detail: 'harshraj1339-design', href: 'https://github.com/harshraj1339-design', icon: Code2 },
  { name: 'LinkedIn', detail: 'harsh-raj1339', href: 'https://www.linkedin.com/in/harsh-raj1339/', icon: Globe2 },
  { name: 'LeetCode', detail: 'harshraj-1339', href: 'https://leetcode.com/u/harshraj-1339/', icon: Code2 },
  { name: 'Codeforces', detail: 'harsh_raj007', href: 'https://codeforces.com/profile/harsh_raj007', icon: Terminal },
]

const certifications = [
  ['Testing Basics and Test Management', 'Infosys', 'April 2026'],
  ['Full Stack Web Development by WB Web Development Solutions', 'Cursa', 'February 2026'],
  ['Effective Time Management', 'Tech Veda', 'October 2025'],
]

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function Nav({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']
  return <header className="nav-wrap"><nav className="nav container">
    <a href="#home" className="brand" onClick={() => setOpen(false)}><span>H</span> Harsh Raj</a>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      <button className="theme-button mobile-theme" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
    </div>
    <div className="nav-actions"><button className="theme-button" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a href="/resume.pdf" className="small-button">Resume <Download size={15} /></a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </nav></header>
}

function Hero() {
  return <section id="home" className="hero container"><div className="hero-copy reveal">
    <p className="eyebrow">HELLO, I&apos;M HARSH RAJ</p>
    <h1>Building with code.<br /><em>Solving with logic.</em></h1>
    <p className="hero-role">Web Developer <span>/</span> C++ &amp; DSA Enthusiast</p>
    <p className="hero-description">I&apos;m a B.Tech student at Lovely Professional University focused on C++, Data Structures &amp; Algorithms, problem solving, and modern web development.</p>
    <div className="hero-actions"><a href="#projects" className="button-primary">View Projects <ArrowUpRight size={17} /></a><a href="/resume.pdf" className="button-secondary">Download Resume <Download size={16} /></a></div>
    <div className="social-row">{profiles.map(({ name, href, icon: Icon }) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon size={18} /></a>)}</div>
  </div><div className="terminal-card reveal" aria-label="Code snippet"><div className="terminal-top"><span><i /><i /><i /></span><small>harsh.cpp</small><span /></div><pre><code><b>#include</b> <span>&lt;iostream&gt;</span>{'\n'}<b>using namespace</b> std;{ '\n\n'}<b>int</b> main() {'{'}{ '\n'}  cout &lt;&lt; <mark>&quot;keep building&quot;</mark>;{ '\n'}  <b>return</b> <span>0</span>;{ '\n'}{'}'}</code></pre><div className="terminal-status"><span className="status-dot" /> compiling curiosity...</div></div></section>
}

function About() { return <section id="about" className="section container"><SectionLabel>01 / ABOUT</SectionLabel><div className="about-grid"><h2>Curious by nature.<br /><span>Consistent by choice.</span></h2><div><p className="lead">I&apos;m Harsh Raj, a B.Tech student at Lovely Professional University currently in my 2nd year, 3rd semester. I&apos;m interested in software development, with a strong focus on C++, Data Structures &amp; Algorithms, problem solving, and web development.</p><p>I enjoy learning by building practical projects and continuously improving my programming skills. My current goal is to strengthen my DSA fundamentals while creating useful and well-designed web applications.</p><div className="learning"><p className="mini-label">CURRENTLY LEARNING</p><div className="chip-row">{['C++', 'DSA', 'React', 'JavaScript', 'SQL', 'Git & GitHub'].map(x => <span key={x}>{x}</span>)}</div></div></div></div></section> }

function Skills() { return <section id="skills" className="section section-muted"><div className="container"><SectionLabel>02 / SKILLS</SectionLabel><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><p className="mini-label">{category}</p>{items.map(item => <div className="skill-item" key={item}><Check size={15} />{item}</div>)}</div>)}</div></div></section> }

function Projects() { return <section id="projects" className="section container"><SectionLabel>03 / SELECTED WORK</SectionLabel><div className="section-heading"><h2>Projects that make<br /><span>ideas useful.</span></h2><p>Small, focused products built to learn deeply and solve everyday problems.</p></div><div className="projects-list">{projects.map(project => <article className="project-card" key={project.number}><div className="project-index">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="mini-label">FEATURES</p><div className="feature-list">{project.features.map(f => <span key={f}>{f}</span>)}</div><div className="project-bottom"><div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><span className="disabled-link">GitHub <ExternalLink size={14} /></span><span className="disabled-link">Live Demo <ExternalLink size={14} /></span></div></div></div></article>)}</div><p className="coming">More projects coming soon <ChevronRight size={16} /></p></section> }

function Profiles() { return <section className="section section-muted"><div className="container"><SectionLabel>04 / CODE &amp; CONNECT</SectionLabel><div className="profile-grid">{profiles.map(({ name, detail, href, icon: Icon }) => <a className="profile-card" href={href} target="_blank" rel="noreferrer" key={name}><div className="profile-icon"><Icon size={22} /></div><div><h3>{name}</h3><p>{detail}</p></div><ArrowUpRight size={18} className="profile-arrow" /></a>)}</div></div></section> }

function Education() { return <section id="education" className="section container"><SectionLabel>05 / EDUCATION</SectionLabel><div className="education-card"><div className="edu-icon"><GraduationCap size={25} /></div><div><p className="project-type">PRESENT</p><h3>Lovely Professional University (LPU)</h3><p className="lead">Bachelor of Technology (B.Tech)</p><div className="edu-tags"><span>2nd Year</span><span>3rd Semester</span></div></div></div></section> }

function Certifications() { return <section id="certifications" className="section section-muted"><div className="container"><SectionLabel>06 / CERTIFICATIONS</SectionLabel><div className="cert-list">{certifications.map(([title, issuer, date]) => <div className="cert-card" key={title}><div><p className="project-type">{date}</p><h3>{title}</h3><p>{issuer}</p></div><button className="certificate-button" disabled>View Certificate <ExternalLink size={15} /></button></div>)}</div></div></section> }

function Contact() { return <><section className="resume-cta container"><div><SectionLabel>07 / NEXT STEP</SectionLabel><h2>Want to know<br /><span>more?</span></h2><p>Download my resume to explore my skills, projects, certifications, and development journey.</p></div><a href="/resume.pdf" className="button-primary">Download Resume <Download size={17} /></a></section><section id="contact" className="contact section"><div className="container contact-inner"><div><SectionLabel>08 / CONTACT</SectionLabel><h2>Let&apos;s build something <span>together.</span></h2><p>I&apos;m always interested in learning, building useful projects, and connecting with other developers.</p></div><div className="contact-actions"><a href="mailto:harshraj13339@gmail.com" className="button-primary"><Mail size={17} /> Email Me</a><a href="https://github.com/harshraj1339-design" target="_blank" rel="noreferrer" className="button-secondary"><Code2 size={17} /> GitHub</a><a href="https://www.linkedin.com/in/harsh-raj1339/" target="_blank" rel="noreferrer" className="button-secondary"><Globe2 size={17} /> LinkedIn</a></div></div></section></> }

export default function Page() { const [dark, setDark] = useState(true); return <div className={dark ? 'portfolio dark-mode' : 'portfolio light-mode'}><Nav dark={dark} setDark={setDark} /><main><Hero /><About /><Skills /><Projects /><Profiles /><Education /><Certifications /><Contact /></main><footer className="footer container"><div><a href="#home" className="brand"><span>H</span> Harsh Raj</a><p>Web Developer <span>|</span> C++ &amp; DSA Enthusiast</p></div><div className="footer-links">{profiles.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}<a href="mailto:harshraj13339@gmail.com">Email</a></div><p className="copyright">© 2026 Harsh Raj</p></footer></div> }
