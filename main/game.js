function hexStringToByte(str) {
  if (!str) {
    return new Uint8Array();
  }
  var a = [];
  for (var i = 0, len = str.length; i < len; i+=2) {
    a.push(parseInt(str.substr(i,2),16));
  }
  return new Uint8Array(a);
}

async function importkeys(ks) {
  ka = ks.split("+")
  var key = []
  key[0] = await window.crypto.subtle.importKey("jwk", {
      kty: "oct",
      alg: "A256CBC",
      k: ka[0],
      ext: !0
    }, "AES-CBC", !1, [
      "encrypt",
      "decrypt"
    ]
  )
  key[1] = await window.crypto.subtle.importKey("jwk", {
      kty: "oct",
      alg: "A256CBC",
      k: ka[1],
      ext: !0
    }, "AES-CBC", !1, [
      "encrypt",
      "decrypt"
    ]
  )
  return key
}

async function decrypt(key, datastr) {
  datastr = datastr.replace(/\s/g, '')
  data = hexStringToByte(datastr)
  textbuf = await window.crypto.subtle.decrypt({
      name: "AES-CBC",
      iv: data.slice(0, 16)
    }, key, data.slice(16, data.byteLength)
  )
  dec = new TextDecoder
  return dec.decode(textbuf)
}

function submit() {
  keystring = document.getElementById("keys").value
  hexdata = document.getElementById("data").value
  selector = document.getElementById("selector").value
  importkeys(keystring).then((key) =>
    decrypt(key[selector], hexdata).then((result) =>
      document.getElementById("result").innerHTML = result)
  )
  //result = await decrypt(key[document.getElementById("selector")], document.getElementById("data"))
  //document.getElementById("result").innerHTML = result
}

