# Mail To SG
: 산업기능요원으로서 매일 출근한 시간을 메일로 보내야한다는 사실에 지극한 귀찮음 느껴, 완타치로 출근 시간 메일을 보낼 수 있는 서비스를 고안한다.

# PreRequisite
- Node.js STL 버전을 설치해두자
- 아직 node를 직접 실행해야한다

# How To Use
0. 본 저장소를 클론받는다 
- `git clone `
1. Gmail 2단계 인증 설정
- 본 서비스는 Gmail API 를 이용한다. [2단계 인증을 설정하고, 앱 비밀번호를 생성](https://support.google.com/accounts/answer/185833)하여 기억해두자\
(혹은, [보안 수준이 낮은 앱 엑세스 허용](https://support.google.com/accounts/answer/6010255#zippy=%2C%EA%B3%84%EC%A0%95%EC%97%90%EC%84%9C-%EB%B3%B4%EC%95%88-%EC%88%98%EC%A4%80%EC%9D%B4-%EB%82%AE%EC%9D%80-%EC%95%B1%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4%EA%B0%80-%EC%82%AC%EC%9A%A9-%EC%A4%91%EC%A7%80%EB%90%9C-%EA%B2%BD%EC%9A%B0)를 해야하는데, 그럼 연결된 몇 앱을 사용하지 못할 가능성이 있다.)
2. 메일 설정
- config/senderInfo와 config/recieverInfo에 정보를 입력한다.
```json
// config/senderInfo
{
    "name": "user name",
    "user": "example-sender@gmail.com",
    "pass": "앱 비밀번호"
}
```
```javascript
// config/recieverInfo
{
  "user": "example-reciever@gmail.com"
}
```
- config/mailContent에 메일로 보낼 출근시간과 적용할 날짜를 입력한다.
```json
// config/mainContent
{
    "timeAtWork": "HH:mm",
    "appliedDate": "hhMMdd"
}
```
3. 실행한다
- `node main.js` or `npm run main`