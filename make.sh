#!/bin/sh

SCRIPT_DIR=$(cd $(dirname $0); pwd)

${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/concert.ts
${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/concert_media.ts
${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/practice.ts
${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/practice_media.ts
${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/source.ts
${SCRIPT_DIR}/node_modules/.bin/ts-node ${SCRIPT_DIR}/script/source_media.ts
