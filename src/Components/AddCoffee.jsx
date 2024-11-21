import React from 'react';

const AddCoffee = () => {
    return (
        <div>
           <form>
          <div className='grid grid-cols-2 gap-8' >
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <input type="text" placeholder="Enter coffee category" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Chief</span>
          </label>
          <input type="text" placeholder="Enter coffee chief" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" placeholder="supllier" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Enter coffee details" className="input input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">teste</span>
          </label>
          <input type="text" placeholder="Enter coffee taste" className="input input-bordered" required />
        </div>
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="photo" placeholder="Enter photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="text" value="Add coffee" className="input input-bordered text-center bg-[#D2B48C]" required />
        </div>
          

           </form>
        </div>
    );
};

export default AddCoffee;