import React from 'react'
import Navbar from  '../Navbar/Navbar' 
import photo from '../assets/blog1.jpg'
import c1 from '../assets/card1.jpg'
import {  Image,Table} from 'react-bootstrap';
import {VscDebugStart} from 'react-icons/vsc'
import {BiStopCircle} from 'react-icons/bi'
import {AiOutlineCaretDown} from 'react-icons/ai'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="row">   
                <div class="col-6 card  border-0  mt-4  ml-5">
                      <Image class="shadow p-1 md-3 bg-white p-1 rounded mt-3  ml-3  border-1 " src={photo} alt="Card image" style={{height:'250px'}}/> 
                </div>
                <div className='col-1 card  mt-2 ml-2 border-0'>
                    <button type="button" className="btn btn-primary " style={{marginTop:'100%'}}> start<VscDebugStart/> </button>
                    <button type="button" className="btn btn-primary  mt-3"> stop <BiStopCircle/></button>
                </div>
                <div className='col-4 card mt-2 ml-2 border-0'>
                                    <div className=" card mt-5  ml-2 " style={{height:'30%'}}>
                                        <div className="card-body">
                                            <div className="row">
                                            <p>RedLight</p>
                                            <img src={c1} className=" shadow-lg p-1 ml-auto" width={80}/>
                                            <AiOutlineCaretDown/> 
                                            </div>                                      
                                         </div>
                                    </div>
                                    <div className="  card mt-2  ml-2  " style={{height:'30%'}}>
                                        <div className="card-body">
                                        <div className="row">
                                            <p>BusLane</p>
                                            <img src={c1} className=" shadow-lg p-1 ml-auto" width={80}/>
                                            <AiOutlineCaretDown/> 
                                            </div>                  
                                        </div>
                                    </div>
                                    <div className="  card mt-2  ml-2  " style={{height:'30%'}}>
                                        <div className="card-body">
                                        <div className="row">
                                            <p>Cross Violation</p>
                                            <img src={c1} className=" shadow-lg p-1 ml-auto" width={80}/>
                                            <AiOutlineCaretDown/> 
                                            </div>                      
                                        </div>
                                    </div>
                         
                </div>
               
                
            </div>
            
            <div className="row mt-5">
                <div className="col-2">  
                    <input type="text" placeholder="Quick Search" style={{marginLeft:'1250px'}}/>
                </div>
                </div>
            <Table striped bordered hover size="sm" className=" mr-1" style={{marginTop:'5%',marginLeft:'4%'}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td>HEllo</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >Larry the Bird</td>
                    <td>HEllo</td>
                    </tr>
                </tbody>
            </Table>
            </div>
    )
}
