import React from 'react';

export default class TopMenu extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar main">
            <a className="appbrand"><span>{this.props.appAcronym}<span>{this.props.appName}</span></span></a>
                                    
            <ul className="topnav pull-right">           
                <li className="visible-desktop">
                    <a href="" className="glyphicons cogwheel"><i></i>Settings <span className="caret"></span></a>                   
                </li>
                <li className="account">
                    <a data-toggle="dropdown" href="form_demo.html?lang=en" className="glyphicons logout lock">
                        <span className="hidden-phone text">{this.props.userName}</span><i></i>
                    </a>
                    
                    <ul className="pull-right">
                        <li><a href="form_demo.html?lang=en" className="glyphicons cogwheel">Settings<i></i></a></li>
                        <li>
                            <span>
                                <a className="btn btn-default btn-small pull-right" style={ {paddingTop: 2, paddingLeft: 10, backgroundColor: "#fff"}} href="login.html?lang=en">Sign Out</a>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        );
    }


}