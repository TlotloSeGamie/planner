import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import herobg from '../backgrounds/herobg.mp4'


const Hero = () => {
    const [formData, setFormData] = useState({
        location: '',
        startDate: '',
        endDate: '',
        budget: '',
        features: '',
        people: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Planner Data Submitted:", formData);
    };

    return (
        <div className='hero-main-container'>
            <Navbar />
            <video src={herobg} autoPlay loop muted />
                <div className='content'>
                    <h2>Plan Your Trip Here</h2>
                    <form className='planner-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='location'>Location:</label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                placeholder='Enter destination'
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='startDate'>Start Date:</label>
                            <input
                                type='date'
                                id='startDate'
                                name='startDate'
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='endDate'>End Date:</label>
                            <input
                                type='date'
                                id='endDate'
                                name='endDate'
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='budget'>Budget:</label>
                            <input
                                type='number'
                                id='budget'
                                name='budget'
                                placeholder='Enter your budget'
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='features'>Features:</label>
                            <select
                                id='features'
                                name='features'
                                value={formData.features}
                                onChange={handleChange}
                                required
                            >
                                <option value='' disabled>
                                    Select features
                                </option>
                                <option value='adventure'>Adventure</option>
                                <option value='relaxation'>Relaxation</option>
                                <option value='sightseeing'>Sightseeing</option>
                                <option value='cultural'>Cultural</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='people'>Number of People:</label>
                            <input
                                type='number'
                                id='people'
                                name='people'
                                min='1'
                                value={formData.people}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='search-btn'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Hero;
