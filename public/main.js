const update = document.getElementById('update-button')

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
