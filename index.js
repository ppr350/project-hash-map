console.log('Project Hash Map')

// self limit function
function limitArrayLenght() {
    if (index < 0 || index >= buckets.length) {
        throw new Error('Trying to access index out of bound')
    }
}

