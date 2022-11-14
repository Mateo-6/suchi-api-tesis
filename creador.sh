#!/bin/bash

mkdir ./src/components/$@

touch ./src/components/$@/$@.network.ts
touch ./src/components/$@/$@.controller.ts
touch ./src/components/$@/$@.store.ts

echo "El componente ha sido creado"
