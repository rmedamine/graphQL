

export function DivsIndes(classes) {
    let divs = document.createElement("div")
    divs.className = classes
    return divs
}


export function spans(clas, cont) {
    let spn = document.createElement("span")
    spn.textContent = cont
    if (clas !== null) {
        spn.className = clas
    }
    return spn
}


export function Content(contents) {
    let cnt = document.createElement("div")
    cnt.className = "content"
    let h4 = document.createElement("h4")
    cnt.append(h4)
    h4.textContent = contents
    return cnt
}

export function generetsvg(tag, att) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", tag)
    for (let key in att) {
        svg.setAttribute(key, att[key])
    }

    return svg
}
