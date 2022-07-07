import React from 'react';

const Form = ({ handleChange, data, handleSubmit }) => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    required
                />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                />
                <input
                    placeholder="Telephone"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                    required    
                />
                <button className='btn'>Place order</button>
            </form>
        </div>
    );
};

export default Form;