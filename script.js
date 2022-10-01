let body = document.body
let info = document.getElementById("info")
let balik = document.getElementById("balik")
let mode1 = document.getElementById("mode1")
let mode2 = document.getElementById("mode2")
let mode3 = document.getElementById("mode3")
let judul = document.getElementById("judul")
let info2 = document.getElementById("info2")
let info3 = document.getElementById("info3")

const darkLimit = 5
let darkCounter = 0
let darkRemainingLeft

const violetLimit = 7
let violetCounter = 0
let violetRemainingLeft

const orangeLimit = 9
let orangeCounter = 0
let orangeRemainingLeft




function darkMode() {

    if (darkRemainingLeft == 0) {
        balik.textContent = `REFRESH`
        mode1.style.display = "none"
        info.textContent = `💀Habis bro💀 `
        judul.textContent = `MODE GELAP SEPERTI MASA LALU`
        return;
    }

    if (judul.textContent == `MODE GELAP SEPERTI MASA LALU`) {
        judul.textContent = `MODE CAHAYA TERANG SEPERTI MASA DEPAN`
    } else {
        judul.textContent = `MODE GELAP SEPERTI MASA LALU`
    }

    if (body.classList.contains('dark')) {
        mode1.innerHTML = 'MODE DARK'
        mode2.innerHTML = 'MODE JANDA'
        mode3.innerHTML = 'MODE SENJA'
    } else {
        mode1.innerHTML = 'MODE LIGHT'
    }

    darkCounter += 1
    darkRemainingLeft = darkLimit - darkCounter

    info.textContent = `KESEMPATAN TERSISA =${darkRemainingLeft}`
    info.style.display = "block"
    info2.style.display = "none"
    info3.style.display = "none"
    body.classList.toggle("dark")
    body.classList.remove("janda")
    body.classList.remove("senja")
}



function violetMode() {
    if (violetRemainingLeft == 0) {
        balik.textContent = `REFRESH`
        mode2.style.display = "none"
        info2.textContent = `💀Habis bro💀 `
        judul.textContent = `MODE JANDA PINGGIR RUMAH LU`
        return; 
    }

    if (judul.textContent == `MODE JANDA PINGGIR RUMAH LU`) {
        judul.textContent = `MODE KEMBANG DESA`
    } else {
        judul.textContent = `MODE JANDA PINGGIR RUMAH LU`
    }

    if (body.classList.contains('janda')) {
        mode1.textContent = 'MODE DARK'
        mode2.textContent = 'MODE JANDA'
        mode3.textContent = 'MODE SENJA'
    } else {
        mode2.textContent = 'MODE BIASA'
    }

    violetCounter += 1
    violetRemainingLeft = violetLimit - violetCounter

    info2.textContent = `KESEMPATAN TERSISA =${violetRemainingLeft}`
    info.style.display = "none"
    info2.style.display = "block"
    info3.style.display = "none"
    body.classList.toggle("janda")
    body.classList.remove("dark")
    body.classList.remove("senja")
}


function orangeMode() {
    if (orangeRemainingLeft == 0) {
        balik.textContent = `REFRESH`
        mode3.style.display = "none"
        info3.textContent = `💀Habis bro💀`
        judul.textContent = `MODE SENJA SORE SAAT MAGHRIB`
        return;
    }

    if (judul.textContent == `MODE SENJA SORE SAAT MAGHRIB`) {
        judul.textContent = `MODE SIANG SAAT MATAHARI MEMBAKAR KULIT`
    } else {
        judul.textContent = `MODE SENJA SORE SAAT MAGHRIB`
    }

    if (body.classList.contains('senja')) {
        mode1.innerHTML = 'MODE DARK'
        mode2.innerHTML = 'MODE JANDA'
        mode3.innerHTML = 'MODE SENJA'
    } else {
        mode3.innerHTML = 'MODE TERANG'
    }

    orangeCounter += 1
    orangeRemainingLeft = orangeLimit - orangeCounter

    info3.textContent = `KESEMPATAN TERSISA =${orangeRemainingLeft}`
    info.style.display = "none"
    info2.style.display = "none"
    info3.style.display = "block"
    body.classList.toggle("senja")
    body.classList.remove("janda")
    body.classList.remove("dark")
}

function restart() {
    location.reload()
}