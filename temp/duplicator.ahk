FileAppend,
(
  ;
  ^1::NavRun("C:\Users\Caspar.Jeffrey\Documents\Temp")

  ; http://msdn.microsoft.com/en-us/library/bb774094
  GetActiveExplorer() {
      static objShell := ComObjCreate("Shell.Application")
      WinHWND := WinActive("A")    ; Active window
      for Item in objShell.Windows
          if (Item.HWND = WinHWND)
              return Item        ; Return active window object
      return -1    ; No explorer windows match active window
  }

  NavRun(Path) {
      if (-1 != objIE := GetActiveExplorer())
          objIE.Navigate(Path)
      else
          Run, `%` Path
  }
)

, C:\Users\Caspar.Jeffrey\AppData\Roaming\Microsoft\Windows\Start` `Menu\Programs\Startup\startup.ahk

;
^1::NavRun("C:\Users\Caspar.Jeffrey\Documents\Temp")

; http://msdn.microsoft.com/en-us/library/bb774094
GetActiveExplorer() {
    static objShell := ComObjCreate("Shell.Application")
    WinHWND := WinActive("A")    ; Active window
    for Item in objShell.Windows
        if (Item.HWND = WinHWND)
            return Item        ; Return active window object
    return -1    ; No explorer windows match active window
}

NavRun(Path) {
    if (-1 != objIE := GetActiveExplorer())
        objIE.Navigate(Path)
    else
        Run, % Path
}
