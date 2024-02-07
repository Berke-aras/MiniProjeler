from concurrent.futures import thread
import socket
from sqlite3 import connect
import threading

HEADER = 64
PORT = 6032
SERVER = socket.gethostbyname(socket.gethostname())
print(SERVER)
ADDR = (SERVER, PORT)
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(ADDR)

old_messages = list()

def handle_client(conn, addr):
    print(f"[Yeni Baglanti] {addr} connected.")
    
    connected = True
    while connected:
        msg_lenght = conn.recv(HEADER).decode(FORMAT)
        if msg_lenght: 
            msg_lenght = int(msg_lenght)
            msg = conn.recv(msg_lenght).decode(FORMAT)
            
            if msg == DISCONNECT_MESSAGE:
                connected = False

            conn.send(msg.encode(FORMAT))


    conn.close()

def start():
    server.listen()
    print(f"[Server] {SERVER} ")
    while True:
        conn, addr = server.accept()
        thread = threading.Thread(target=handle_client, args=(conn, addr))
        thread.start()
        print(f"[Aktif Baglantilar] {threading.active_count() - 1} ")

print("[Baslatiliyor] Server Calisti")
start()
