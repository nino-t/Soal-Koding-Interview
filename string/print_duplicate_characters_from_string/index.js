/*
	Cara kerja dari fungsi main adalah:
	1.) Mengubah paramster str yang berupa string menjadi array
	2.) Kemudian melempar hasil array ke fungsi getDuplicateValue
	3.) Pada fungsi getDuplicateValue akan mengfilter value yang duplikat
	4.) Dan setelah keluar hasil duplikatnya, kemudian dimerge dari nilai-nilai array tersebut supaya menjadi unique
	5.) lalu hasil dari fungsi getDuplicateValue dilempar ke fungsi logDuplicate untuk ditampilkan lognya
		dalam berupa console.log
*/

function main(str) {
	var array = str.split('')
	var duplicates = getDuplicateValue(array)
	logDuplicate(duplicates)
}

function getDuplicateValue(array){
	var diff = array.filter((value, index, self) => {
		return self.indexOf(value) !== self.lastIndexOf(value)
	})

	return [...new Set(diff)]
}

function logDuplicate(array){
	console.log(`Karakter yang sama pada string adalah: ${array.join(',')}`)
}

main('aku anak anda!')