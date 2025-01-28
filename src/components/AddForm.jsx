import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddForm() {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        title:'',
        director:'',
        genre:'',
        releaseYear:'',
        synopsis:'',
        posterUrl:'' 
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        navigate('/')
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
        
    }
  return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Add a New Movie</h1>
          <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                  Title:
                  <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                  Director:
                  <input
                      type="text"
                      name="director"
                      value={formData.director}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                  Genre:
                  <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                  >
                      <option value="">Select Genre</option>
                      <option value="Action">Action</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Drama">Drama</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Horror">Horror</option>
                  </select>
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                  Release Year:
                  <input
                      type="number"
                      name="releaseYear"
                      value={formData.releaseYear}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                  Synopsis:
                  <textarea
                      name="synopsis"
                      value={formData.synopsis}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
                  />
              </label>
              <label style={{ display: 'block', marginBottom: '20px' }}>
                  Poster Image URL:
                  <input
                      type="url"
                      name="posterUrl"
                      value={formData.posterUrl}
                      onChange={handleChange}
                      required
                      style={{ display: 'block', width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
              </label>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                      type="submit"
                      style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                      Submit
                  </button>
                  <button
                      type="button"
                      onClick={() => navigate('/')}
                      style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                      Cancel
                  </button>
              </div>
          </form>
      </div>
  )
}

export default AddForm