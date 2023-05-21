#include <libwebsockets.h>

#define MAX_MESSAGE_LEN 4096

static int callback_http(struct lws *wsi, enum lws_callback_reasons reason,
                         void *user, void *in, size_t len)
{
    // 处理HTTP请求
    return 0;
}

static int callback_websocket(struct lws *wsi, enum lws_callback_reasons reason,
                              void *user, void *in, size_t len)
{
    switch (reason) {
        case LWS_CALLBACK_ESTABLISHED:
            // 处理WebSocket连接建立事件
            break;
        case LWS_CALLBACK_RECEIVE:
            // 处理WebSocket消息接收事件
            char message[MAX_MESSAGE_LEN];
            strncpy(message, in, len);
            message[len] = '\0';
            printf("Received message: %s\n", message);
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
        {"http-only", callback_http, 0},
        {"websocket", callback_websocket, 0},
        {NULL, NULL, 0}
    };

    context = lws_create_context(&info);
    if (!context) {
        fprintf(stderr, "Failed to create libwebsocket context\n");
        return -1;
    }

    while (1) {
        lws_service(context, 1000);
    }

    lws_context_destroy(context);

    return 0;
}

