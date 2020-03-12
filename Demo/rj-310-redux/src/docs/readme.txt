
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


        3.1) Setup:
            InitialState: default state
            reducer: all updates in state managed in one pure function per entity
            store: create store connected with reducer
            actions: constants for all possible events

        
        3.2) Redux in children component (Pages)

            How to trigger events?
            Need dispatcher from store. (store.dispatch)

        
            How to receive notification on state changes and update accordingly?
            subscribe to store events. (store.subscribe(listener))
            
            Solution:
            Need to access store in Pages.
            Pass it as props in children. 
            
        3.3) How to synch Redux state with component's state?

        https://react-redux.js.org/api/connect

         <Provider> wrapper component (provides store to all its children)
         connect HOF (function that connects Component to store through standard functions):
           
        function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?) (MyComponent)

        - connect function call will return a wrapper component
        - wrapperComponent will be called passing myComponent 
        - Though that 2 basic functions implemented by developer will be added to myComponent:

            mapStateToProps?: (state, ownProps?) => Object

                This function will take the whole Redux state and (through selectors) map the relevant data 
                from Redux state to local component props.
            

            mapDispatchToProps(dispatch):

                If not passed (is optional) dispatch method from Redux store will be passed in props.

                If implemented will map localEventHandler to action to dispatch.
    
            Create a HOC that

            1) keeps in local variables (Context) current redux state
            2) use those variables to pass those data to children components as props.
        