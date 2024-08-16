import React from 'react'
import "./WorkExp.css"
import HeaderLine from '../../components/HeaderLine/HeaderLine'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SiReact } from 'react-icons/si'
import { useTheme } from '../../context/ThemeContext';

const WorkExp = () => {
  const [theme] = useTheme();
  const isDarkTheme = theme === 'dark'

  return (
    <div className='work-experience' id='work'>
      <div className='container'>
        <HeaderLine title="Work Expserience" />

        <VerticalTimeline lineColor='#1e1e2c'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2011 - present"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2011 - present"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2011 - present"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default WorkExp
