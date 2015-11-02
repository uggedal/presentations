#!/bin/sh

vim \
	-c 'set nonu' \
	-c 'hi NonText ctermfg=0' \
	*.txt
