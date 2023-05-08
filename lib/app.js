const fs = require('fs');
const path = require('path');

const createNote = (body, notes) => {

    notes.push(body);  
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes)
    )

    return notes

}


module.exports = {
    createNote
}
