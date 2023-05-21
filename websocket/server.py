import asyncio
import websockets

async def handle_connection(websocket, path):
    # 处理连接
    while True:
        message = await websocket.recv()
        # 处理接收到的消息
        await websocket.send("Received: " + message)
        # 发送响应消息

start_server = websockets.serve(handle_connection, 'localhost', 8000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

