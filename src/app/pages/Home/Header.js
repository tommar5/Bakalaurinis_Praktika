import React from 'react'

import { Image } from 'react-bootstrap'

import landscape from '../../images/landscape.jpg'

const Header = () => (
    <div>
        <Image src={landscape} fluid className="header-image"/>
    </div>
)

export default Header;