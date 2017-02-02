export default function (...parts) {
	let tabTitle = document.getElementsByTagName('title')[0]
	tabTitle.innerText = parts[0] === 'landing' ? parts[1] :
		parts.map(part => part.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
			.join(' ')
		).join(' | ')
}
