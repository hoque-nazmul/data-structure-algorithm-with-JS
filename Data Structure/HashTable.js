// Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
// Nearly every programming language has some sort of hash table data structure such as Dictionaries in python, Objects in javascript and Maps in java, go & scala etc.

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
}

let myHashTable = new HashTable(17);
myHashTable.set("maroon", "#800000")
myHashTable.set("yellow", "#FFFF00")
myHashTable.set("olive", "#808000")
myHashTable.set("salmon", "#FA8072")
myHashTable.set("lightcoral", "#F08080")
myHashTable.set("mediumvioletred", "#C71585")

console.log(myHashTable.get('salmon'));
// expected output: #FA8072

console.log(myHashTable.get('maroon'));
// expected output: #800000

myHashTable.keys().forEach(function(key){
    console.log(myHashTable.get(key));
})

/*
expected output:
    #FA8072
    #800000
    #FFFF00
    #808000
    #F08080
    #C71585
*/