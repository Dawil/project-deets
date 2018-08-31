export const autoHotKeyGenerate = function(tba, otherTba) {

  let user = 'Caspar.Jeffrey'

  let hotKeyMappings = [
    { 'project': '236482-00', 'region': 'australasia', 'office': 'SYD', 'hotkey': 'ctrl + 1' },
    { 'project': '236482-20', 'region': 'australasia', 'office': 'SYD', 'hotkey': 'ctrl + 2' }
  ]

  let loopText = ''

  let loopText1 = `Loop, Files, \\\\global.arup.com\\`

  let loopText2 = `\\Projects\\`

  let loopText3 = `000\\`

  let loopText4 = `*, D
  {
  ppath`

  let loopText5 = `:=A_LoopFileFullPath
  Break
  }

`
  let hotKeyBindsText = ''

  let hotKeyBindsText1 = `^`

  let hotKeyBindsText2 = `::NavRun(ppath`

  let hotKeyBindsText3 = `)
`

  let hotKeyBindsTextNested = ''

  let hotKeyBindsTextNested1 = `^`

  let hotKeyBindsTextNested2 = `::NavRun("%ppath`

  let hotKeyBindsTextNested3 = `%")
`

  hotKeyMappings.forEach((entry, index) => {
    loopText = loopText + loopText1 + entry.region + '\\' + entry.office + loopText2 + entry.project.substring(0,3) + loopText3 +
               entry.project.substring(0,6) + loopText4 + index + loopText5,
    hotKeyBindsText = hotKeyBindsText + hotKeyBindsText1 + entry.hotkey.substring(7,8) + hotKeyBindsText2 + index + hotKeyBindsText3,
    hotKeyBindsTextNested = hotKeyBindsTextNested + hotKeyBindsTextNested1 + entry.hotkey.substring(7,8) + hotKeyBindsTextNested2 +
               index + hotKeyBindsTextNested3
  })

  let staticText1 = `FileAppend,
(
  ;"
`

  let staticText2 = `; http://msdn.microsoft.com/en-us/library/bb774094
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
          Run, \`%\` Path
  }
)

, C:\\Users\\`

  let staticText3 = `\\AppData\\Roaming\\Microsoft\\Windows\\Start\` \`Menu\\Programs\\Startup\\startup.ahk

;
`
  let staticText4 = `; http://msdn.microsoft.com/en-us/library/bb774094
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
`
  let text = loopText + staticText1 + hotKeyBindsTextNested + staticText2 + user + staticText3 + hotKeyBindsText + staticText4

  return text
}
