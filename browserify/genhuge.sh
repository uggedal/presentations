#!/bin/sh

rm -rf huge
mkdir -p huge

n=500

for i in $(seq 1 $n); do
  cat <<EOF > huge/$i.js
module.exports = function (i) {
  return i + 1;
};
EOF
  yes 'filler = "abcdefghijklmnopqrstuvwxyz";' |
    head -n $n >> huge/$i.js
done

printf "var i = 0;\n" > huge/start.js

for i in $(seq 1 $n); do
  printf "i += require('./$i')(i);\n" >> huge/start.js
done

printf "console.log(i);\n" >> huge/start.js
