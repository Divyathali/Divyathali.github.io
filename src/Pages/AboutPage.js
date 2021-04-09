import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />                
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Typescript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'ML/AI'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Embedded C'} progress={'80%'} width={'80%'} />                
                <SkillsSection skill={'C'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C++'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'verilog'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'80%'} width={'80%'} />
            </div>
            <Tittle title={'Certification'} span={'certification'} /><br/>
            <div className='tech-slideshow'>
                <div className="mover-1">            
                </div>
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'we use critical planning and analysis for the design and they pay attention to individual client specifications, converting the intricate process into a simple and elegant piece of art.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'AI designers to develop the design that can meet ever-evolving workplace demands. And when nurturing any relationship, let’s learn what our partner can and can’t offer.'}
                />
                <ServicesSection image={gamedev} title={'Embedded Development'} 
                text={'Our stringent process and hands-on experience help avoid errors, reduces design costs, and ensures faster time to market.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
