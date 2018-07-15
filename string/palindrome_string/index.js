/*
	Cara kerja dari fungsi main adalah:
	1.) Mengubah paramster str yang berupa string menjadi array
	2.) Kemudian memutar balikan dari array tersebut
	3.) Mengubahnya kembali menjadi string
*/

function main(str) {
	return str.split('').reverse().join('')
}

console.log(main('Aku anak anda!'))