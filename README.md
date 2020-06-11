# WETUBE

Cloning youtube with VanillaJS and NodeJS

## What I have used
- NodeJS 
- ES6
- Express
- dotenv
- MongoDB
- Pug
- Passport
- Webpack
- SCSS
- Mongoose


## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [x] Edit Video


## START.  
각각의 terminal에서 명령 실행
```> mongod```.  
```> npm run dev:assets```.  
```> npm run dev:server```.  


###
facebook 로그인은 http를 사용한 도메인을 허용하지 않아서 'ngrok' 을 이용한 우회로 가능 (OS X)  
```> npm install -g ngrok```  
```> ngrok http 4040``` 4040은 port number 입력  
생성된 https 주소를 callback 주소, facebook URI redirection 주소로 사용

