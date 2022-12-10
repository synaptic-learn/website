#!/bin/sh

yarn build:p &
yarn build:s &
wait
yarn zip