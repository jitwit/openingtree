export const handleDarkMode = (darkMode) => {
    const darkModeThemeIsCurrentlySet = document.body.classList.contains('dark-theme');
    if (darkMode !== darkModeThemeIsCurrentlySet) {
        document.body.classList.toggle('dark-theme');
    }
};
export const logoName = (darkMode) => {
    return darkMode? 'opening-tree-logo-white.png':'opening-tree-logo.png'
}
export const rowContentColor = (darkMode) => {
    return darkMode ? 'white' : 'grey'
}
export const toggleBoardTheme = () => {
//    let root = getComputedStyle(document.documentElement)
//    console.log(root.getPropertyValue("--board-url"))
//    console.log(root.getPropertyValue("--board-theme"))
    let root = document.documentElement.style
    let rootc = window.getComputedStyle(document.documentElement)
    // how to get right url?????????????????????
    console.log(rootc.getPropertyValue('--board-url'))
    root.setProperty('--board-url',`var(--board-url-two`)
    console.log(rootc.getPropertyValue('--board-url'))
}

export const togglePieceSet = () => {
    
}

// export const setBoardTheme = (boardTheme) => {
//     let root = document.documentElement.style
//     let curr = root.getProperty
// }

export const setPieceSet = (newPieceSet) => {
    let root = document.documentElement.style
    let currentPieceSet = root.getProperty("--piece-set");
    if (currentPieceSet === newPieceSet) {
        return
    }

    root.setProperty("--piece-w","url()");

}
