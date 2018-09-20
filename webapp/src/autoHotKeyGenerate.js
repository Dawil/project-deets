export const autoHotKeyGenerate = function(user, hotKeyMappings) {

  let region = 'australasia'

  let splashText = 'SplashTextOn ,300,22,,mapping project folder directories'

  let pathText = ` C:\\Users\\` + user + `\\AppData\\Roaming\\Microsoft\\Windows\\Start\` \`Menu\\Programs\\Startup\\startup.ahk`

  let loopText = ''

  let loopText1 = `
Loop, Files, \\\\global.arup.com\\`

  let loopText2 = `\*, D
  loop, Files, %a_loopfilefullpath%\\Projects\\`

  let loopText3 = `000\\`

  let loopText4 = `*, D
    ppath`

  let loopText5 = `:=A_LoopFileFullPath
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
    loopText = loopText + loopText1 + region + '\\' + loopText2 + entry.project.substring(0,3) + loopText3 +
               entry.project.substring(0,6) + loopText4 + index + loopText5,
    hotKeyBindsText = hotKeyBindsText + hotKeyBindsText1 + entry.hotkey.substring(7,8) + hotKeyBindsText2 + index + hotKeyBindsText3,
    hotKeyBindsTextNested = hotKeyBindsTextNested + hotKeyBindsTextNested1 + entry.hotkey.substring(7,8) + hotKeyBindsTextNested2 +
               index + hotKeyBindsTextNested3
  })

  let staticText1 = `
FileDelete,` + pathText

  let staticText2 = `
FileAppend,
(
  ;"
`

  let staticText3 = `; http://msdn.microsoft.com/en-us/library/bb774094
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

,`

  let staticText4 = pathText + `
Run`

  let staticText5 = pathText + `
SplashTextOff

`
  let text = splashText + loopText + staticText1 + staticText2 + hotKeyBindsTextNested + staticText3 + staticText4 + staticText5

  return text
}
