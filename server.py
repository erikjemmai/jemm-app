#!/usr/bin/env python3
"""Simple no-cache dev server for Jemm companion app.
Usage: python3 server.py
Then open: http://localhost:9101
"""
import http.server
import os

PORT = 9101

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with http.server.HTTPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Jemm app running → http://localhost:{PORT}")
        httpd.serve_forever()
