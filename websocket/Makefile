all: clean server1 server2

server1: server.c
  gcc server.c -lwebsockets -I /usr/local/homebrew/Cellar/libwebsockets/4.3.2/include -L /usr/local/homebrew/Cellar/libwebsockets/4.3.2/lib -o server1

server2: server2.c
  gcc server2.c -lwebsockets -I /usr/local/homebrew/Cellar/libwebsockets/4.3.2/include -L /usr/local/homebrew/Cellar/libwebsockets/4.3.2/lib -o server2

clean:
  rm -rf server1 server
