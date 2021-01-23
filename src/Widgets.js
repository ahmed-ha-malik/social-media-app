import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
                
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                </h2>
                <InfoIcon />
            </div>
            {newsArticle("Social Media App is going well", 'Being built with React')}
            {newsArticle("Coronavirus Update", 'Officials show concerns to flatten the curve')}
            {newsArticle(`"It's almost better than the original!"`, 'The public expressed their satisfaction with this ReactJS project')}
            {newsArticle(`"Following a rainfall, the ground is left wet"`, 'Experts share groundbreaking findings!')}
            {newsArticle("New Years, 2021", 'Preparations for the countdown have begun!')}
        </div>
        

    );
}

export default Widgets;
