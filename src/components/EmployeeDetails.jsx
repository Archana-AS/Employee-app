import React from 'react'
import Nav from './Nav'

const EmployeeDetails = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
            <div className="row">
            <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    </div>   

            <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                <div class="card">
                    <img src="https://www.allbusiness.com/asset/2017/11/employees-in-office.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Employee Details</h5>

                        <a href="#" class="btn btn-primary">apply now</a>
                    </div>
                </div>
                <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                    </div>

        </div>

            </div>
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Employee Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Join Date</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Age</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Social Service Number</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success">Get Details</button>
            </div>
            
        </div>
    </div>
</div>
        </div>
        </div>  

            )
}

            export default EmployeeDetails