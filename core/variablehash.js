var crypto = require("crypto");

/* variableHash - Generate a variable-length hash of `data`.
  Similar to the answer here: http://crypto.stackexchange.com/a/3559/4829
	If you want a b-bit hash of the message m, then use the first b bits of AES-CTR(SHA256(m)).
	Rather than using the suggested algorithm in the stackexchange answer above, I developed
	my own.
	
	I decided to derive AES256 initialization vector and key from the output of SHA256(data).
	Then, the cipher is fed a zero-filled buffer as plaintext, which is encrypted using this key.
	The result should be a pseudorandom number generator seeded with a 256-bit hash of `data`.
	
	In other words, compute SHA256(m) and treat the resulting 256-bit string as a 256-bit AES key.
	Next, use AES in counter mode (with this key) to generate an unending stream of pseudorandom bits.
	Take the first b bits from this stream, and call it your hash.
	
	Returns a `Buffer` Object
*/
function variableHash(size, data, input_encoding) {
	//Generate 256-bit hash of data
	var hash = crypto.createHash("sha256");
	hash.update(data, input_encoding);
	hash = hash.digest("binary");
	//Generate pseudorandom-random output that is `size` bytes
	var output = new Buffer(size);
	output.fill(0);
	//Encrypt a zero-filled buffer using the SHA-256 hash as the AES-256 key
    var cipher = crypto.createCipher("aes256", hash);
    let updatedhash = cipher.update(output).toString('hex');
    var offset = output.write(updatedhash, "binary");
    updatedhash = cipher.final().toString('hex');
	output.write(updatedhash, offset, "binary");
	return output;
}

module.exports = variableHash;