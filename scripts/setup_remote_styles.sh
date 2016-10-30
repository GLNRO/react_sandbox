#!/usr/bin/env bash
git clone https://github.com/GLNRO/style_demo.git src/shared/style_demo
cd 'src/shared/style_demo'
git remote add remote_styles https://github.com/GLNRO/style_demo.git
git remote rm origin
git remote set-url --push remote_styles DISABLE
