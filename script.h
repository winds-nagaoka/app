#!/bin/sh

SCRIPT_DIR=$(cd $(dirname $0); pwd)

node ${SCRIPT_DIR}/script/concert.js
node ${SCRIPT_DIR}/script/concert_media.js
node ${SCRIPT_DIR}/script/practice.js
node ${SCRIPT_DIR}/script/practice_media.js
node ${SCRIPT_DIR}/script/source.js
node ${SCRIPT_DIR}/script/source_media.js