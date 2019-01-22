@echo off
TITLE WebtechInstalls
echo INSTALLING INIT
call npm init
echo INSTALLING EXPRESS
call npm install express --save
echo INSTALLING NODEMON 
call npm install nodemon --save-dev
echo INSTALLING BODY-PARSER
call npm install body-parser --save
echo INSTALLING MONGODB 
call npm install mongodb --save
echo INSTALLING EJS
call npm install ejs --save
echo DONE GOOD LUCK!