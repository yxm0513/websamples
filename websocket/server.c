#include <libwebsockets.h>
#include <stdio.h>

#define MAX_MESSAGE_LEN 4096

char message[MAX_MESSAGE_LEN];

void my_log_callback(int level, const char *line) {
    printf("Log message: %s\n", line);
}



// Function to send a message
void send_message(struct lws *wsi,const char *message)
{
    if (wsi) {
        // Ensure the connection is valid before sending the message
        int messageLength = strlen(message);
        unsigned char buffer[LWS_PRE + MAX_MESSAGE_LEN];
        memcpy(&buffer[LWS_PRE], message, messageLength);
        int bytesSent = lws_write(wsi, &buffer[LWS_PRE], messageLength, LWS_WRITE_TEXT);
        if (bytesSent < 0) {
            // Failed to send the message
            lwsl_notice("Failed to send message\n");
        }
    }
}

static int callback_http(struct lws *wsi, enum lws_callback_reasons reason,
                         void *user, void *in, size_t len)
{
    // 处理HTTP请求
    return 0;
}

static int callback_websocket(struct lws *wsi, enum lws_callback_reasons reason,
                              void *user, void *in, size_t len)
{

    lwsl_notice("handle reason: %d LWS_CALLBACK_ESTABLISHED %d LWS_CALLBACK_RECEIVE %d \n", reason, LWS_CALLBACK_ESTABLISHED, LWS_CALLBACK_RECEIVE);
    switch (reason) {
        case LWS_CALLBACK_ESTABLISHED:
            // 处理WebSocket连接建立事件
	    lwsl_notice("connected");
            break;
        case LWS_CALLBACK_RECEIVE:
            // 处理WebSocket消息接收事件
            //char message[MAX_MESSAGE_LEN];
            strncpy(message, in, len);
            message[len] = '\0';
            lwsl_notice("Received message: %s\n", message);
            send_message(wsi ,message); 
            break;

        case LWS_CALLBACK_SERVER_WRITEABLE:
	    lwsl_notice("writeable");
            break;
        case LWS_CALLBACK_CLOSED:
	    lwsl_notice("close");
            break;
        default:
            break;
    }

    return 0;
}

int main(void)
{
    struct lws_context_creation_info info;
    struct lws_context *context;
    const char *interface = NULL;
    int port = 8000;
    const char *cert_path = NULL;
    const char *key_path = NULL;
   
    memset(&info, 0, sizeof(info));
    info.port = port;
    info.iface = interface;
    info.protocols = (struct lws_protocols[]){
        //{"websocket", callback_websocket, 0},
        {"", callback_websocket, 0, 0, 0, NULL, 0},
        {"http-only", callback_http, 0},
        {NULL, NULL, 0}
    };
    lwsl_notice("start server");
    context = lws_create_context(&info);
    if (!context) {
        lwsl_notice("Failed to create libwebsocket context\n");
        return -1;
    }

    while (1) {
        lws_service(context, 1000);
    }

    lws_context_destroy(context);

    return 0;
}

