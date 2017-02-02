// Easy way to test this is to paste the function in Chrome and put in some sample code like the one below

// sample input:
// s_replace('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
// s_replace('0100101X')

function s_replace(s) {
	let res = [];
	gen('', 0);
	return res;

	function gen(build, idx) {
		if (build.length === s.length) {
			res.push(build);
			return;
		}

		let ch = s[idx];
		let updatedIdx = idx + 1;

		if (ch === 'X') {
			gen(build + '0', updatedIdx);
			gen(build + '1', updatedIdx);
		} else {
			gen(build + ch, updatedIdx);
		}
	}
}