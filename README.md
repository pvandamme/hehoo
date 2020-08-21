# Gillbert the Heho fish

## Who is Gillbert and what does it do ?

Gillbert is a small Discord bot written in `JavaScript` who sole purpose is to react when you send "heho" in the chat.

## How to use ?

You can download and run it locally with Node or use Docker.

Either way, you will need a Disord `token` , see the [Discord developper portal](https://discord.com/developers) to get one.

### With Node. Js

You will need Node `v12` and `npm` .

Clone or download this repo, `cd` into it and run:

``` bash
# for Linux
export TOKEN='<insert_your_token_here>'
# or for PowerShell, if you are that kind of person
$env:PATH TOKEN='<insert_your_token_here>'

npm install

node .
```

### With Docker (Linux)

If you already have Docker all set up, then it's dead simple.

Build the image like so:

``` bash
docker build -t heho_bot https://github.com/4thOne/hehoo.git
```

And then run it:

``` bash
docker run -d --name Gillbert -e TOKEN='<insert_your_token_here>' Gillbert:latest
```
