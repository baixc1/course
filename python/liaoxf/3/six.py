def application(environ, start_response):
    print(environ)
    start_response('200 OK', [('content-Type', 'text/html')])
    return [b'<h1>Hello</h1>']
