function main(a) {
	var diff = a.filter((x, i, self) => {
		return self.indexOf(x) !== self.lastIndexOf(x)
	})

	diff = [...new Set(diff)]
	console.log('Duplicate integer is', diff.join(', '))
}

main([1,2,3,4,5,1,6,7,3])