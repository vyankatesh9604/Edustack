import React,{useState} from 'react'
import Navbar from  '../Navbar/Navbar' 
import DatePicker from 'react-date-picker';
import {BiReset} from 'react-icons/bi'
import {Table} from 'react-bootstrap'

export default function Search() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Navbar/>
            <div className="row">
                <div  className="col" style={{marginTop:'3%',marginLeft:'10%'}}>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                        dayPlaceholder="Date From"></DatePicker>
                        <p>Date From</p>
                </div>
                <div  className="col-md " style={{marginTop:'3%',}}>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                        dayPlaceholder="Date To"></DatePicker>
                </div>
                <div  className="col-md-4" style={{marginTop:'3%'}}>
                    <input type="text" placeholder="Search" />
                </div>
                <div  className="col-md-3" style={{marginTop:'3%'}}>
                        <BiReset style={{fontSize:'30px'}}/>
                </div>
            </div>
            <Table striped bordered hover size='lg' style={{marginTop:'5%'}}>
                    <thead>
                        <tr>
                        <th>sr</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>Otto</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td >Larry the Bird</td>
                        <td>Otto</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>9</td>
                        <td >Larry the Bird</td>
                        <td>Otto</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
      
        </div>
    )
}
