# HTTP headers

HTTP headers are like the information about the req/res body in the req/res cycle.
It contains metadata about the packet (which is req or res body) that is being sent
to server or being received by client.

You can access req headers with req.headers. You can also set custom headers for res body
from your server using res.setHeader("x-req","res"). Also note that, it is a best
practice to name custom headers with an "x" as a prefix 