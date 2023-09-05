const fs = require("fs");
const path = require('path');

class FileManager {
    constructor(file) {
        this.file = path.join(__dirname, "/../../data/"+file);
    }

    /**
     * This function takes an item parameter, 
     * Adds it to the json object as a new row 
     * then saves the json object back to its original file
     * A new id is generated and returned if saving the object was successful
     * @param {*} item 
     * @returns 
     */
    create(item, fn) {
        fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                fn(false)
            } else {
                data = JSON.parse(data)       
                const id = this.getNextId(data)        
                item._id = id
                item.created = new Date()
                data.push(item)
                const json = JSON.stringify(data)
                fs.writeFile(this.file, json, 'utf8', () => {
                    fn({
                        _id: id,
                        created: item.created
                    })
                })
            }
        })
    }

    /**
     * This function takes an id parameter
     * If a object is found in the dataset with an _id parameter matching the id provided
     * It is removed from the list of objects and the resulting array of objects is saved
     * to the original file
     * @param {*} id 
     * @returns 
     */
    delete(id) {
        return fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                return false
            } else {
                data = JSON.parse(data)
                
                //delete function
                const itemIndex = data.filter(d => d._id === id)[0]._id
                data.splice(itemIndex, 1);
                
                json = JSON.stringify(data)
                return fs.writeFile(this.file, json, 'utf8', () => {
                    return true
                })
            }
        })
    }

    /**
     * This function takes an object as a parameter
     * If the object has an id matching the _id parameter of
     * one of the items in the data object, the matching object is updated with the
     * values of the object passed as a parameter, if the job was successful true is returned
     * Otherwise false is returned. The dataset is saved to the exiting file
     * @param {*} item 
     * @returns 
     */
    update(item) {
        return fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                return false
            } else {
                data = JSON.parse(data)

                // update function
                const itemIndex = data.filter(d => d._id === id)[0]._id
                data[itemIndex] = {...data[itemIndex], ...item}
                
                json = JSON.stringify(data)
                return fs.writeFile(this.file, json, 'utf8', () => {
                    return true
                })
            }
        })
    }

    /**
     * This function takes an id parameter
     * It searches the json data from the file for an object with an _id
     * matcn the provided paramter if it does it returns the object 
     * otherwise it returns null
     * @param {*} id 
     * @returns 
     */
    get(id) {
        return fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                return false
            } else {
                data = JSON.parse(data)
                // update function
                const item = data.filter(d => d._id === id)[0]
                return item;
            }
        })
    }

    getByAttribute(attribute, value, fn) {
        fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                fn(false)
            } else {
                data = JSON.parse(data)
                // update function
                const item = data.filter(d => d[attribute] === value)[0]
                fn(item)
            }
        })
    }

    /**
     * This funnction returns all values from the data in the 
     * location of the file attribute
     * @param {*} fn 
     */
    async getAll(fn) {
        await fs.readFile(this.file, 'utf8', (err, data) => {
            if(!err && data) {
                const response = JSON.parse(data).map(d => {
                    var date = new Date();
                    date.setDate(date.getDate() - 100);
                    d.created = !d.created ? date : d.created
                    return d
                }).sort((a, b) => {
                    return Date.parse(b.created) - Date.parse(a.created)
                })
                fn(response);
            }
        })
    }

    /**
     * This function takes a parameter which is an array of data items
     * the ids of all the items are extracted into an array and then the max number is retrived
     * This nuber is incremented by one and returned
     * @param {*} data 
     * @returns 
     */
    getNextId(data) {
        const ids = data.map(d => d._id)
        let id = Math.max(...ids)
        const _id = id+1

        return _id
    }
}

  module.exports = FileManager