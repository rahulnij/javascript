function AccessArray(arr) {

	var arrayIndex = 0

	return {
		next: function() {
			if(arrayIndex >= arr.length) {
				return false
			}
			return arr[arrayIndex++]
		}
	}
}

arrIterator = new AccessArray([1,23,34])
val = arrIterator.next()
while(val !== false) {
	console.log(val)
  val = arrIterator.next()

}