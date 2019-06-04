#!/bin/sh

SCRIPT_DIR=$(cd $(dirname $0); pwd)

node ${SCRIPT_DIR}/archive/concert.js
node ${SCRIPT_DIR}/archive/media.js
node ${SCRIPT_DIR}/practice/practice.js
node ${SCRIPT_DIR}/practice/media.js
node ${SCRIPT_DIR}/source/source.js
node ${SCRIPT_DIR}/source/media.js
