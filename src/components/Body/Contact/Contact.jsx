import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide'
import { icons } from './constants'
const PaperAndTape = require('../../../assets/paperandtape.png')

export function Icon({ icon, link, text, color, positionTop }) {
    const [hover, setHover] = useState(false)
    const border = `5px solid ${color}`

    const linkStyle = {
        ...iconStyle,
        transform: hover ? 'scale(1.2)' : ''
    }

    return (
        
        <a
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={href}
            target='_blank'
            rel='noopener noreferrer'
            href={link}
        >
            <div style={{...iconContainer, }}>
                <img style={linkStyle} src={icon}/>
                <div style={textStyle}>{text}</div>
            </div>
        </a>
    )
}

export default function Contact() {
  return (

    <div style={container}>
        <Slide in={true}>
            <div style={child}>
            {Object.values(icons).map((icon) => {
                return <Icon {...icon} />
            })}
            </div>
        </Slide>
    </div>
  );
}


const child = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40
}
const container = {
    ...child,
    background: `no-repeat center url(${PaperAndTape})`,
    margin: 0

}

const iconContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10%',
    height: 80,
    width: 80,
}

const textStyle = {
    textDecoration: 'none',
    marginTop: -10,
    marginBottom: 10
}

const iconStyle = {
    height: 40,
    width: 40,
    margin: 10,
    transition: 'all ease .3s',
}

const href = {
    color: 'black',
    textDecoration: 'none'
}