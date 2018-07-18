function main(a) {
	var max = Math.max(...a)
	var min = Math.min(...a)

	console.log('Nilai min', min)
	console.log('Nilai max', max)
}

main([1,2,5,1,3,13,8])