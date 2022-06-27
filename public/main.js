const update = document.getElementById('update-button');
const deleteQuote = document.getElementById('delete-button');
const message = document.getElementById('message');

update.addEventListener('click', _ => {
	fetch('/quotes', {
		method: 'put',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: 'Anavel Gato',
			quote: 'Solomon! I have now returned!'
		})
	})
		.then(res => {
			if(res.ok) return res.json()
		})
		.then(response => {
			window.location.reload(true)
		})
})

deleteQuote.addEventListener('click', _ => {
	fetch('/quotes', {
		method: 'delete',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: 'Anavel Gato'
		})
	})
		.then(res => {
                        if(res.ok) return res.json()
                })
                .then(response => {
                        if(response === 'No quote to delete') {
				message.textContent = 'No Anavel Gato quote to delete'
			} else {
				window.location.reload(true)
			}
                })
		.catch(error => console.error(error))
})
