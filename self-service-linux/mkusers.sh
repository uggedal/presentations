#!/bin/sh -e

[ "$1" ] || exit 1

for i in $(seq -w 0 99); do
	name=u$i
	if ! grep -q ^$name: /etc/passwd; then
		adduser --uid 20$i --ingroup users --disabled-login \
			--gecos User\ $i $name
	fi

	if grep -q ^$name:!: /etc/shadow; then
		echo $name:$1-$i-$1 | chpasswd
	fi
done
