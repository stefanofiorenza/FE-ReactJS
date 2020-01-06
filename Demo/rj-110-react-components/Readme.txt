Tutorial: Template into React 

	1) create react app steps:
	
		1.1) create react app requires Node>8.1 and npm> 5.6
			
		1.2) install npx 
			> sudo npm install -g npx
			
		1.3) npx create-react-app <my-app>   
			> npx create-react-app rj-110-admin-plus-ui
			
	2) Inspect Files:
		
		/public/index.html
		/src/App.js
		/src/index.js
	 
	3) (Step1): Small Changeset
	
		3.1) Change App.js to 
			display a random message using style (.default-text)
			add a button
	
	4) (Step2): Create buttons with different Component style (function, class, component(index.jsx and .css) 
		
		Create a new Component file "Button" and import in App.js
			
			different ways to create component
			different ways to style a component
			
			import component and its style
			dir/index files
			
	5) (Step3): Create Pages
		
		ButtonPage
		MessagePage
		
		activate/deactivate in App.js with comments
		
		Container and Login	
		
	6) (Step4:) Reusable Components (Widget, Panel, Page)
		
		Starter html:
		All in one page (LoginPage, RegistrationPage)			
		Changes:
			class -> className
			in line style -> (see examples)
			remove html comments -> Jsx comments
			html -> xml (close tags)
		
		Containers (FormPanel)
				
		Usata in:
		1) login
		2) registration
		(children props)