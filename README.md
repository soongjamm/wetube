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
  


videoController의 postDeleteComment함수에서 findOne으로 비디오를 찾고, for문을 돌리면서 일치하는 코멘트를 찾아 삭제했는데, 더 좋은 방법이 있지 않을까 고민이다.
