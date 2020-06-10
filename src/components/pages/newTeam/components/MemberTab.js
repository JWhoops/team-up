import React from 'react';
import "./MemberTab.css"

function MemberTab(props) {
    return (
        <div className="membertab">{props.name}</div>
    )
}

export default MemberTab;