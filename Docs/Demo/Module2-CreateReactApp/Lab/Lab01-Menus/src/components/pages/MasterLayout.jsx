import React from 'react';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';

export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid fixed">
		
            <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" />


            <div id="wrapper">

                <SideMenu/>
    
                <div id="content">
                    {/* */}
                    <DefaultPage />      
                </div>
                  
            </div>        
                    
        </div>

        );
    }


}