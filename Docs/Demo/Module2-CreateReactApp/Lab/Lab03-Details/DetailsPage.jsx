import React from 'react';

export default class DetailsPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
        
        <div class="innerLR">
                <div class="row-fluid">                 

                    <div class="span12" >

                            <div class="widget-head">
                                <div class="heading-buttons">
                                    <h3 class="glyphicons cart_in"><i></i> Add product</h3>					
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <hr class="separator bottom" />

                            <div class="widget-body" style={{padding: 10}} >  

                                <div class="tab-pane active" id="productDescriptionTab">

                                    <div class="row-fluid">

                                        <div class="span3">
                                            <strong>Product</strong>
                                            <p class="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>

                                        <div class="span9">
                                            <label for="inputTitle">Name</label>
                                            <input type="text" id="inputTitle" class="span6" value="" placeholder="Enter Name ..." />
                                            <div class="separator"></div>
                                            
                                            <label for="inputTitle">Brand</label>
                                            <input type="text" id="inputTitle" class="span6" value="" placeholder="Enter Brand ..." />
                                            <div class="separator"></div>
                                            
                                            <label for="inputTitle">Price</label>
                                            <input type="text" id="inputTitle" class="span6" value="" placeholder="Enter Price  ..." />
                                            <div class="separator"></div>
                                            
                                            <label for="inputTitle">Quantity</label>
                                            <input type="text" id="inputTitle" class="span6" value="" placeholder="Enter quantity..." />
                                            <div class="separator"></div>
                                            
                                            <label for="inputTitle">OtherField</label>
                                            <input type="text" id="inputTitle" class="span6" value="" placeholder="Enter value ..." />
                                            <div class="separator"></div>
                                        </div>

                                        <hr class="separator bottom" />
                                        <br/>
                                        <br/>

                                        <div class="buttons pull-right">
                                            <a href="" class="btn btn-default btn-icon glyphicons share"><i></i> Preview</a>
                                            <a href="" class="btn btn-primary btn-icon glyphicons ok_2"><i></i> Save</a>
                                        </div>

                                    </div>								
                                </div>	 {/* widget body */}					
                            </div>
                        </div>  {/* end of span12*/}
        
                  
                </div>{/* row-fluid */}
        </div>        
        );
    }


}