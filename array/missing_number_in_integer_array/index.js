function main(a) {
	var max = Math.max(...a)
	var min = Math.min(...a)

	var missing = []
	for (var i = min; i <= max; i++) {
		if (a.indexOf(i) === -1) {
			missing.push(i)
		}
	}

	console.log('Missing integer is: '+ missing.join(','))
}

main([1,2,5,6,7,8,10])