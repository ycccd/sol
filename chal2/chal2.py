import sys

# run this via python chal2.py text.txt 40
fname = sys.argv[1]
target = int(sys.argv[2])

def findClosest(fname, target):
	fname = 'text.txt'
	lines = []
	with open(fname) as f:
		for line in f:
			split = line.split(' ')
			split[1] = int(split[1].rstrip('\n'))
			lines.append(split)
	result = closest(lines, target)
	print(result)
	return result

def closest(lines, target):
    l = len(lines)
    if l < 2:
        return 'No Valid Answer'
    lo = 0
    hi = l - 1

    while lo < hi:
        sum = lines[lo][1] + lines[hi][1]
        print(sum)
        if sum == target:
            return [lines[lo][0], lines[hi][0]]
        elif sum > target:
            hi -= 1
        else:
            lo += 1

    if lo == hi and lo == l - 1:
        return 'No Valid Answer'
    elif lo == hi:
        hi = lo + 1
    return [lines[lo][0], lines[hi][0]]

if __name__ == '__main__':
	findClosest(fname, target)