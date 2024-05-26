console.log('Project Hash Map')

// self limit function
function limitArrayLenght() {
    if (index < 0 || index >= buckets.length) {
        throw new Error('Trying to access index out of bound')
    }
}

class HashMap {
    constructor() {
        this.buckets = new Array(10)
    }

    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            // 31 x hashCode + key.charCodeAt(i)
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode % this.buckets.length
    }

    // takes 2 arguments, the 1st is a key and the 2nd is a value that is assigned to this key
    set(key, value) {
        // if a key already exists, then the old value is overwritten or say that we update the key's value
        const index = this.hash(key)
        // console.log(index)
        if (this.buckets[index] !== undefined) {
            console.log('key\'s value has been updated')
            this.buckets[index] = {key, value}
        } else {
            console.log('new key\'s value added')
            this.buckets[index] = {key, value}
            console.log(index, this.buckets[index])
        }
        // console.log(this.buckets[index])
    }

    // takes 1 argumnent as a key and returns the value that is assigned to this key
    get(key) {
        const index = this.hash(key)
        // if the key is not found, return null
        if (this.has(key)) {
            console.log(`this key's value is ${this.buckets[index].value}.`)
            return this.buckets[index].value
        }
    }

    // takes a key as an argument and returns true or false based on wether or not the key is in the hash map
    has(key) {
        const index = this.hash(key)
        if (this.buckets[index] !== undefined && key === this.buckets[index].key) {
            console.log('has key = true')
            return true
        }
    }

    // takes a key as an argument, if the key is in the hash map, it should remove the entry with that key and return true, otherwise, return false
    remove(key) {
        const index = this.hash(key)
        if (this.has(key)) {
            this.buckets.splice(index, 1)
        }
    }

    // returns the number of stored keys in the hash map
    length() {
        let count = 0
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                count++
            }
        }
        console.log(`There are ${count} in the buckets`)
        return count
    }

    // removes all entries in the hash map
    clear() {
        
    }

    // return an array containing all the keys inside the hash map
    keys() {
        let keyArr = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                keyArr.push(this.buckets[i].key)
            }
        }
        console.log(keyArr)
    }

    // returns an array containing all the values
    values() {
        let valueArr = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                valueArr.push(this.buckets[i].value)
            }
        }
        console.log(valueArr)
    }

    // returns an array that contains each key, value pair, for example: [[firstKey: firstValue], [secondKey: secondValue]]
    entries() {
        let allEntries = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                
                allEntries.push(`[first name: ${this.buckets[i].key}, last name: ${this.buckets[i].value}]`)
            }
        }
        console.log(allEntries)
    }
}

// extra credit: create a HashSet class that behaves the same as a HashMap but only contains keys with no values
class HashSet {
    constructor() {

    }
}

// tests:
const newMap = new HashMap() // returns "[<5 empty items>]"
// console.log(newMap.hash('Eabha'))

newMap.set('Caoimhe', 'Buckley')
// newMap.set('Caoimhe', 'Buckley')

newMap.get('Caoimhe')
// newMap.has(5)
// console.log(newMap.buckets)
newMap.set('Saoirse', 'Ronan')
newMap.length()

// newMap.keys()
// newMap.values()
// newMap.remove(6)

newMap.entries()