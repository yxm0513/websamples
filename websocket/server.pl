use AnyEvent::Socket qw(tcp_server);
use AnyEvent::WebSocket::Server;
 
my $server = AnyEvent::WebSocket::Server->new();
 
my $tcp_server = tcp_server undef, 8000, sub {
    my ($fh) = @_;
    $server->establish($fh)->cb(sub {
        my $connection = eval { shift->recv };
        if($@) {
            warn "Invalid connection request: $@\n";
            close($fh);
            return;
        }
        $connection->on(each_message => sub {
            my ($connection, $message) = @_;
            $connection->send($message); ## echo
        });
        $connection->on(finish => sub {
            undef $connection;
        });
    });
};
