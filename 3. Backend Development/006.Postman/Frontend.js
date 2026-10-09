// Post
const response = await fetch('http://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})

// Get
const response1 = await fetch('http://api.example.com/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})

//Patch
const response2 = await fetch('http://api.example.com/data/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    }
})