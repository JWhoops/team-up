import React from 'react';
import "./JobTab.css"

function JobTab(props) {
    return (
        <div className="jobtab">{props.job}</div>
    )
}

export default JobTab;