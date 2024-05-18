import {  useFormik } from 'formik'
import React from 'react'

const validate = (values) =>{
    const errors = {};
    if(!values.firstName){
        errors.firstName = "Enter Your First Name";
    }
    else if(values.firstName.length > 10){
        errors.firstName = "Maximum 10 Charactors Only";
    }
    // if(!values.lastName){
    //     errors.lastName = "Enter Your Last Name";
    // }
    // else if(values.lastName.length > 10){
    //     errors.lastName = "Maximum 10 Charactors Only";
    // }
    if(!values.email){
      errors.email = "Enter Your Email";
  }
  else if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
      errors.email = "Invalid Mail";
  }
  if(!values.ph){
    errors.ph = "Enter Your Phone Number";
}
else if(values.ph.length > 10){
    errors.ph = "10 Charactors Only";
}
//     if(!values.password){
//       errors.password= "Enter Your Password";
//   }
//   else if(values.password.length > 10){
//       errors.password = "Maximum 10 Charactors Only";
//   }
//   if(!values.cpassword){
//     errors.cpassword = "Enter Your Conform Password";
// }
// else if(values.password !== values.cpassword){
//     errors.cpassword= "Not Matched Your Password";
// }

return errors ;

}


export default function LoginForm() {

  const farmik = useFormik({
    initialValues : {
    firstName:"",
    // lastName:"",
    ph:"",
    email:"",
    // password:"",
    // cpassword:"",
    },
    validate,
    onSubmit : values =>{
      alert("Successfull"+values.firstName)
    }
},
    
  )
console.log(farmik.values)
console.log(farmik.errors)
  return (
    <>
      <div className="col-md-4  mx-auto">
        <div className="card">
          <div className="card-body">
            <form action="" onSubmit={farmik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name :
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  autoComplete="off"
                  onChange={farmik.handleChange}
                  value={farmik.values.firstName}
                  onBlur={farmik.handleBlur}
                />
                {farmik.touched.firstName && farmik.errors.firstName ? (
                  <p className="form-text text-danger" style={{ margin: "0" }}>
                    {farmik.errors.firstName}
                  </p>
                ) : null}
                {/* <label htmlFor="lastName" className='form-label' style={{margin:"5px 0px"}}>Last Name :</label>
                <input 
                type="text" 
                name='lastName' 
                className="form-control"
                 id="lastName" 
                 placeholder='Enter Your Last Name'
                 autoComplete='off'
                 onChange={farmik.handleChange}
                 value={farmik.values.lastName}
                 onBlur={farmik.handleBlur}
                 />
                 {
farmik.touched.lastName && farmik.errors.lastName ?
 <p className='form-text text-danger' style={{margin:"0"}}>{farmik.errors.lastName}</p>:
 null
                    } */}
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ margin: "5px 0px" }}
                >
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  onChange={farmik.handleChange}
                  value={farmik.values.email}
                  onBlur={farmik.handleBlur}
                />

                {farmik.touched.email && farmik.errors.email ? (
                  <p className="form-text text-danger" style={{ margin: "0" }}>
                    {farmik.errors.email}
                  </p>
                ) : null}
                <label
                  htmlFor="ph"
                  className="form-label"
                  style={{ margin: "5px 0px" }}
                >
                  Phone Number :
                </label>
                <input
                  type="tel"
                  name="ph"
                  className="form-control"
                  id="ph"
                  placeholder="Enter Your Phone Number"
                  autoComplete="off"
                  onChange={farmik.handleChange}
                  value={farmik.values.ph}
                  onBlur={farmik.handleBlur}
                />

                {farmik.touched.ph && farmik.errors.ph ? (
                  <p className="form-text text-danger" style={{ margin: "0" }}>
                    {farmik.errors.ph}
                  </p>
                ) : null}
                {/* <label htmlFor="password" className='form-label' style={{margin:"5px 0px"}}>Password :</label>
                <input 
                type="password"
                 name='password' 
                 className="form-control"
                  id="password"
                  placeholder='Enter Your Password'
                  autoComplete='off'
                  onChange={farmik.handleChange} 
                  value={farmik.values.password}
                  onBlur={farmik.handleBlur}
                  />
                  {
farmik.touched.password && farmik.errors.password ?
 <p className='form-text text-danger' style={{margin:"0"}}>{farmik.errors.password}</p>:
 null
                    }
                <label htmlFor="cpassword" className='form-label'>Conform Password :</label>
                <input 
                type="password" 
                name='cpassword' 
                className="form-control"
                 id="cpassword" 
                 placeholder='Enter Your Conform Password'
                 autoComplete='off'
                 onChange={farmik.handleChange}
                 value={farmik.values.cpassword}
                 onBlur={farmik.handleBlur}
                 />
                 {
farmik.touched.cpassword && farmik.errors.cpassword ?
 <p className='form-text text-danger' style={{margin:"0"}}>{farmik.errors.cpassword}</p>:
 null
                    } */}

                <label
                  htmlFor="wapp"
                  className="form-label"
                  style={{ margin: "5px 0px" }}
                >
                  WhatsApp Number :
                </label>
                <input
                  type="tel"
                  name="wapp"
                  className="form-control"
                  id="wapp"
                  placeholder="Enter Your Phone Number"
                  autoComplete="off"
                  onChange={farmik.handleChange}
                  // value={farmik.values.ph}
                  onBlur={farmik.handleBlur}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
