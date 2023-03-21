#!bin/bash

read -p "What is the name of the component? " PACK

cd ../controllers
touch ${PACK}Controller.js

cd ../models
touch ${PACK}Model.js

cd ../routes
touch ${PACK}Route.js