import React , {Component} from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import './card.css';


class card extends Component{
    render() {
        return(
            <div className="body">
            <div className="ui stackable four column grid">
              <div className="row">
                <div className="column">
                        <CardGroup className="uppercard1">
                              <Card>
                              <i class="fas fa-user-plus fa-3x" style={{color:"white", paddingLeft: 15 }}></i><p className="para">11
                              <i className="fas fa-caret-up fa-2x text-right" style={{color:"white",float:"right",fontSize:22, paddingTop:9,paddingRight:4}}></i></p>
                                 <h2 style={{color:"white", paddingLeft:10}}>Active Client</h2>
                              </Card>
                        </CardGroup>
                </div>
                
                 <div className="column">
                        <CardGroup className="uppercard2">
                              <Card>
                              <i class="fas fa-user-secret fa-3x" style={{color:"white", paddingLeft: 15 }}></i><p className="para1">4
                              <i className="fas fa-caret-up fa-2x text-right" style={{color:"white",float:"right",fontSize:22, paddingTop:9}}></i></p>
                                 <h2 style={{color:"white", paddingLeft:10}}>Active Admin</h2>
                              </Card>
                        </CardGroup>
                </div>
                
                <div className="column">
                        <CardGroup className="uppercard3">
                              <Card>
                              <i class="far fa-money-bill-alt fa-3x" style={{color:"white", paddingLeft: 15 }}></i><p className="para2">$965
                              <i className="fas fa-caret-up fa-2x text-right" style={{color:"white",float:"right",fontSize:22, paddingTop:9}}></i></p>
                                 <h2 style={{color:"white", paddingLeft:10}}>Total Expenses</h2>
                              </Card>
                        </CardGroup>
                </div>
                
                 <div className="column">
                        <CardGroup className="uppercard4">
                              <Card>
                              <i class="far fa-copy fa-3x" style={{color:"white", paddingLeft: 15 }}></i><p className="para3">11
                              <i className="fas fa-caret-up fa-2x text-right" style={{color:"white",float:"right",fontSize:22, paddingTop:9,paddingRight:3}}></i></p>
                                 <h2 style={{color:"white", paddingLeft:10}}>Running Projects</h2>
                              </Card>
                        </CardGroup>
                </div>
                </div>
            </div>
            
            <div className="ui stackable two column grid">
                  <div className="row">
                   <div className="column">
                        <CardGroup className="lowercard1">
                              <Card>
                              <h3 className="ui block header">Upcoming Events
                              
                              
                              <i className="right icon expand arrows alternate" style={{float:"right", color: "#8E908F"}}></i>
                              <i className="minus icon" style={{float:"right", color: "#8E908F"}}></i>
                              <i className="ui right floated arrows alternate icon" style={{float:"right", color: "#8E908F"}}></i>
                              </h3>
                              
                              
                                <div className="ui list">
                                    <div className="item" style={{marginTop: 20, marginLeft:10, marginRight:20}}>
                                    <button className="ui right floated teal button">skype</button>
                                            <div className="content"><i class="far fa-calendar fa-2x" style={{ color: "teal",display:"inline-block",paddingLeft:10}}></i>
                                            <div style={{display:"inline-block", paddingLeft:20,fontWeight: "bold",fontSize:20}}>Marketing Policy</div>
                                            <div style={{paddingLeft: 53, paddingBottom: 5, paddingTop: 4, fontSize:18}}>Kolkata, India</div>
                                            <div className="ui divider" style={{width: 580, marginLeft:20}}></div>
                                            </div>
                                    </div>
                                    
                                    
                                    <div className="item" style={{marginLeft:10, marginRight:20}}>
                                    <button className="ui right floated teal button">skype</button>
                                            
                                            <div className="content"><i class="far fa-calendar fa-2x" style={{ color: "teal",display:"inline-block",paddingLeft:10,marginTop:10}}></i>
                                            <div style={{display:"inline-block", paddingLeft:20,fontWeight: "bold",fontSize:20}}>Accounting Policy</div>
                                            <div style={{paddingLeft: 53, paddingBottom: 5, paddingTop: 4, fontSize:18}}>Kolkata, India</div>
                                            <div className="ui divider" style={{width: 580, marginLeft:20}}></div>
                                            </div>
                                    </div>
                                    
                                    
                                    <div className="item" style={{marginLeft:10, marginRight:20}}>
                                    <button className="ui right floated teal button">phone</button>
                                            
                                            <div className="content"><i class="far fa-calendar fa-2x" style={{ color: "black",display:"inline-block",paddingLeft:10,marginTop:10}}></i>
                                            <div style={{display:"inline-block", paddingLeft:20,fontWeight: "bold",fontSize:20}}>Marketing Policy</div>
                                            <div style={{paddingLeft: 53, paddingBottom: 5, paddingTop: 4, fontSize:18}}>Madrid,Spain</div>
                                            <div className="ui divider" style={{width: 580, marginLeft:20}}></div>
                                            </div>
                                    </div>
                                    
                                    
                                    <div className="item" style={{marginLeft:10, marginRight:20}}>
                                    <button className="ui right floated teal button">Mobile</button>
                                            
                                            <div className="content"><i class="far fa-calendar fa-2x" style={{ color: "black",display:"inline-block",paddingLeft:10,marginTop:10}}></i>
                                            <div style={{display:"inline-block", paddingLeft:20,fontWeight: "bold",fontSize:20}}>Finance Policy</div>
                                            <div style={{paddingLeft: 53, paddingBottom: 5, paddingTop: 4, fontSize:18}}>South Australia - Australia</div>
                                            <div className="ui divider" style={{width: 580, marginLeft:20}}></div>
                                            </div>
                                    </div>
                                    
                                    
                                </div>
                                
                                
                              </Card>
                        </CardGroup>
                   </div>
                   
                   <div className="column">
                        <CardGroup className="lowercard2">
                              <Card bg="light">
                              <h3 className="ui block header">Running Project
                              <i className="right icon expand arrows alternate" style={{float:"right", color: "#8E908F"}}></i>
                              <i className="minus icon" style={{float:"right", color: "#8E908F"}}></i>
                              <i className="ui right floated arrows alternate icon" style={{float:"right", color: "#8E908F"}}></i>
                              </h3>
                              <Card.Body>
                              
                              
                              <div className="ui list">
                                    <div className="item" style={{marginLeft:10,marginRight:10}}>
                                    <button className="ui right floated red button">Failed</button>
                                           <div className="content">
                                           <div className="header" style={{paddingLeft: 10, fontSize: 18}}><i className="far fa-dot-circle" style={{color: "teal",paddingRight:18}}></i>
                                           Database Configuration</div>
                                            </div>
                                            <div style={{marginLeft:45, paddingTop:25,width: 550}}>
                                            <div className="ui tiny progress success">
                                            <div className="bar" style={{width:`30%`}}>
                                                 <div className="progress"></div>
                                            </div>
                                            </div></div>
                                    </div>
                                    
                                    <div className="item" style={{marginLeft:10,marginRight:10}}>
                                    <button className="ui right floated yellow button">progressing</button>
                                            <div className="content">
                                            <div className="header" style={{paddingLeft: 10, fontSize: 18}}><i className="far fa-dot-circle" style={{color: "teal",paddingRight:18}}></i>
                                            Design Tool</div>
                                            
                                            </div>
                                            <div style={{marginLeft:45, paddingTop:25,width: 550}}>
                                            <div className="ui tiny progress success">
                                            <div className="bar" style={{width:`20%`}}>
                                                 <div className="progress"></div>
                                            </div>
                                            </div></div>
                                    </div>
                                    
                                    <div className="item" style={{marginLeft:10,marginRight:10}}>
                                    <button className="ui right floated green button">progressing</button>
                                            <div className="content">
                                            <div className="header" style={{paddingLeft: 10, fontSize: 18}}><i className="far fa-dot-circle" style={{color: "teal",paddingRight:18}}></i>
                                            Internet Configuration</div>
                                            </div>
                                            <div style={{marginLeft:45, paddingTop:25,width: 550}}>
                                            <div className="ui tiny progress success">
                                            <div className="bar" style={{width:`45%`}}>
                                                 <div className="progress"></div>
                                            </div>
                                            </div></div>
                                    </div>
                                    
                                    <div className="item" style={{marginLeft:10,marginRight:10}}>
                                    <button className="ui right floated blue button">progressing</button>
                                            
                                            <div className="content">
                                            
                                            <div className="header" style={{paddingLeft: 10, fontSize: 18}}><i className="far fa-dot-circle" style={{color: "teal",paddingRight:18}}></i>
                                            Banner Completation</div>
                                            </div>
                                            <div style={{marginLeft:45, paddingTop:25,width: 550}}>
                                            <div className="ui tiny progress success">
                                            <div className="bar" style={{width:`75%`}}>
                                                 <div className="progress"></div>
                                            </div>
                                            </div></div>
                                    </div>
                                    
                                    <div className="item" style={{marginLeft:10,marginRight:10, paddingBottom: 29}}>
                                    <div  >
                                    <button className="ui right floated green button">Success</button></div>
                                            <div className="content">
                                            <div className="header" style={{paddingLeft: 10, fontSize: 18}}><i className="far fa-dot-circle" style={{color: "teal",paddingRight:18}}></i>
                                            IT Solution</div>
                                            
                                            </div>
                                            <div style={{marginLeft:45, paddingTop:25,width: 550}}>
                                            <div className="ui tiny progress success" >
                                            <div className="bar" style={{width:`50%`}} >
                                                 <div className="progress"></div>
                                            </div>
                                            </div></div>
                                    </div>
                                    
                                </div>
                                
                                </Card.Body>
                              </Card>
                        </CardGroup>
                   </div>
                  </div>
            </div>
            
            </div>
            );
    }
}

export default card;