/* style.css - The "Timeless Remix" */

/* ------------------- */
/*    RESET & SETUP    */
/* ------------------- */
:root {
    --bg-color: #F5F5F5;
    --text-color: #1a1a1a;
    --border-color: #E0E0E0;
    --font-primary: 'Playfair Display', serif;
    --font-secondary: 'Inter', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--font-secondary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    cursor: none; /* Hide default cursor */
}

a { color: var(--text-color); text-decoration: none; }
.container { width: 90%; max-width: 1200px; margin: 0 auto; }
section { padding: 4rem 0; }

/* ------------------- */
/*   CUSTOM CURSOR     */
/* ------------------- */
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out, width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    z-index: 9999;
    mix-blend-mode: difference;
}
.custom-cursor.grow {
    transform: translate(-50%, -50%) scale(2.5);
    background-color: var(--text-color);
}

/* ------------------- */
/*      ANIMATIONS     */
/* ------------------- */
[data-animate] {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
[data-animate].visible { opacity: 1; transform: translateY(0); }

/* ------------------- */
/*       HEADER        */
/* ------------------- */
.site-header {
    padding: 2rem 0;
    position: absolute;
    width: 100%;
    z-index: 100;
}
.site-header .container { display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: 700; font-size: 1.5rem; }
.main-nav ul { display: flex; list-style: none; gap: 2.5rem; }
.main-nav a { font-weight: 500; transition: opacity 0.3s; }
.main-nav a:hover { opacity: 0.6; }

/* ------------------- */
/*         HERO        */
/* ------------------- */
.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    text-align: left;
    padding-top: 8rem;
}
.hero h1 {
    font-family: var(--font-primary);
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 1.15;
    max-width: 850px;
    margin-bottom: 2rem;
}
.btn {
    display: inline-block;
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 1rem 2.5rem;
    font-weight: 500;
    border-radius: 50px;
    transition: all 0.3s ease;
}
.btn:hover { transform: scale(1.05); background-color: #000; }

/* ------------------- */
/*       MARQUEE       */
/* ------------------- */
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.marquee {
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    overflow: hidden;
    white-space: nowrap;
}
.marquee-content {
    font-size: 1.2rem;
    font-weight: 500;
    display: inline-block;
    animation: scroll 30s linear infinite;
}

/* ------------------- */
/*      WORK GRID      */
/* ------------------- */
.work { padding-top: 6rem; }
.work h2 {
    font-family: var(--font-primary);
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 3rem;
}
.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem 2rem;
}
.work-card img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.work-card:hover img { transform: scale(1.03); }
.work-info h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
}
.work-info p { opacity: 0.7; }

/* ------------------- */
/*        FOOTER       */
/* ------------------- */
.site-footer {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 6rem 0 2rem 0;
    margin-top: 6rem;
}
.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;
    border-bottom: 1px solid rgba(245, 245, 245, 0.2);
}
.footer-top h2 {
    font-family: var(--font-primary);
    font-size: clamp(2rem, 5vw, 3.5rem);
    max-width: 500px;
    line-height: 1.2;
}
.footer-top .btn { background-color: var(--bg-color); color: var(--text-color); }
.footer-top .btn:hover { background-color: #fff; }

.footer-bottom {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    padding: 4rem 0;
}
.footer-column h4 { font-size: 1.5rem; margin-bottom: 1rem; }
.footer-column h5 { font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; }
.footer-column ul { list-style: none; }
.footer-column li { margin-bottom: 0.5rem; }
.footer-column a { color: var(--bg-color); opacity: 0.9; transition: opacity 0.3s; }
.footer-column a:hover { opacity: 0.6; }

.footer-legal {
    padding-top: 2rem;
    border-top: 1px solid rgba(245, 245, 245, 0.2);
    text-align: center;
    opacity: 0.5;
}

/* ------------------- */
/*   RESPONSIVENESS    */
/* ------------------- */
@media (max-width: 768px) {
    .footer-bottom { grid-template-columns: 1fr; }
    .footer-top { flex-direction: column; text-align: center; gap: 2rem; }
    .work-grid { grid-template-columns: 1fr; }
}
