import React from 'react'

const Content = ({items, setUrl}) => {

    const API_URL_USERS = "https://jsonplaceholder.typicode.com/users"
    const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts"
    const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments"

  return (
    <div>
        <button onClick={() =>setUrl(API_URL_USERS)}>This is button 1</button>
        <button onClick={() =>setUrl(API_URL_POSTS)}>This is button 2</button>
        <button onClick={() =>setUrl(API_URL_COMMENTS)}>This is button 3</button>

    <>
            {items.length ? (
                <ul>
                {items.map((item) => (
                  <li key={item.id}>{JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty </p>
            )}
        </>
        </div>
  )
}

export default Content