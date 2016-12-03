export default function (...parts) {
	let tabTitle = document.getElementsByTagName('title')[0]
	tabTitle.innerText = parts.map(part => part.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
		.join(' ')).join(' | ')
}
