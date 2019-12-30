import React from 'react';
import ReactDOM from 'react-dom';
import BasicRouting from './demo/D01BasicRouting.jsx';
import NestedRouting from './demo/D02NestingRoutes.jsx';
import NestingRoutesWithParams from './demo/D03NestingRoutesWithParams.jsx';
import NestingRoutesInComponents from'./demo/D04NestingRoutesInComponents.jsx';

import { BrowserRouter , HashRouter} from 'react-router-dom';

/* 
	-- see url in browser
	HashRouter 	   -- 	uses the hash portion of the URL (window.location.hash) to remember things. 
						If you intend to support legacy browsers, you should stick with <HashRouter>.	

	BrowserRouter  -- 	uses the HTML5 History API to keep track of your router history.
*/
ReactDOM.render(
	<BrowserRouter>
		<NestedRouting />
	</BrowserRouter>
	, document.getElementById('root'));
