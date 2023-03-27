#!/bin/bash


git ls-files | xargs -I {} mustache .template.config.json {} {}