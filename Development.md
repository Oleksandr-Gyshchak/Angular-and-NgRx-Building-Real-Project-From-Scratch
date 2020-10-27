# [Udemy, Oleksandr Kocherhin] Angular и NgRx - пишем реальный проект с нуля [RUS, 2020]

<br/>

# Разработка по шагам

<br/>

## 01 Подготовка проекта

<br/>

### 001 Подготавливаем проект

<br/>

    $ npm install -g @angular/cli
    $ ng --version

<br/>

```
***
Angular CLI: 10.1.7
Node: 12.18.4
OS: linux x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1001.7 (cli-only)
@angular-devkit/core         10.1.7 (cli-only)
@angular-devkit/schematics   10.1.7 (cli-only)
@schematics/angular          10.1.7 (cli-only)
@schematics/update           0.1001.7 (cli-only)

```

<br/>

    $ cd app
    $ ng new client

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS
```

<br/>

    $ cd client
    $ npm start

<br/>

### 002 Почему нам нужен NgRx? (Wrapper над Redux для Angular)

<br/>

### 003 Планируем структуру проекта

<br/>

### 004 Prettier - инструмент автоформатирования кода

<br/>

### 005 Зачем нам language server?

<br/>

## 02 Модуль регистрации

<br/>

### 006 Модуль регистрации

http://localhost:4200/register

<br/>

![Application](/img/pic-m02-p01.png?raw=true)

<br/>

### 007 Делаем разметку регистрации

<br/>

![Application](/img/pic-m02-p02.png?raw=true)

<br/>

### 008 Устанавливаем NgRx

https://ngrx.io/

    $ npm install @ngrx/stor

<br/>

### 009 Как дебажить NgRx?

**Установить**

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

<br/>

https://ngrx.io/guide/store-devtools

<br/>

    $ npm install @ngrx/store-devtools

<br/>

![Application](/img/pic-m02-p03.png?raw=true)

<br/>

### 010 Создаем интерфейсы для модуля авторизации

<br/>

### 011 Добавляем редьюсеры для модуля авторизации

<br/>

![Application](/img/pic-m02-p04.png?raw=true)

<br/>

### 012 Создаем селекторы для модуля авторизации

<br/>

![Application](/img/pic-m02-p05.png?raw=true)

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
