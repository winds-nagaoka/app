#!/bin/sh

SCRIPT_DIR=$(cd $(dirname $0); pwd)

./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/concert.ts
./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/concert_media.ts
./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/practice.ts
./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/practice_media.ts
./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/source.ts
./node_modules/.bin/ts-node ${SCRIPT_DIR}/script/source_media.ts
