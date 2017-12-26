import React from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router-dom';

const generateBlocks=({blocks})=>{
    if(blocks){
        return blocks.map((item)=>{
            return(
                <Reveal key={item.id} effect="animated fadeInUp">
                    text
                </Reveal>
            )
        })
    }
}

const Blocks=(props)=>{
    return(
        <div className="home_blocks">
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;