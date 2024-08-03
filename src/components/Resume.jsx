import { Link } from 'react-router-dom';

export default function Resume(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return(
        <>  
            <Link onClick={() => openInNewTab("https://drive.google.com/file/d/1Cjc0s21fE5BPNH5c89EueOwkjRMsYLVG/view?usp=sharing")}>
            <h3 className='resumeHeaders' id="dres">
                Download Resume
            </h3></Link>
          
            <br></br>
            <h4 className='resumeHeaders'>
                Full Stack Web Development Software skills: 
            </h4>
            <ul>
                <li>HTML</li>
                <li>Advanced CSS</li>
                <li>JavaScript </li>
                <li>Web API’s,</li>
                <li>Third-Party API’s</li> 
                <li>Server-Side API’s</li> 
                <li>Node.js</li>
                <li>Object-Oriented Programing</li>
                <li>Express.js</li>
                <li>SQL & MySQL</li>
                <li>Object-Relational Mapping</li>
                <li>Model-View-Controller</li>
                <li>NoSQL</li>
                <li>Progressive Web Applications</li>
                <li>React </li>
                <li>MERN</li>
                <li>State</li>
            </ul>
            <h4 className='resumeHeaders'>
                Faculty Member & Instructional Aide -
                Community College of Philadelphia (September 2015 - Present).
            </h4>
            <p>
                Part Time: I Teach introductory photography and video classes. At my current full-time job, I get the opportunity to teach 1 class a semester. Recently I wrote and taught the foundation class of introducing flash to your photography practice on location and in the studio. Other classes include a Fashion & Entertainment class, preparing students for the industry and other introductory classes such as Intro to Digital, Intro to the 
                Darkroom and Intro to Video. 
            </p>
            <p>
                Full Time: I am the Facility and Equipment Manager. Rent out gear to faculty and 
                students.  Maintain repairs, classrooms, studios, chemical and computer labs.  Trouble shoot technical issues as well as order supplies and maintain inventory.  Within the first year in this position, I created inventory database and customized a free digital check out system using Microsoft Access.
            </p>
            <h4 className='resumeHeaders'>
                Photographer & Videographer Freelancer (2014 - Present).
            </h4>
            <p>
                Execute assignments in collaboration with other professionals and media. 
                Editorial clients include Vice, Topic.com, Pop Up Magazine, ESPN, The New Yorker, 
                ProPublica, The Wire UK and The New York Times News, & New York Times Magazine. 
                Occasional commercial experience with Nike, Facebook & Apple.

                Filmmaking clients include MING MEDIA & Hello Sunshine - film by Joe Quint.
            </p>
            <h4 className='resumeHeaders'>
                Personal Assistant (Summer 2019 - 2020).
            </h4>
            <p>
                Over the summer of 2019 I volunteered for Documentary Filmmaker Scott Witham on his personal documentary titled Burden of Memory.  I assisted on shoots carrying and 
                setting up gear for interviews, photographing events, organizing interviewees and 
                communicating with the sound technician.  Also had lenses and necessary gear ready when needed, and occasionally worked second camera.
            </p>
            <h4 className='resumeHeaders'>
                Cambridge Certificate in English Language Teaching to Adults (CELTA)
                International House Riviera Maya, Mexico (July 9th - August 3rd, 2018).
            </h4>
            <p>
                Completed six hours of individual teaching observed and assessed by experience 
                trainers.  Teaching experience included elementary and intermediate level learners.
                Completed a portfolio of candidate booklet; assessed teaching practice lesson plans, lesson materials, handouts given to learners, tutor feedback comments, 
                self-evaluations and assessed written assignments.  
            </p>
            <h4 className='resumeHeaders'>
                Private English Tutor (January - June 2017, October 2018 - 2020).
            </h4>
            <p>
                Maintained weekly one-hour private English lessons on sentence structure, grammar, 
                vocabulary, pronunciation, reading and listening skills.  Learner skill level B2.
                Volunteered 1 hour a week with Elementary level student at Congresso.
            </p>
            <h4 className='resumeHeaders'>
                Digital Service Bureau Assistant Manager
                Maine Media Workshops, Rockport, Maine (May-August, 2008).
            </h4>
            <p>
                Made custom digital prints for students, faculty, and local customers. Prepared student images for daily work prints and a weekly slideshow presentation. Selected and prioritized customer service.
            </p>
            <h4 className='resumeHeaders'>
                Education.
            </h4>

                <li>UPenn LPS in collaboration with edX Boot Camps. Full Stack 
                Web Development, Front & Back End.  September 2023 - March 2024.</li>

                <li>Yale University School of Art, MFA in Photography, May 19th, 2014.</li>

                <li>Rochester Institute of Technology.  BFA in Professional Photographic Illustration, Minor in Applied Imaging Systems, May 2009.</li>

                <li> Magnum Photos Nominee 2020-2022. </li>

            <h4 className='resumeHeaders'>
                REFERENCE.
            </h4>
            <p>
                Kara Crombie - Department Chair 
            </p>
            <p>
                Photographic Imaging
            </p>
            <p>
                Community College of Philadelphia
            </p>
            <p>
                kcrombie@ccp.edu
            </p>
        </>
    )



}