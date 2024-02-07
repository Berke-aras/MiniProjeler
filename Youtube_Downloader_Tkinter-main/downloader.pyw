import tkinter as tk
import os


root = tk.Tk()
root.geometry('310x370')

root.title("Link")

def commandses():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe -f "140" {link}"')
def command360():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe -f "134"+"bestaudio" {link}"')
def command480():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe -f "135"+"bestaudio" {link}"')
def command720():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe -f "136"+"bestaudio" {link}"')
def command1080():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe -f "137"+"bestaudio" {link}"')
def indir():
    enter.focus()
    link = enter.get()
    print(link)
    os.system(f'cmd /c   "youtube-dl.exe {link}"')


tag = tk.Label(text='Download\n')
tag.pack()

enter = tk.Entry(root, text = "Download")
enter.place(x = 90, y = 25)

tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='audio', command= commandses)
button.pack()
tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='360p', command=command360)
button.pack()
tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='480p', command=command480)
button.pack()
tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='720', command=command720)
button.pack()
tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='1080', command=command1080)
button.pack()
tag = tk.Label(text='')
tag.pack()
tag = tk.Label(text='')
tag.pack()
button = tk.Button(text='other sites', command=indir)
button.pack()



root.mainloop()
