import React from 'react';
import { Layers, Zap, Search, Briefcase } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiCplusplus, SiFlutter } from 'react-icons/si';

const Bento = () => {
  return (
    <section id="skills" className="container animate-up" style={{ animationDelay: '0.2s' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '40px', textAlign: 'center' }}>Expertise</h2>
      
      <div className="bento-grid">
        {/* Large Stats/Intro Box */}
        <div className="bento-item large">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <h3 className="bento-title" style={{ marginBottom: 0 }}>AI Intern</h3>
              <span className="bento-text" style={{ fontSize: '14px', color: 'var(--accent-color)', fontWeight: '600' }}>Jun 2025 - Jul 2025</span>
            </div>
            <div className="bento-text" style={{ fontWeight: '500', marginBottom: '16px', color: 'var(--text-main)' }}>
              KIET Group of Institutions & EST Global Inc., USA
            </div>
            <ul style={{ color: 'var(--text-muted)', listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '16px' }}>
              <li style={{ fontSize: '14px', marginBottom: '8px' }}>Developed prototype solutions demonstrating AI agents and automation workflows for real-world problem scenarios.</li>
              <li style={{ fontSize: '14px', marginBottom: '8px' }}>Applied machine learning concepts such as data preprocessing, feature extraction, and model evaluation on sample datasets.</li>
              <li style={{ fontSize: '14px', marginBottom: '8px' }}>Analyzed practical use-cases of AI in domains like decision-making systems and intelligent automation.</li>
              <li style={{ fontSize: '14px' }}>Collaborated in structured project tasks and presented findings; awarded a globally recognized participation certificate.</li>
            </ul>
          </div>
        </div>

        {/* Small Service Box 1 */}
        <div className="bento-item">
          <Zap size={32} color="var(--accent-color)" />
          <div>
            <h3 className="bento-title" style={{ fontSize: '20px' }}>Web Dev</h3>
            <p className="bento-text">Robust & scalable solutions.</p>
          </div>
        </div>

        {/* Small Service Box 2 */}
        <div className="bento-item">
          <Search size={32} color="var(--accent-color)" />
          <div>
            <h3 className="bento-title" style={{ fontSize: '20px' }}>SEO</h3>
            <p className="bento-text">Organic traffic strategies.</p>
          </div>
        </div>

        {/* Large Tech Stack Box */}
        <div className="bento-item large tall" style={{ justifyContent: 'center' }}>
          <h3 className="bento-title" style={{ marginBottom: '30px', textAlign: 'center' }}>Tech Stack</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', justifyItems: 'center' }}>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaReact size={48} color="#61dafb" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>React</div>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <SiNextdotjs size={48} color="#ffffff" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Next.js</div>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <SiTailwindcss size={48} color="#38bdf8" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Tailwind</div>
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaNodeJs size={48} color="#68a063" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Node.js</div>
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <FaPython size={48} color="#3776ab" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Python</div>
            </a>
            <a href="https://www.framer.com/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <SiFramer size={48} color="#0055FF" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Framer</div>
            </a>
            <a href="https://isocpp.org/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <SiCplusplus size={48} color="#00599C" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>C++</div>
            </a>
            <a href="https://flutter.dev/" target="_blank" rel="noreferrer" style={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <SiFlutter size={48} color="#02569B" />
              <div style={{ marginTop: '10px', fontSize: '14px' }}>Flutter</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
