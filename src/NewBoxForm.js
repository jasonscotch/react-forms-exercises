import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="Box Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="Box Height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Box Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )

}


export default NewBoxForm;