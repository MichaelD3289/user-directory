import React, {useState} from 'react'

export default function New({submitNewUser}) {
  const [editForm, setEditForm] = useState({
    id: "",
    name: { first: "", last: "" },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: [
      "",
      "",
      ""
    ]
  })

  function handleTop(e) {
    let {value, name} = e.target;
  
    if (name === "first" || name === "last") {
      setEditForm((prev) => {
        return {
          ...prev,
          name: { ...prev.name,  [name]: value},
        };
      });
    }  else {
      setEditForm((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }

  const handleMovies = ({target: {value, name}}) => {
    setEditForm(prev => {
     const newArray = prev.favoriteMovies[name] = value
      
      return {...prev, 
        favoriteMovies: [...prev.favoriteMovies, newArray].filter((movie, index) => index < 3)
      }
  })
  }

  const {name: {first, last}, city, country, employer, title, favoriteMovies} = editForm
  return (
    <form className='editForm' onSubmit={(e) => submitNewUser(e, editForm)}>
      <input 
      type="text" 
      placeholder="first name" 
      name='first'
      value={first}
      onChange={handleTop} 
      />
      <input 
      type="text" 
      placeholder="last name" 
      name='last'
      value={last}
      onChange={handleTop}  
      />
      <input 
      type="text" 
      placeholder="city" 
      name='city'
      value={city}
      onChange={handleTop}  
      />
       <input 
      type="text" 
      placeholder="country" 
      name='country'
      value={country}
      onChange={handleTop}  
      />
       <input 
      type="text" 
      placeholder="employer" 
      name='employer'
      value={employer}
      onChange={handleTop}  
      />
          <input 
      type="text" 
      placeholder="title" 
      name='title'
      value={title}
      onChange={handleTop}  
      />
      <input 
      type="text" 
      placeholder="First Favorite Movie" 
      name='0'
      value={favoriteMovies[0]}
      onChange={handleMovies}  
      />
      <input 
      type="text" 
      placeholder="First Favorite Movie" 
      name='1'
      value={favoriteMovies[1]}
      onChange={handleMovies}   
      />
      <input 
      type="text" 
      placeholder="First Favorite Movie" 
      name='2'
      value={favoriteMovies[2]}
      onChange={handleMovies} 
      />
      <button>Add New User</button>
    </form>
  )
}