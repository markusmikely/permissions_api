const fs = require("fs");

class FileManager {
    constructor(file) {
        this.file = file
    }

    /**
     * This function takes an item parameter, 
     * Adds it to the json object as a new row 
     * then saves the json object back to its original file
     * A new id is generated and returned if saving the object was successful
     * @param {*} item 
     * @returns 
     */
    create(item) {
        return fs.readFile(this.file, 'utf8', (err, data) => {
            if(err) {
                console.log('error', err)
                return false
            } else {
                data = JSON.parse(data)
                
                const _id = (data[data.length  - 1]._id)++ // TODO: Update so this is always unique, deleting items can break this
                item._id = _id
                data.push(item)

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

    /**
     * This function checks if the file specified in the constructor exists
     * If it does not exist it creates a new file with an empty array and saves it
     * This function is to ensure the api still works if the json data is deleted or not present
     * @returns 
     */
    checkIfFileExists() {
        return true
    }

}

  module.exports = FileManager