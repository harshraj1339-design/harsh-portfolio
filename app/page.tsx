'use client'

import { FormEvent, useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  Terminal,
  X,
} from 'lucide-react'

const resumeUrl = '/resume.pdf'
const certificateLinks: Record<string, string> = {
  Infosys: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICATE-K0FPCA8SI9iZ0GQwlM0TjhjrmwDLkQ.png',
  Cursa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FULL%20STACK%20CERT-WUrfln4qaQGN66WDjIKWXfWcbVPgxW.jpeg',
  'Tech Veda': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cert-SrT1cUvUhjQPBkgbDgmb6SpKElaVgD.png',
  'WNS Cares & Cyber Smart': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WNS%20CERT-7P6vVqJmEP3gbOADMZXJuVEqNLJt57.png',
  'Infosys · Computer Network': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compter%20Network-44qNQTQTV3sPPrUZlSucVK90NaPN0K.png',
  'iamneo · An NIT Venture': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neocolab-nrIXCCxaDSbX9tAEO2q1kCwjfN3W6d.png',
}
const skills = {
  Programming: ['C++', 'Python', 'C', 'JavaScript'],
  Web: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
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
    href: 'https://github.com/harshraj1339-design/splitspend',
  },
  {
    number: '02', name: 'EduTrack', type: 'Student Academic Management',
    description: 'A student-focused academic management application designed to organize important academic information and student utilities in one place.',
    features: ['Subject Management', 'Marks', 'Grades', 'Credits', 'TGPA Calculator', 'Notes', 'Attendance Manager', 'Academic Tracking'],
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    href: 'https://github.com/harshraj1339-design/EduTrack',
  },
]

const profiles = [
  { name: 'GitHub', detail: 'harshraj1339-design', href: 'https://github.com/harshraj1339-design', icon: Code2 },
  { name: 'LinkedIn', detail: 'harsh-raj1339', href: 'https://www.linkedin.com/in/harsh-raj1339/', icon: Globe2 },
  { name: 'LeetCode', detail: 'harshraj-1339', href: 'https://leetcode.com/u/harshraj-1339/', icon: Code2 },
  { name: 'Codeforces', detail: 'harsh_raj007', href: 'https://codeforces.com/profile/harsh_raj007', icon: Terminal },
]

const education = [
  { level: 'B.Tech', title: 'Bachelor of Technology', place: 'Lovely Professional University (LPU)', detail: '2nd Year • 3rd Semester', status: 'Currently pursuing' },
  { level: '12th', title: 'Class 12', place: 'Chinmaya Vidyalaya · Bokaro, Jharkhand', detail: 'CBSE · 80%', status: 'Completed' },
  { level: '10th', title: 'Class 10', place: 'KV Aurangabad · Bihar', detail: 'CBSE · 89%', status: 'Completed' },
]

const certifications = [
  { title: 'Testing Basics and Test Management', issuer: 'Infosys', date: 'April 2026' },
  { title: 'Full Stack Web Development by WB Web Development Solutions', issuer: 'Cursa', date: 'February 2026' },
  { title: 'Effective Time Management', issuer: 'Tech Veda', date: 'October 2025' },
  { title: 'Cyber Smart', issuer: 'WNS Cares & Cyber Smart', date: 'July 2026', image: '/certificates/wns.png' },
  { title: 'Computer Network & Internet Security', issuer: 'Infosys · Computer Network', date: 'June 2026', image: '/certificates/computer-network.png' },
  { title: 'Computer Programming', issuer: 'iamneo · An NIT Venture', date: 'May 2026', image: '/certificates/neocolab.png' },
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
      <a href="#home" onClick={() => setOpen(false)}>Home</a>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      <button className="theme-button mobile-theme" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
    </div>
    <div className="nav-actions"><button className="theme-button" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a href={resumeUrl} download="Harsh_Raj_Resume.pdf" className="small-button">Resume <Download size={15} /></a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </nav></header>
}

function Hero() {
  return <section id="home" className="hero container"><div className="hero-copy reveal">
    <p className="eyebrow">WEB DEVELOPER / C++ &amp; DSA</p>
    <h1>Hi, I&apos;m Harsh Raj.<br />I build with code.<br /><em>I solve with logic.</em></h1>
    <p className="hero-description">I&apos;m a B.Tech student at Lovely Professional University focused on C++, Data Structures &amp; Algorithms, problem solving, and modern web development.</p>
    <div className="hero-actions"><a href="#projects" className="button-primary">View Projects <ArrowUpRight size={17} /></a><a href={resumeUrl} download="Harsh_Raj_Resume.pdf" className="button-secondary">Download Resume <Download size={16} /></a></div>
    <div className="social-row">{profiles.map(({ name, href, icon: Icon }) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>{name}</a>)}</div>
  </div><div className="hero-portrait-wrap reveal"><div className="portrait-offset" /><div className="portrait-frame"><img src="/harsh-raj.jpg" alt="Harsh Raj wearing a black t-shirt" /><span className="portrait-label">C++ / DSA / WEB</span></div><div className="code-sticker"><span>while</span> (learning) {'{'}<br />&nbsp;&nbsp;keep_building();<br />{'}'}</div></div><a className="scroll-cue" href="#about" aria-label="Scroll to About"><ArrowDown size={15} /> SCROLL TO EXPLORE</a></section>
}

function About() { return <section id="about" className="section container"><SectionLabel>01 / ABOUT</SectionLabel><div className="about-grid"><h2>Curious about<br /><span>how things work.</span></h2><div><p className="lead">I&apos;m Harsh Raj, a B.Tech student at Lovely Professional University currently in my 2nd year, 3rd semester.</p><p>I&apos;m interested in software development, especially C++, Data Structures &amp; Algorithms, problem solving, and web development. I enjoy learning by building practical projects and improving my programming fundamentals step by step.</p><div className="learning"><p className="mini-label">CURRENTLY FOCUSED ON</p><div className="chip-row">{['C++', 'DSA', 'Web Development', 'React', 'JavaScript', 'SQL', 'Git & GitHub'].map(x => <span key={x}>{x}</span>)}</div></div></div></div><div className="focus-marquee" aria-label="Current focus"><span>C++</span><i>✦</i><span>DSA</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>PROBLEM SOLVING</span></div></section> }

function Skills() { return <section id="skills" className="section section-muted"><div className="container"><SectionLabel>02 / SKILLS</SectionLabel><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><p className="mini-label">{category}</p>{items.map(item => <div className="skill-item" key={item}><Check size={15} />{item}</div>)}</div>)}</div></div></section> }

function Projects() { return <section id="projects" className="section container"><SectionLabel>03 / SELECTED PROJECTS</SectionLabel><div className="section-heading"><h2>Things I&apos;ve<br /><span>built.</span></h2><p>Small, focused products built to learn deeply and solve everyday problems.</p></div><div className="projects-list">{projects.map((project, index) => <article className={`project-card ${index % 2 ? 'reverse' : ''}`} key={project.number}><div className="project-index">{project.number}</div><div className="project-main"><div className="project-visual"><div className="mockup-window"><div className="mockup-bar"><i /><i /><i /><span>{project.name.toLowerCase().replace(' ', '-')}</span></div><div className="mockup-content"><strong>{index === 0 ? 'Monthly overview' : 'Academic dashboard'}</strong><div className="mockup-lines"><span /><span /><span /></div><div className="mockup-blocks"><b /><b /><b /></div></div></div></div><div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="mini-label">FEATURES</p><div className="feature-list">{project.features.map(f => <span key={f}>{f}</span>)}</div><div className="project-bottom"><div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a className="project-link" href={project.href} target="_blank" rel="noreferrer">View Repository <ExternalLink size={14} /></a></div></div></div></div></article>)}</div><p className="coming">More projects coming soon <ChevronRight size={16} /></p></section> }

function Profiles() { return <section className="section section-muted"><div className="container"><SectionLabel>04 / CODE &amp; CONNECT</SectionLabel><div className="profile-grid">{profiles.map(({ name, detail, href, icon: Icon }) => <a className="profile-card" href={href} target="_blank" rel="noreferrer" key={name}><div className="profile-icon"><Icon size={22} /></div><div><h3>{name}</h3><p>{detail}</p></div><ArrowUpRight size={18} className="profile-arrow" /></a>)}</div></div></section> }

function Education() { return <section id="education" className="section container"><SectionLabel>05 / EDUCATION</SectionLabel><div className="section-heading"><h2>Where I<br /><span>started.</span></h2><p>Every stage has added another layer to how I think, learn, and build.</p></div><div className="timeline">{education.map((item, index) => <article className="timeline-entry" key={item.level}><div className="timeline-marker"><span>{item.level}</span></div><div className="timeline-content"><p className="project-type">{item.status}</p><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div><span className="timeline-count">0{education.length - index}</span></article>)}</div></section> }

function Certifications() { const [selected, setSelected] = useState<string | null>(null); return <section id="certifications" className="section section-muted"><div className="container"><SectionLabel>06 / CERTIFICATIONS</SectionLabel><div className="cert-list">{certifications.map((certificate) => <div className="cert-card" key={certificate.title}><div><p className="project-type">{certificate.date}</p><h3>{certificate.title}</h3><p>{certificate.issuer}</p></div>{certificate.image ? <button className="certificate-button" onClick={() => setSelected(certificate.image)} aria-label={`View ${certificate.title} certificate`}>View Certificate <ExternalLink size={15} /></button> : <a className="certificate-button" href={certificateLinks[certificate.issuer]} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={15} /></a>}</div>)}</div></div>{selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setSelected(null)}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close certificate">×</button><img src={selected} alt="Certificate preview" /></div></div>}</section> }

function Contact() { const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle'); const [errors, setErrors] = useState<Record<string, string>>({}); async function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (status === 'sending') return; const form = event.currentTarget; const data = new FormData(form); const name = String(data.get('name') || '').trim(); const email = String(data.get('email') || '').trim(); const message = String(data.get('message') || '').trim(); const website = String(data.get('website') || '').trim(); const nextErrors: Record<string, string> = {}; if (name.length < 2) nextErrors.name = 'Please enter at least 2 characters.'; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email.'; if (message.length < 10) nextErrors.message = 'Please enter at least 10 characters.'; setErrors(nextErrors); if (Object.keys(nextErrors).length) return; setStatus('sending'); try { const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message, website }) }); if (!response.ok) throw new Error('send failed'); setStatus('sent'); form.reset(); window.setTimeout(() => setStatus('idle'), 3000); } catch { setStatus('error'); } } return <><section id="resume" className="resume-cta container"><div><SectionLabel>07 / RESUME</SectionLabel><h2>My <span>resume.</span></h2><p>Want a quick overview of my skills, projects and learning journey?</p></div><div className="resume-paper"><FileText size={26} /><span>Harsh_Raj_Resume.pdf</span><a href={resumeUrl} download="Harsh_Raj_Resume.pdf" className="button-primary">Download Resume <Download size={17} /></a></div></section><section id="contact" className="contact section"><div className="container"><SectionLabel>08 / CONTACT</SectionLabel><div className="contact-grid"><div><h2>Let&apos;s build something <span>together.</span></h2><p>I&apos;m always interested in learning, building useful projects, and connecting with other developers.</p><a className="email-link" href="mailto:harshraj13339@gmail.com">harshraj13339@gmail.com <ArrowUpRight size={18} /></a></div><form className="contact-form" onSubmit={handleSubmit} noValidate><label>Name<input required name="name" aria-invalid={Boolean(errors.name)} />{errors.name && <small className="field-error">{errors.name}</small>}</label><label>Email<input required type="email" name="email" aria-invalid={Boolean(errors.email)} />{errors.email && <small className="field-error">{errors.email}</small>}</label><label>Message<textarea required name="message" rows={4} aria-invalid={Boolean(errors.message)} />{errors.message && <small className="field-error">{errors.message}</small>}</label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'} <Send size={16} /></button>{status === 'sent' && <small className="form-success">Thanks! Your message has been sent successfully.</small>}{status === 'error' && <small className="form-error">Something went wrong. Please try again.</small>}<small>Messages are sent securely via Resend.</small></form></div><div className="contact-socials">{profiles.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name} <ArrowUpRight size={15} /></a>)}</div></div></section></> }

export default function Page() { const [dark, setDark] = useState(true); useEffect(() => { const saved = window.localStorage.getItem('harsh-theme'); if (saved) setDark(saved === 'dark'); }, []); function changeTheme(value: boolean) { setDark(value); window.localStorage.setItem('harsh-theme', value ? 'dark' : 'light'); } return <div className={dark ? 'portfolio dark-mode' : 'portfolio light-mode'}><Nav dark={dark} setDark={changeTheme} /><main><Hero /><About /><Skills /><Projects /><Profiles /><Education /><Certifications /><Contact /></main><footer className="footer container"><div><a href="#home" className="brand"><span>H</span> Harsh Raj</a><p>Web Developer <span>|</span> C++ &amp; DSA Enthusiast</p></div><div className="footer-links">{profiles.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}<a href="mailto:harshraj13339@gmail.com">Email</a><a href="#home">Back to top ↑</a></div><p className="copyright">© 2026 Harsh Raj · Built with React</p></footer></div> }
