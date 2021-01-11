# gRPC - Vue.js - Go - Envoy
This repository contains the Web Client (used to interact with Haaukins) and the Envoy proxy (used to enable the communication between client and server).

## Prerequisites
- Go v1.11 and Golang
- npm
- Docker
- install grpc and protocol Buffer3 (protobuf)
```bash
# Install Go gRPC
$ go get -u google.golang.org/grpc

# Make sure you grab the latest version
$ curl -OL https://github.com/google/protobuf/releases/download/v3.6.1/protoc-3.6.1-linux-x86_64.zip

# Unzip
$ unzip protoc-3.6.1-linux-x86_64.zip -d protoc3

# Move protoc to /usr/local/bin/
$ sudo mv protoc3/bin/* /usr/local/bin/

# Move protoc3/include to /usr/local/include/
$ sudo mv protoc3/include/* /usr/local/include/

# Install protobuf for Go
$ go get -u github.com/golang/protobuf/protoc-gen-go

# Install protobuf for Web
$ git clone https://github.com/grpc/grpc-web /tmp/grpc-web
$ cd /tmp/grpc-web && sudo make install-plugin
```
Errors founds:
fatal error: google/protobuf/compiler/code_generator.h: No such file or directory
```bash
apt-get install -y make g++ autoconf libtool
sudo apt-get install libprotoc-dev 
```

## How to run it

Set the environment variable in the `.env` file

```bash
CERTIFICATES_PATH= #absolute path of certificate folder
ENVOY_CONFIG= #absolute path of .yaml file
ENVOY_DEV_CONFIG= #absolute path of dev .yaml file
```

### Server
To run Haaukins in local
```bash
$ go run app/daemon/main.go --config=/home/gian/Documents/haaukins_files/configs/config.yml
```

### Proxy
```bash
$ docker build -t envoy . 
$ docker run -d -p 8000:8000 envoy:latest

```
Note: No need to specify `--network=host` while running the docker container, the ip address of `docker0`  used. 


Note: `--network=host` is NOT required for MacOS and Windows machines. `socket_address` IP address on [envoy.yaml](envoy/envoy.yaml) should be `docker0` on linux host machines and `docker.for.mac.localhost` for MacOS machine. 

### Client
```bash
$ cd client
$ docker build -t webclient .
$ docker run -d -p 8003:8003 webclient:latest
```
Note : Webclient will work only with HTTPS !! 

browse ```http://localhost:8001/```

#### Developer Notes
Below the list of useful command i have used:
- Create a Vue.js base project (It create a folder containing the project)
```bash
vue create hello-world
```
- Create the proto compiled code for GO (Run in the main folder)
```bash
protoc -I proto/ proto/deamon.proto --go_out=plugins=grpc:proto
```
- Create the proto compiled code for JS (Run in the proto folder)
```bash
protoc daemon.proto --js_out=import_style=commonjs,binary:../client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../client ```