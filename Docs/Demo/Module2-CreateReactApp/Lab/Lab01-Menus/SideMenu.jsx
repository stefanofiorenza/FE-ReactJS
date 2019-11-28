import React from 'react';

export default class SideMenu extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div id="menu" className="hidden-phone">
                <div id="menuInner">
                    <div id="search">
                        <input type="text" placeholder="Quick search ..." />
                        <button className="glyphicons search"><i></i></button>
                    </div>

                    <ul>
                        <li className="heading"><span>E Shop</span></li>
                        <li className="glyphicons search"><a href="finances.html?lang=en"><i></i><span>Search Products</span></a></li>
                    </ul>

                    <ul>
                        <li className="heading"><span>Users</span></li>
                        <li className="glyphicons user_add"><a href="finances.html?lang=en"><i></i><span>Create User</span></a></li>
                        <li className="glyphicons group"><a href="finances.html?lang=en"><i></i><span>Admin Users</span></a></li>		
                    </ul>	

                    <ul>
                        <li className="heading"><span>Admin</span></li>					
                        <li className="glyphicons gift"><a href="finances.html?lang=en"><i></i><span>Create Product</span></a></li>	
                        <li className="glyphicons table"><a href="finances.html?lang=en"><i></i><span>Admin Products</span></a></li>									
                    </ul>
                    
                </div>
        </div>
        );
    }


}