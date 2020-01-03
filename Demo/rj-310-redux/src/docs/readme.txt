
/redux:
Shows redux code in easy demo.
- Code from each demo should replace index.js to run with npm start
- Check console output in browser

/app:
working app sharing data in store between container components.
- Called from App.js (restore index.js)

    //App requirements/steps:

    Crud product implementation
        1.1) Create a new product as 1st element of array
        1.2) Edit 1st element of array
        1.3) Delete 1st element of array
        1.4) Show current list of products

        Problem:
        How can I modify the array for all connected pages? 
        
        Solutions:
        
        1) change props.products in Pages 
            It works but bad practice. Update flow is always from parent to children. 
            Update props in children will not trigger all the state changes from parent to children durying reconciliation.

        2) Send event handlers from parent to children in props.
            Better than (1) but not suitable for real application because:
            2.1) all methods will be implemented in <Root> component.
            2.2) whole state will be mantained in <Root> component.
            2.3) All logic about which component is affected by which state change will be implemented in <Root> component.

        3) Redux.
            A central object Store that offers:
            1) state management (whole shared state in an object tree)
            2) methods to send events (actions) -> dispatch(action)
            3) Actions will (eventually) change the state
            4) Api to subscribe to state change events.

            Api (2) and (4) are used (passed) in pages.
            (3) is implemented in components called Reducers.



    