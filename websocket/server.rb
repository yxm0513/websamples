require 'em-websocket'

EM.run do
  EM::WebSocket.run(host: '0.0.0.0', port: 8000) do |websocket|
    websocket.onopen do
      # 处理连接
      puts "connected"
    end

    websocket.onmessage do |message|
      # 处理接收到的消息
      websocket.send("Received: #{message}")
      # 发送响应消息
    end

    websocket.onclose do
      # 处理连接关闭
      puts "connection closed"
    end
  end
end
