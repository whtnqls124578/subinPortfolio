import React from 'react';
import EducationBox from '../components/education/EducationBox';
import '../css/Education.css';

const Education: React.FC = () => {


  return (
    <main className='education'>
      <div className='education_div-container'>
        <div className='education_div-top'>
          <div className='education_div-title'>
            <span>Education</span>
          </div>
        </div>
        <div className='education_div-bottom'>
          <EducationBox title={"스파르타코딩클럽 항해99 x 동북권ICT이노베이션스퀘어 교육"} term={"2022.06 ~ 2022.09"}/>
          <EducationBox title={"코리아IT학원 프론트엔드 기초 교육"} term={"2021.11 ~ 2022.05"}/>
          <EducationBox title={"영진전문대 시각디자인과"} term={"2015.03 ~ 2017.02"}/>
        </div>
      </div>
      
    </main>
  )
}

export default Education;
