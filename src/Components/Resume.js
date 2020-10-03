import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var resumeDownload = this.props.data.resumedownload;

      var work = this.props.data.work.map(function(work,index){
       
        return <div key={`${work.company}-${index}`}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {work.projects && work.projects.map(projectInformation=>{
             return <div key={projectInformation.name}>
              <a href={projectInformation.link} target="_blank">{projectInformation.name}</a>
              <p>{projectInformation.description}</p>
              </div>
            })}
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>

              <div className="row download">
            <p>
              <a href={resumeDownload} className="button" target="_blanck"><i className="fa fa-download"></i>Resume</a>
            </p>
        </div>
   </section>
    );
  }
}

export default Resume;
