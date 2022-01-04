const fs = require('fs');

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.some(note => note.title === title);

	debugger;

	if (!duplicateNote) {
		console.error('Duplicate')
		return
	}

	notes.push({title, body});

	saveNotes(notes)
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);

	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();

		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {getNotes: loadNotes, addNote};
