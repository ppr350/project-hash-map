console.log('Project Hash Map: HashSet')

// self limit function
// Didn't use this self-limit function because I declare array with size
function limitArrayLenght() {
    if (index < 0 || index >= buckets.length) {
        throw new Error('Trying to access index out of bound')
    }
}

function HashSet(key) {
    return {
        key,
        buckets: new Array(10),

        // takes key as the argument
        set(key) {
            //// if a key already exists, then the old value is overwritten or say that we update the key's value
            const index = this.hash(key)
            if (this.buckets[index] !== undefined) {
                console.log('key has been updated')
                this.buckets[index] = {key}
                console.log(index, this.buckets[index])
            } else {
                console.log('new key added')
                this.buckets[index] = {key}
                console.log(index, this.buckets[index])
            }
        },

        hash(key) {
            let hashCode = 0

            const primeNumber = 31
            for (let i = 0; i < key.length; i++) {
                // 31 x hashCode + key.charCodeAt(i)
                hashCode = primeNumber * hashCode + key.charCodeAt(i)
            }
            return hashCode % this.buckets.length
        },
    
        // takes a key as an argument and returns true or false based on wether or not the key is in the hash set
        has(key) {
            const index = this.hash(key)
            if (this.buckets[index] !== undefined && key === this.buckets[index].key) {
                return true
            } else {
                return false
            }
        },

        // takes a key as an argument, if the key is in the hash map, it should remove the entry with that key and return true, otherwise, return false
        remove(key) {
            const index = this.has(key)
            if (this.has(key)) {
                this.buckets.splice(index, 1)
                return true
            } else {
                return false
            }
        },

        // returns the number of stored keys in the hash set
        length() {
            let count = 0
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i] !== undefined) {
                    count++
                }
            }
            console.log(`There are ${count} in the buckets`)
            return count
        },

        // removes all entries in the hash set
        clear() {
            console.log('Clearing all entries:')
            while (this.buckets.length > 0) {
                this.buckets.pop()
            }
        },

        keys() {
            console.log('Display all keys')
            let keyArr = []
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i] !== undefined) {
                    keyArr.push(this.buckets[i].key)
                }
            }
            console.log(keyArr)
        },

        // returns an array that contains each key, value pair, for example: [[firstKey: firstValue], [secondKey: secondValue]]
        entries() {
            console.log('Display all entries')
            let allEntries = []
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i] !== undefined) {
                    allEntries.push(`[first name: ${this.buckets[i].key}]`)
                }  
            }
            console.log(allEntries)
        }
    }
}

// HashSet tests:
const newHashSet = HashSet();

newHashSet.set('John')
newHashSet.has('John')
newHashSet.set('Kobe')
newHashSet.set('Izzy')
newHashSet.length()
newHashSet.remove('John')
newHashSet.keys()
newHashSet.entries()
newHashSet.clear()
newHashSet.entries()
