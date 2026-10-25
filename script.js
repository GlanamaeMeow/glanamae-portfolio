<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glanamae M. Salaya - Portfolio</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- External CSS Link -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <a href="#home" class="logo">Salaya<span>.</span></a>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#works">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="home" class="home">
        <div class="home-img">
            <img src="photo.jpg" alt="Glanamae M. Salaya">
        </div>
        <div class="home-content">
            <h1>Hello, I'm <span>Glanamae!</span></h1>
            <h3>BSIT Student & Programmer</h3>
            <p>I am motivated to learn and increase my expertise on programming to further sharpen my knowledge on any language. Any given opportunity is met with standardized, exceptional timing, complete requirements, clarity, and progress with proper documentation.</p>
            <p><i class="fa-solid fa-location-dot" style="color:var(--purple-glow);"></i> 3157 V. Mapa St. Old Sta. Mesa, Manila</p>
            <a href="#contact" class="btn">Work with me!</a>
        </div>
    </section>

    <section id="skills">
        <h2 class="heading">My <span>Skills</span></h2>
        
        <div class="skills-container">
            <div class="skill-box">
                <i class="fa-solid fa-file-excel"></i>
                <h3>Microsoft Excel</h3>
                <p>Data entry, standard formula applications, and organized tabular record keeping.</p>
                <div class="bar"><span style="width: 80%;"></span></div>
            </div>

            <div class="skill-box">
                <i class="fa-brands fa-html5"></i>
                <h3>Foundational HTML</h3>
                <p>Structuring semantic, structured, and accessible web page layouts.</p>
                <div class="bar"><span style="width: 75%;"></span></div>
            </div>

            <div class="skill-box">
                <i class="fa-brands fa-python"></i>
                <h3>Foundational Python</h3>
                <p>Basic algorithm building, data structures, logic flow, and script execution.</p>
                <div class="bar"><span style="width: 65%;"></span></div>
            </div>

            <div class="skill-box">
                <i class="fa-brands fa-java"></i>
                <h3>Foundational Java</h3>
                <p>Object-oriented programming concepts and GUI building using Swing components.</p>
                <div class="bar"><span style="width: 70%;"></span></div>
            </div>

            <div class="skill-box">
                <i class="fa-solid fa-palette"></i>
                <h3>Graphic Design</h3>
                <p>Creating visual graphics, touch-ups, color grading, and layouts with attention to detail.</p>
                <div class="bar"><span style="width: 85%;"></span></div>
            </div>
        </div>
    </section>

    <section id="education">
        <h2 class="heading">My <span>Education</span></h2>
        
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="year">2024 – Present</span>
                    <h3>Bachelor of Science in Information Technology</h3>
                    <h4>Polytechnic University of the Philippines</h4>
                    <p>Sta. Mesa, Manila, Philippines</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="year">2022 – 2024</span>
                    <h3>Senior High School (STEM)</h3>
                    <h4>Jose Rizal University</h4>
                    <p>Mandaluyong City, Metro Manila — Science, Technology, Engineering, and Mathematics Strand.</p>
                    <ul>
                        <li><strong>Achievement:</strong> 3rd Placer - Poster Making Contest</li>
                        <li><strong>Experience:</strong> Completed 80 hours of Work Immersion Research</li>
                    </ul>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="year">2012 – 2018</span>
                    <h3>Elementary Education (Grade 1 – Grade 6)</h3>
                    <h4>San Juan Elementary School</h4>
                    <p>N. Domingo Street corner A. Luna Street, San Juan City</p>
                </div>
            </div>
        </div>
    </section>

    <section id="works">
        <h2 class="heading">Academic <span>Projects</span></h2>
        
        <div class="works-grid">
            <div class="work-box">
                <h3>Personal Expense Tracker</h3>
                <p>Developed a desktop GUI application using Java and Swing components with custom calculation logic and user input handling.</p>
            </div>

            <div class="work-box">
                <h3>Real-Time Reporting System</h3>
                <p>Designed a web application using HTML, Java, and MySQL featuring dynamic chart updates and backend database operations.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>
        
        <div class="contact-content">
            <div class="contact-item">
                <i class="fa-solid fa-envelope"></i>
                Email: <a href="mailto:glanamaeglanceglan@gmail.com">glanamaeglanceglan@gmail.com</a>
            </div>
            <div class="contact-item">
                <i class="fa-solid fa-phone"></i>
                Phone: <a href="tel:09195815520">09195815520</a>
            </div>
        </div>
    </section>

</body>
</html>