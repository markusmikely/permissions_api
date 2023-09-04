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
                
                const id = (data[data.length  - 1]._id)++ // TODO: Update so this is always unique, deleting items can break this
                
                item._id = id
                data.push(item)

                console.log('item', item)
                
                const json = JSON.stringify(data)
                fs.writeFile(this.file, json, 'utf8', () => {
                    console.log('saved to '+this.file+' successfully');
                    fn(id)
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
                    console.log('saved to '+this.file+' successfully');
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
                    console.log('saved to '+this.file+' successfully');
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

    async getAll(fn) {
        await fs.readFile(this.file, 'utf8', (err, data) => {
            if(!err && data) {
                fn(JSON.parse(data));
            }
        })
    }
}

  module.exports = FileManager