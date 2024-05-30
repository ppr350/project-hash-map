# project-hash-map

## This project is a part of Advanced JavaScript course by The Odin Project.
Writing a hash map from scratch using JavaScript in my opinion is a very good way to learn how data structures work internally. 

### Hash code
Hashing a value means taking an input in and generating a corresponding output.

### Hash Map
In this project, I created a “hash” function that takes a key as an input, do calculation in order to return an index that is not bigger than the buckets size. This function acts as a decision maker for choosing which position the key value pair would be put inside the hash map.

When the “set” method is called, it first call the “hash” method using its “key” argument and gets back an index. This index then will be used inside the “set” function, if the buckets’ index is an empty slot, the key value pair will be saved in it; if the buckets’ index is occupied, then the new data will overwrite the old data. 

“Get” method retrieves the key value pair by calling the “hash” method using its argument order to find the index of the data.

There are also “has” method to check whether or not a key exists in the hash map; “remove” method erase an entry if it exists in the hash map; “length” method returns the number of stored keys in the hash map; "clear" method to remove all entries in the hash map; "keys" method to return an array containing all the keys inside the hash map; "values" method works similarly to the 'keys" method but returns all the values inside the hash map instead; " lastly, "entries" method returns an array that contains each key value pair.

### Extas Credit: Hash Set
I also created a HashSet factory function that behaves the same as HashMap above but only contains keys with no values.

### Final Thoughts
I tried my best grasping the concepts of Linked List, Hash Map, Time and Space Complexity by reading many online forums, articles and watching many YouTube videos. Common Data Structures and Algorithms are important knowledge to have and I take them seriously.

### Special Thanks:
[What is Factory Function in JavaScript by ColorCode, but actually the wholes series of 20 Things JavaScript Developers Should Know](https://www.youtube.com/watch?v=lE_79wkP-1U&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=3)

[How to Implement a Hash Table in JavaScript by Ben Awad](https://www.youtube.com/watch?v=UOxTMOCTEZk)

[JavaScript HashMap: A Complete Guide](https://www.squash.io/javascript-hashmap-a-complete-guide/#google_vignette)