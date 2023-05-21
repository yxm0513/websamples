.PHONY:clean
	
all:lws_webserver

lws_webserver:lws_webserver.c
	gcc lws_webserver.c -o lws_webserver -lwebsockets  -I /usr/local/homebrew/Cellar/libwebsockets/4.3.2/include -L /usr/local/homebrew/Cellar/libwebsockets/4.3.2/lib

clean:
	rm lws_webserver
